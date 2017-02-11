(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:fundService
	 * @description
	 * # fundService
	 * Service of the app
	 */

	angular
		.module('ethereummod')
		.factory('EthereumService', Fund);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Fund.$inject = ['$http'];

	function Fund($http) {
		var web3;
		var contracts = {};
		var account;
		var accounts;

		if (typeof web3 !== 'undefined') {
		  web3 = new Web3(web3.currentProvider);
		} else {
		  // set the provider you want from Web3.providers
		  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		}

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
		function init(){
			$http.get('/src/contracts/Asset.json').then(function(result){
				contracts["asset"] = result.data;
			}, null);
			$http.get('/src/contracts/Fund.json').then(function(result){
				contracts["fund"] = result.data;
			}, null);

			$http.get('/src/contracts/MetaCoin.json').then(function(result){
				contracts["metacoin"] = result.data;
			}, null);

			$http.get('/src/contracts/PersonalPensionWallet.json').then(function(result){
				contracts["personalwallet"] = result.data;
			}, null);

		}
		function getContract(name){
			return contracts[name];
		}

		function createFund(){
			var contractjson = getContract("fund");
			var contract = web3.eth.contract(contractjson.abi);
			console.log(contract.new("dikkelul.nl",{data:contractjson.unlinked_binary,from: account,gas:2000000 }));

		}
		function metacoinFetch(){
			var contractjson = web3.eth.contract("metacoin");
			var contract = console.log(web3.eth.call(contractjson.abi).at(contractjson.networks["1486837279377"].address))
			console.log(contract.getBalanceInEth.call());
		}
		init();
		return{
			metacoinFetch: metacoinFetch,
			createFund:createFund
		}

	}

})();
