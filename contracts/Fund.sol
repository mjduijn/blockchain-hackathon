pragma solidity ^0.4.4;

import "./Owned.sol";
import "./TotalAsset.sol";
import "./Market.sol";

contract Fund is Owned {
    //Shares of assets that the fund has
    TotalAsset[] public assets;
    uint public assetCtr;
    string url;

    uint public numInvestors;
    uint public invested;
    mapping(address => uint) public investorsMap;

    function Fund(string _url) {
        owner = msg.sender;
        url = _url;
        assetCtr = 0;
    }

    function investInOpertunity(TotalAsset asset) {
        assetCtr = assetCtr + 1;
        assets.length = assetCtr;
        assets[assetCtr - 1] = asset;
    }

    function divestOpertunity(TotalAsset asset) {
        for(uint i=0; i<assetCtr; i++) {
            if(assets[i] == asset) {
                delete assets[i];
            }
        }
    }

    function valuation() returns (uint) {
        uint result = 0;
        for(uint i=0; i<assetCtr; i++) {
            result = result + assets[i].valuation();
        }
        return result;
    }

    function requestSellShares() {
        if(!msg.sender.send(investorsMap[msg.sender] * valuation()))
            throw;
    }

    function getValue(address _address) returns (uint) {
        return investorsMap[msg.sender] * valuation();
    }

    function requestParticipation() payable {
        investorsMap[msg.sender] = msg.value / valuation();
    }
}
