pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Asset.sol";
import "../contracts/AssetShare.sol";

contract AssetShareTest {
  function testInitialAsssetSetup() {
    address expected = 0x8ea108af610f99a0f65b292a9608f3e99f201bc8;

    Asset asset = new Asset(2);
    Assert.equal(asset.market(), this, "Market address does not match expected Market address");
  }

  function testAddOwner() {
    address expected = 0x8ea108af610f99a0f65b292a9608f3e99f201bc8;

    Asset asset = new Asset(2);
    AssetShare share = new AssetShare(asset);
    asset.addOwner(share);

    Assert.equal(asset.isOwner(share), true, "");
  }

  function testPay() {
    address expected = 0x8ea108af610f99a0f65b292a9608f3e99f201bc8;

    Asset asset = new Asset(2);
    AssetShare share = new AssetShare(asset);
    asset.addOwner(share);

    if(!asset.call.gas(200000).value(this.balance)())
        throw;
  }

  function testValuation() {
    Asset asset = new Asset(2);
    AssetShare share = new AssetShare(asset);
    asset.addOwner(share);

    asset.setValuation(42);

    Assert.equal(asset.valuation(), 42, "");
    Assert.equal(share.asset().valuation(), 42, "");
  }

  function testAuditlog() {
    Asset asset = new Asset(2);
    AssetShare share = new AssetShare(asset);
    asset.addOwner(share);
    asset.addAudit(0x8ea108af610f99a0f65b292a9608f3e99f201bc8, 42, 42);

    //TODO
  }
}
