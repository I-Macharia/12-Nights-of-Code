require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");

const { SEPOLIA_RPC_URL, PRIVATE_KEY } = process.env;

const config = {
  solidity: {
    compilers: [
      {
        version: "0.8.27", // Added this to fix Error HH606
      },
      {
        version: "0.8.17", // Retain the existing version
      },
    ],
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};

module.exports = config;
