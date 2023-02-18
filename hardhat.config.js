require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    ganache:{
      url:"http://127.0.0.1:7545",
      accounts:[process.env.REACT_APP_PRIVATE_KEY]
    },
    polygon:{
      url:'https://bitter-fittest-energy.matic-testnet.discover.quiknode.pro/72527c8d3c5bf28cf5e370d7f515bbc1d6132c2e/',
      accounts:[process.env.REACT_APP_PRIVATE_KEY]
    }
  }
};
