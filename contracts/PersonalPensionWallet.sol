pragma solidity ^0.4.4;

import "./Fund.sol";

contract PersonalPensionWallet {
    //Structs
    struct InvestmentPoint {
        Fund fund;
        uint shares;
    }

    //Fields
    InvestmentPoint[] investmentPlan;
    uint public investmentCtr;
    uint public totalShares;

    address public government;
    address public owner;

    //references to Fund objects and the amount of shares we own in that fund
    Fund[] public funds;
    uint public fundCtr;
    Fund public defaultFund;

    //everything below this amount should go into the mandatory fund.
    uint constant defaultFundThreshold = 420;
    uint public expectedAge;

    //Constructor
    function PersonalPensionWallet(address _owner, Fund _defaultFund) {
        government = msg.sender;
        owner = _owner;
        defaultFund = _defaultFund;
        totalShares = 100;
        investmentCtr = 1;
        investmentPlan.length = investmentCtr;
        investmentPlan[investmentCtr - 1] = InvestmentPoint(defaultFund, totalShares);
        fundCtr = 0;
    }

    //Functions
    function setExpectedAge(uint _expectedAge) {
        expectedAge = _expectedAge;
    }

    function changeDefaultFund(Fund _fund) {
        defaultFund = _fund;
    }

    function setInvestment(Fund fund, uint desiredPctg) returns (uint) {
        if(desiredPctg > 100)
            throw;

        uint currentPctg = 0;
        uint currentShares = 0;
        uint isPresent = 0;
        for(uint i=0; i<investmentCtr; i++) {
            if(investmentPlan[i].fund == fund) {
                currentPctg = investmentPlan[i].shares / totalShares;
                currentShares = investmentPlan[i].shares;
                isPresent = 1;
            }
        }
        uint desiredShares = ((100 * totalShares / (100 - desiredPctg))) - totalShares;
        if(isPresent > 0) {
            for(uint j=0; j<investmentCtr; j++) {
                if(investmentPlan[j].fund == fund) {
                    investmentPlan[j].shares = desiredShares;
                }
            }
        }
        else {
            investmentCtr = investmentCtr + 1;
            investmentPlan.length = investmentCtr;
            investmentPlan[investmentCtr - 1] = InvestmentPoint(fund, desiredShares);
        }

        totalShares = totalShares + desiredShares;


        uint found = 0;
        for(i=0; i<fundCtr; i++) {
            if(funds[i] == fund) {
                found = 1;
            }
        }
        if(found == 0) {
            fundCtr = fundCtr + 1;
            funds.length = fundCtr;
            funds[funds.length - 1] = fund;
        }

        return desiredShares;
    }

    function removeInvestment(Fund fund) returns (uint) {
        for(uint i=0; i<investmentCtr; i++) {
            if(investmentPlan[i].fund == fund) {
                totalShares = totalShares - investmentPlan[i].shares;
                investmentPlan[i].shares = 0;
            }
        }
    }

    function getFund(uint idx) returns (Fund) {
        return funds[idx];
    }

    function getInvestment(Fund fund) returns (uint) {
        uint result = 0;
        for(uint i=0; i<investmentCtr; i++) {
            if(investmentPlan[i].fund == fund) {
                result = (investmentPlan[i].shares * 100 / totalShares);
            }
        }
        return result;
    }

    function() payable {
        uint defaultPayout = 0;
        uint remainder = 0;

        if(msg.value > defaultFundThreshold) {
            defaultPayout = defaultFundThreshold;
            remainder = msg.value - defaultFundThreshold;
        }
        else {
            remainder = 0;
            defaultPayout = msg.value;
        }
        defaultFund.requestParticipation.value(defaultPayout)();
        for(uint i=0; i<investmentCtr; i++) {
            if(investmentPlan[i].shares > 0) {
                investmentPlan[i].fund.requestParticipation.value(investmentPlan[i].shares / totalShares)();
            }
        }
    }
}