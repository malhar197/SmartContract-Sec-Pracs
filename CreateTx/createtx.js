const ethers = require('ethers');

let provider = new ethers.providers.JsonRpcProvider();

let w = new ethers.Wallet('0xb02bc2b53e0cf45f2f9cf2d3cc3d100c3a5e727fc7eda0a528bbf899e4b870ca',provider);

let amount = ethers.utils.parseEther('1.0');

let tx = {

    to: "0x69c7e74EF813380661592036e9c734dCDCEe1a74",
    
    value: ethers.utils.parseEther('1.0')
};

let sendPromise = w.sendTransaction(tx);

sendPromise.then((tx) => {
    console.log(tx);
});

