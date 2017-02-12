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

	Fund.$inject = ['$http','$q'];

	function Fund($http,$q) {
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
		function sleep(seconds) {
			var e = new Date().getTime() + (seconds * 1000);
			while (new Date().getTime() <= e);

		}
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

		function createFund(fund){
			var contractjson = getContract("fund");
			var contract = web3.eth.contract(contractjson.abi);
			console.log(contract.new(fund.url,{data:contractjson.unlinked_binary,from: account,gas:2000000 }));

		}

		function getFunds(personalpension){
			var contractjson = getContract("personalwallet");
			var contract = web3.eth.contract(contractjson.abi).at(personalpension.address);
			var length = contract.fundCtr();
			console.log(length);
			return length;
		}

		function getFund(personalpension,index){
			var contractjson = getContract("personalwallet");
			var contract = web3.eth.contract(contractjson.abi).at(personalpension.address);
			var fund = contract.getFund(index);
			console.log(fund);
			return fund;
		}


		function addFund(fund,address){
			var contractjson = getContract("personalwallet");
			var contract = web3.eth.contract(contractjson.abi).at(address);
			contract.setInvestment(fund,20,{"from": account,gas:1000000 });

		}

		function createPersonalPension(personalpension, account){
			var contractjson = getContract("personalwallet");
			var contract = web3.eth.contract(contractjson.abi);
			console.log(contract.new(personalpension.ownerAddress, "0x3a451a25011e63f24167229689a1b9513818fc8c69b5e265c225a9a1c4ef6c19",{data:contractjson.unlinked_binary,from: accounts[account],gas:2000000 }));

		}

		function payPersonalPension(account, personalpension, weiAmount){
			var contractjson = getContract("personalwallet");
			var contract = web3.eth.contract(contractjson.abi).at(personalpension.address);
			console.log(contract.sendTransaction({from:web3.eth.accounts[account], to: personalpension, value: web3.toWei(weiAmount, "ether"), gas: 1000000}));

		}
		function getAddressFromTX(tx) {
			var data = web3.eth.filter(tx);
			console.log(data);
			return data;
		}

		function metacoinFetch(){
			var contractjson = web3.eth.contract("metacoin");
			var contract = console.log(web3.eth.call(contractjson.abi).at(contractjson.networks["1486837279377"].address))
			console.log(contract.getBalanceInEth.call());
		}
		init();
		return{
			metacoinFetch: metacoinFetch,
			createFund:createFund,
			getFunds: getFunds,
			createPersonalPension: createPersonalPension,
			getAddressFromTX: getAddressFromTX,
			addFund: addFund,
			getFund: getFund
		}

	}

})();
