pragma solidity ^0.4.4;

contract TotalAsset {
    uint public valuation;

    function setValuation(uint _valuation) {
        valuation = _valuation;
    }

    function TotalAsset() {
        valuation = 42;
    }
}