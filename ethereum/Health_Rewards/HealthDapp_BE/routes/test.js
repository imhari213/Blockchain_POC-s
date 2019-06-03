
var Web3 = require('web3');
var web3 = new Web3(
  new Web3.providers.HttpProvider('https://rinkeby.infura.io/01430c533dcd4c42bd9cc98cff3eb0a4')
);
var tx = require('ethereumjs-tx');
var lightwallet = require('eth-lightwallet');
var txutils = lightwallet.txutils;
var WAValidator = require('wallet-address-validator');

var Web3EthAccounts = require('web3-eth-accounts');
 console.log("fsdafda");
var account = new Web3EthAccounts('https://rinkeby.infura.io/01430c533dcd4c42bd9cc98cff3eb0a4');

var n =  account.create()

console.log(n);

console.log(n.address);


var valid = WAValidator.validate(n.address, 'ETC');
if(valid)
    console.log('This is a valid address');
else
    console.log('Address INVALID');