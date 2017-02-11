pragma solidity ^0.4.4;

import "./Owned.sol";
import "./AssetShare.sol";
import "./Market.sol";

contract Fund is Owned {
    //Shares of assets that the fund has
    AssetShare[] shares;

    uint public numInvestors;
    uint public invested;
    // index on the list of owners to allow reverse lookup
    mapping(address => uint) public investorsMap;
    address[] public investorsList;

    function Fund() {
        owner = msg.sender;
    }

    function investInOpertunity(Market market, Asset asset) onlyOwner {
    }

    function divestOpertunity(Market market, Asset asset) onlyOwner {
    }

    function requestParticipation(uint amount) {
    }

    function requestSellShares(uint amount) {
    }
}
