pragma solidity ^0.4.4;

import "./Fund.sol";

contract PersonalPensionWallet {

    //references to Fund objects and the amount of shares we own in that fund
    Fund[] funds;
    Fund mandatoryFund;
    //everything below this amount should go into the mandatory fund.
    uint constant selfInvestingThreshold = 420;

    function PersonalPensionWallet(Fund mandatoryFund) {

    }

    function addFund(Fund fund){

    }
    //Function can only be executed by the government when person died
    function kill(){}
}