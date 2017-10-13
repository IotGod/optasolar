function getBalance(account) {
	return web3.eth.getBalance(account)
}

// token section

var solaToken = ""

var erc20Abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"}];

var solaAddr = solaToken.val();
var token = web3.eth.contract(erc20Abi).at(solaAddr);


function getTokenData(accountAddr) {
// 1. get the total supply

token.totalSupply.call(function (err, totalSupply) {

	// 2. get the number of decimal places used to represent this token

	token.decimals.call(function (err, decimals) {

		// 3. get the name of the token

		token.name.call(function (err, name) {

			// 3. get the balance of the account holder

			var accountAddress = accountAddr.val();

			token.balanceOf.call(accountAddress, function (err, balance) {


			});

		});

	});

});

var percentOwned = balance.div(totalSupply).mul(100);

var divisor = new web3.BigNumber(10).toPower(decimals);
totalSupply = totalSupply.div(divisor);
balance = balance.div(divisor);
}
