const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Deploy the contract
  const helloWorld = await HelloWorld.deploy();

  // Wait for the contract to be deployed
  await helloWorld.waitForDeployment(); // Correct way to wait for deployment

  // Use `target` to get the deployed contract address
  const contractAddress = helloWorld.target;

  // Set the message after deployment
  const messageToSet = "Hello, Solidity!";
  const tx = await helloWorld.setMessage(messageToSet);

  // Wait for the transaction to be mined
  await tx.wait();

  // Output the deployed contract address and the message
  console.log(`HelloWorld deployed to: ${contractAddress}`);
  console.log(`Message set to: ${messageToSet}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// async function main() {
//   const NightsOfCode = await ethers.getContractFactory("NightsofCode");
//   const nightsofCode = await NightsOfCode.deploy("Initial Message!");

//   console.log("Deploying contract...");
//   const receipt = await nightsofCode.deployTransaction.wait(); // Wait for deployment confirmation

//   console.log(`NightsofCode deployed to: ${receipt.contractAddress}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
