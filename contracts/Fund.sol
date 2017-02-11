pragma solidity ^0.4.4;

import "./Owned.sol";
import "./AssetShare.sol";
import "./Market.sol";

contract Fund is Owned {
    //Shares of assets that the fund has
    AssetShare[] shares;
    string url;

    uint public numInvestors;
    uint public invested;
    // index on the list of owners to allow reverse lookup
    mapping(address => uint) public investorsMap;

    function Fund(string _url) {
        owner = msg.sender;
        url = _url;
    }

    function investInOpertunity(Market market, Asset asset) onlyOwner {
    }

    function divestOpertunity(Market market, Asset asset) onlyOwner {
    }

    function requestParticipation() {
    }

    function requestSellShares(uint amount) {
    }
}
