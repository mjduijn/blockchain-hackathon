pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Fund.sol";

contract TestFund {

    function testInitFund() {
        Fund fund = new Fund();

        Assert.equal(fund.owner(), this, "");
    }

}
