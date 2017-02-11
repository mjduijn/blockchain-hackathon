pragma solidity ^0.4.4;

import "./Owned.sol";
import "./Asset.sol";

contract AssetShare is Owned {
    Asset public asset;

    function AssetShare(Asset _asset) {
        asset = _asset;
        owner = msg.sender;
    }

    function() payable {
    }
}
