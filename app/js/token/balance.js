function getBalance(account) {
	return web3.eth.getBalance(account)
}

// token section

var solaToken = "0xb4D86880208609b83c95E2706d569D4680503dE4"

var erc20Abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"}];

var solaAddr = solaToken.val();
var token = web3.eth.contract(erc20Abi).at(solaAddr);

function getSOLAbalance(address1) {
	contract.methods.transfer('0xffcf8fdee72ac11b5c542428b35eef5769c409f0', 1).send().then(console.log).catch(console.error);
	token.balanceOf.call(accountAddress, function (err, balance) {return balance});
}
