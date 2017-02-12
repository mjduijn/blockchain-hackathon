pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Fund.sol";

contract FundTest {

    function testInitFund() {
        Fund fund = new Fund("hex.nl");
        Assert.equal(fund.owner(), this, "");
    }

    function testInvest() {
        Fund fund = new Fund("hex.nl");
        TotalAsset asset = new TotalAsset();
        asset.setValuation(42);
        fund.investInOpertunity(asset);

        Assert.equal(fund.valuation(), 42, "valuation should be 42");
    }

    function testRequest() {
        Fund fund = new Fund("hex.nl");
        TotalAsset asset = new TotalAsset();
        asset.setValuation(42);

        fund.requestParticipation.value(10)();

        Assert.equal(fund.getValue(this), 42, "");
    }
}
