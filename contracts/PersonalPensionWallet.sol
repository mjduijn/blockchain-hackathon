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

    //Modifiers
    modifier onlyGovernment {
        if (msg.sender != government) { throw; }
        else
          _;
    }
    modifier onlyOwner {
        if (msg.sender != owner) { throw; }
        else
          _;
    }

    //Functions
    function setExpectedAge(uint _expectedAge) {
        expectedAge = _expectedAge;
    }

    function changeDefaultFund(Fund _fund) onlyGovernment {
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
        //uint desiredShares = ((100 / (desiredPctg - currentPctg)) * totalShares) - totalShares;
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
        return funds[idx]
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

    //Function can only be executed by the government when person died
    function kill() onlyGovernment {}

    function() payable {
        for(uint i=0; i<investmentCtr; i++) {
            if(investmentPlan[i].shares > 0) {
                if(!investmentPlan[i].fund.call.gas(msg.value)( bytes4(sha3("requestParticipation()"))))
                    throw;
            }
        }
    }
}