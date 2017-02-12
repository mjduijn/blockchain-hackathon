pragma solidity ^0.4.4;

// inspired by https://raw.githubusercontent.com/ethereum/meteor-dapp-wallet/master/Wallet.sol
contract TotalAsset {
    uint public valuation;

    function setValuation(uint _valuation) {
        valuation = _valuation;
    }
}