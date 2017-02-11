pragma solidity ^0.4.4;

import "./Owned.sol";
import "./TotalAsset.sol";
import "./Market.sol";

contract Fund is Owned {
    //Shares of assets that the fund has
    TotalAsset[] assets;
    string url;

    uint public numInvestors;
    uint public invested;
    mapping(address => uint) public investorsMap;

    function Fund(string _url) {
        owner = msg.sender;
        url = _url;
    }

    function investInOpertunity(TotalAsset asset) {
    }

    function divestOpertunity(TotalAsset asset) {
    }

    function valuate() returns (uint) {
        return 0;
    }

    function requestParticipation() {
    }

    function requestSellShares(uint amount) {
    }
}
