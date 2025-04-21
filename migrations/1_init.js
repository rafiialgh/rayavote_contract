const MyContract = artifacts.require("MyContract");

module.exports = async function (deployer, network, accounts) {
  console.log("Deploying to network:", network);
  console.log("Deployer account:", accounts[0]);

  await deployer.deploy(MyContract);
};
