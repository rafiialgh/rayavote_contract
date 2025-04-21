require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env.MNEMONIC;
const infuraApiKey = process.env.INFURA_API_KEY;

console.log(mnemonic)
console.log(infuraApiKey)

module.exports = {
  mocha: {
    exit: true,
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider(
        'gate hire lawsuit blind force skate soldier visa egg stem stumble absent', 
        'https://sepolia.infura.io/v3/f4dddc8ed9c849f091b854578846d89a'
      ),
      network_id: 11155111, // Sepolia's network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
      },
    },
  },
};
