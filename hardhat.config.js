require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC =
  "https://polygon-amoy.g.alchemy.com/v2/5faisyup4bci9LxeE4YQk2CARB3tLciO";
const NEXT_PUBLIC_PRIVATE_KEY =
  "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
/** @type import('hardhat/config').HardhatUserConfig */
const RPC_URL = "https://rpc.ank.com/polygon_mumbai";
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "polygon_amoy",
  networks: {
    hardhat: {
    // chainId: 80002,
    },
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
  // solidity: {
  //   version: "0.8.9",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 200,
  //     },
  //   },
  // },
  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};
