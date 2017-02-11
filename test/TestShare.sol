pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Share.sol";

contract TestShare {

  function testInitialShareSetup() {
    Asset asset = new Asset(3);

    Share share = new Share(asset);
    Assert.equal(share.owner(), this, "Owner address does not match expected owner address");
  }

  function testInitialShareSetup2() {
    Asset asset = new Asset(3);

    Share share = new Share(asset);
    Assert.equal(share.asset(), asset, "Asset address does not match expected asset address");
  }
}
