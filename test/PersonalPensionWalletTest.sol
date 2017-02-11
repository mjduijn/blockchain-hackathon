pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Fund.sol";
import "../contracts/PersonalPensionWallet.sol";

contract PersonalPensionWalletTest {
    function testInitialSetup() {
        Fund defaultFund = new Fund("http://myfund.nl");
        PersonalPensionWallet ppw = new PersonalPensionWallet(0x42, defaultFund);

        Assert.equal(ppw.government(), this, "");
        Assert.equal(ppw.totalShares(), 100, "");
        Assert.equal(ppw.getInvestment(defaultFund), 100, "");
    }

    function testSetInvestment() {
        Fund defaultFund = new Fund("http://myfund.nl");
        PersonalPensionWallet ppw = new PersonalPensionWallet(0x34, defaultFund);

        Fund f = new Fund("http://myfund.nl");

        Assert.equal(ppw.setInvestment(f, 50), 100, "");
        Assert.equal(ppw.getInvestment(defaultFund), 50, "default should be 50");
        Assert.equal(ppw.getInvestment(f), 50, "new fund should be 50");
    }

    function testSetInvestment2() {
        Fund defaultFund = new Fund("http://myfund.nl");
        PersonalPensionWallet ppw = new PersonalPensionWallet(0x34, defaultFund);

        Fund f = new Fund("http://myfund.nl");

        Assert.equal(ppw.setInvestment(f, 10), 11, "");
        Assert.equal(ppw.getInvestment(defaultFund), 90, "default should be 90");
        Assert.equal(ppw.getInvestment(f), 9, "new fund should be 9");
    }
    function testClearInvestment() {
        Fund defaultFund = new Fund("http://myfund.nl");
        PersonalPensionWallet ppw = new PersonalPensionWallet(this, defaultFund);

        Fund f = new Fund("http://myfund.nl");

        ppw.setInvestment(f, 10);
        ppw.removeInvestment(f);
        Assert.equal(ppw.getInvestment(f), 0, "new fund should be 0");
        Assert.equal(ppw.getInvestment(defaultFund), 100, "fund should be 100");
    }
    function testBla() {
        Fund defaultFund = new Fund("http://myfund.nl");
        PersonalPensionWallet ppw = new PersonalPensionWallet(this, defaultFund);

        Fund f = new Fund("http://myfund.nl");
    }

}
