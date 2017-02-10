import os
import bitcoin as b
from ethereum import keys, transactions, _solidity, utils, abi
from ethereum.abi import encode_abi, decode_abi
import rlp
from Crypto.Hash import keccak
from ethjsonrpc import EthJsonRpc

sha3_256 = lambda x: keccak.new(digest_bits=256, data=x)
solc = _solidity
ethrpc = EthJsonRpc('ethdev', 8545)

#Copied the encoding function from ethrpc
def encode_function(signature, param_values):
    prefix = utils.big_endian_to_int(utils.sha3(signature)[:4])

    if signature.find('(') == -1:
        raise RuntimeError('Invalid function signature. Missing "(" and/or ")"...')

    if signature.find(')') - signature.find('(') == 1:
        return utils.encode_int(prefix)

    types = signature[signature.find('(') + 1: signature.find(')')].split(',')
    encoded_params = encode_abi(types, param_values)
    return utils.zpad(utils.encode_int(prefix), 4) + encoded_params

def RecoverAddress(msg, signature, address):
    msghash = utils.sha3(msg).encode('hex')
    r = long(signature[0:66], 16)
    s = long('0x' + signature[66:130], 16)
    v = long('0x' + signature[130:132], 16)
    if not v == 27 and not v == 28:
        v += 27
    recovered_addr = b.ecdsa_raw_recover(msghash.decode('hex'), (v, r, s))
    pub = b.encode_pubkey(recovered_addr, 'bin')
    return ('0x' + utils.sha3(pub[1:]).encode('hex')[24:64] == address)


def sha3(seed):
    return sha3_256(seed).digest()


def NormalizeKey(priv):
    normalized = utils.normalize_address(utils.privtoaddr(priv))
    pub = utils.privtoaddr(normalized)
    return {"mac": pub, "priv": normalized}


def newkey(user):
    priv = utils.sha3(user + ":superinsecure").encode('hex')
    pub = utils.normalize_address(utils.privtoaddr(priv))
    return {"pub": pub, "priv": priv}


def keygen():
    priv = os.urandom(32)
    pw = "superinsecure"

    kdfeval = keys.pbkdf2_hash
    kdfparams = keys.mk_pbkdf2_params()
    # Compute derived key
    derivedkey = kdfeval(pw, kdfparams)

    encrypt = keys.aes_ctr_encrypt
    cipherparams = keys.aes_mkparams()
    # Produce the encryption key and encrypt
    enckey = derivedkey[:16]
    c = encrypt(priv, enckey, cipherparams)
    # Compute the MAC
    mac = sha3(derivedkey[16:32] + c)
    return {"mac": mac, "priv": c}


def compileAndReturnAbi():
    contract = open('ethtools/smartcontract.solc').read()
    compiledcontract = solc.compile_code(contract)["ORV"]
    return abi.ContractTranslator(compiledcontract["abi"])


def sendRaw(contract_addr, encodedfunction, priv):
    #gasprice = 50 * 10**9
    gasprice = ethrpc.eth_gasPrice()
    nonce = ethrpc.eth_getTransactionCount( utils.privtoaddr(priv).encode('hex'))
    tx = transactions.Transaction(nonce=nonce, gasprice=gasprice, startgas=900000, to=contract_addr, value=0, data=encodedfunction).sign(priv)
    raw = rlp.encode(tx).encode('hex')
    result = ethrpc.eth_sendRawTransaction(raw)


    return result


def create_contract(priv, args):
    # args = [insured_amount, _benefit_type, _annuity_rate, _duration,
    #         _effective_date, _expiration_date, _insurance_pubkey, _owner]
    #
    gasprice = ethrpc.eth_gasPrice()
    nonce = ethrpc.eth_getTransactionCount(utils.privtoaddr(priv).encode('hex'))
    contract = open('ethtools/smartcontract.solc').read()
    compiledcontract = solc.compile_code(contract)
    myabi = abi.ContractTranslator(compiledcontract["ORV"]["abi"])
    constructor_params = myabi.encode_constructor_arguments(args).encode('hex')
    tx = transactions.Transaction(nonce=nonce, gasprice=gasprice, startgas=900000, value=0,
                                  data=compiledcontract["ORV"]["bin_hex"] ).sign(priv)
    raw = rlp.encode(tx).encode('hex')
    result = ethrpc.eth_sendRawTransaction(raw)
    # result = ethrpc.create_contract(from_=utils.privtoaddr(priv).encode('hex'),code=compiledcontract["ORV"]["bin_hex"] + constructor_params,gas=1000000)
    return {"contract_tx": result}

def getContractAddress(tx):
    try:
        contract_addr = ethrpc.get_contract_address(tx)
    except:
        contract_addr = None
    return contract_addr


def addBeneficiary(contractid, priv, hash, priority, address):
    function = encode_function('add_beneficiary(bytes32,uint8,address)',[hash, priority, address])
    return sendRaw(contractid, function, priv)


def deleteBeneficiary(contractid, priv, hash, address):
    function = encode_function('remove_beneficiary(bytes32,address)', [hash, address])
    return sendRaw(contractid, function, priv)


def authorizeUser(contractid, priv):
    function = encode_function('add_authorized_user(address)', [utils.privtoaddr(priv)])
    return sendRaw(contractid, function, priv)


def deauthorizeUser(contractid, priv, address):
    function = encode_function('remove_authorized_user(address)', [utils.privtoaddr(priv)])
    return sendRaw(contractid, function, priv)

def setOwner(contractid, priv, address):
    function = encode_function('set_owner(address)', [address])
    return sendRaw(contractid, function, priv)

def fundAccount(frompriv, to, amount=None):
    gasprice = ethrpc.eth_gasPrice()
    nonce = ethrpc.eth_getTransactionCount(utils.privtoaddr(frompriv).encode('hex'))
    #estimated average user function costs about 20k gas and does about 10 actions
    if not amount:
        amount = gasprice * (20000 * 10)
    tx = transactions.Transaction(nonce=nonce, gasprice=gasprice, startgas=100000, to=utils.privtoaddr(to), value=amount, data='').sign(frompriv)
    raw = rlp.encode(tx).encode('hex')
    return  ethrpc.eth_sendRawTransaction(raw)

def signContract(contractid, priv, signature):
    function = encode_function('sign_contract(bytes32)', [signature])
    return sendRaw(contractid, function, priv)


def disableContract(priv,contractid):
    function = encode_function('disable_contract()', [])
    return sendRaw(contractid, function, priv)


def getDuration(contractid):
    response = ethrpc.call(contractid, 'duration()', [],['uint8'])
    return response


def isAuthorized(contractid,address):
    response = ethrpc.call(contractid, 'is_authorized(address)', [address], ['bool']).encode('hex')
    return response