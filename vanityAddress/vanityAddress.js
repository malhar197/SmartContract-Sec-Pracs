const crypto = require('crypto');
const ethUtil = require("ethereumjs-util");


// const generateAddress = () => {
// 	let privKey = crypto.randomBytes(32);
// 	let pubKey = ethUtil.privateToPublic(privKey);
// 	let hashedPubKey = ethUtil.keccak256(pubKey);
// 	let truncatedHashedPubKey = hashedPubKey.slice(12);
// 	let ethAddress = '0x' + truncatedHashedPubKey.toString('hex');
// 	return ethAddress;
// }

const getVanityAddress = () => {
	var privKey = crypto.randomBytes(32);
	var pubKey = ethUtil.privateToPublic(privKey);
	var hashedPubKey = ethUtil.keccak256(pubKey);
	var truncatedHashedPubKey = hashedPubKey.slice(12);
	var ethAddress = '0x' + truncatedHashedPubKey.toString('hex');

	while(ethAddress.slice(0,6) !== '0x1234'){
		privKey = crypto.randomBytes(32);
		pubKey = ethUtil.privateToPublic(privKey);
		hashedPubKey = ethUtil.keccak256(pubKey);
		truncatedHashedPubKey = hashedPubKey.slice(12);
		ethAddress = '0x' + truncatedHashedPubKey.toString('hex');
	}
	console.log('Private Key:')
	console.log(privKey);
	console.log('Ethereum Address: ' + ethAddress);
	//console.log(ethAddress.length);
}

getVanityAddress();