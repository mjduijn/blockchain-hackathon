pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Fund.sol";
import "../contracts/PersonalPensionWallet.sol";

contract PersonalPensionWalletTest2 {

    function testSetInvestment() {
        Fund defaultFund = new Fund("http://myfund.nl");
        PersonalPensionWallet ppw = new PersonalPensionWallet(0x34, defaultFund);

        Fund f = new Fund("http://myfund.nl");

        ppw.setInvestment(f, 50);

        if(!ppw.call.gas(200000).value(this.balance)()) {
            throw;
        }
    }
}
