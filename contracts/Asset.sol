pragma solidity ^0.4.4;

// inspired by https://raw.githubusercontent.com/ethereum/meteor-dapp-wallet/master/Wallet.sol
contract Asset {
    struct AuditLog {
        address auditor;
        uint256 signature;
        uint256 reportHash;
    }

    mapping(address => AuditLog) public auditLogs;
    uint public valuation;

    // list of owners
    address[] m_owners;
    // pointer used to find a free slot in m_owners
    uint public m_numOwners;

    // index on the list of owners to allow reverse lookup
    mapping(address => uint) m_ownerIndex;
    // Address of the market performing the IPO
    address public market;

    function Asset(uint _maxOwners) {
        market = msg.sender;
        m_owners = new address[](_maxOwners);
        m_numOwners = 1;
    }


    modifier onlyMarket {
        if (msg.sender != market) { throw; }
        else
          _;
    }


    function isOwner(address _address) returns (bool) {
        return m_ownerIndex[_address] > 0;
    }

    function addOwner(address _address) onlyMarket external {
        m_owners[m_numOwners] = _address;
        m_ownerIndex[_address] = m_numOwners;
        m_numOwners++;
    }


    function() payable {
        for(uint i=1; i<m_numOwners; i++) {
            if (!m_owners[i].send(msg.value / m_numOwners))
                throw;
        }
    }

    function setValuation(uint _valuation) onlyMarket external {
        valuation = _valuation;
    }

    function addAudit(address auditor, uint256 signature, uint256 reportHash) {
        auditLogs[auditor] = AuditLog(auditor, signature, reportHash);
    }
}