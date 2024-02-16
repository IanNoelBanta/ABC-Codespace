import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");

  const taetae = await ethers.deployContract("tae");
  
  await taetae.waitForDeployment();
  
  const contractAddress = await taetae.getAddress();

  console.log(
    `Token contract ${contractAddress} deployed to ${taetae.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
