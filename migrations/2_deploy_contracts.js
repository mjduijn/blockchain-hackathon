var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Asset = artifacts.require("./Asset.sol");
var Fund = artifacts.require("./Fund.sol");
var PersonalPensionWallet = artifacts.require("./PersonalPensionWallet.sol");
var Market = artifacts.require("./Market.sol");
var Owned = artifacts.require("./Owned.sol");
var Migrations = artifacts.require("./Migrations.sol");
var AssetShare = artifacts.require("./AssetShare.sol");


module.exports = function (deployer) {
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, MetaCoin);
    deployer.deploy(Market);

    deployer.deploy(Asset);
    deployer.deploy(Owned);

    deployer.link(Asset, AssetShare);
    deployer.link(Owned, AssetShare);
    deployer.deploy(AssetShare);

    deployer.link(Owned, Fund);
    deployer.link(AssetShare, Fund);
    deployer.link(Market, Fund);
    deployer.deploy(Fund);


    deployer.link(Fund, PersonalPensionWallet);


    deployer.deploy(PersonalPensionWallet);


};
