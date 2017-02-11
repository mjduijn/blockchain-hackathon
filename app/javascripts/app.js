var accounts, account;
artifacts.require("./MetaCoin.sol");


window.onload = function() {
    var web3 = new Web3();
    console.log(web3);
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

    MetaCoin.deployed().then(function(instance) {
      console.log(instance);
    });


	web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }
    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }
    accounts = accs;
    account = accounts[0];
  });
};
