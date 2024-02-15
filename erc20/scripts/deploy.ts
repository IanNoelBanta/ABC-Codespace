import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");

  const Token = await ethers.deployContract("Zzz", ["0x1A5FA18CA9270a5a46BBf99bB0A21fbc08F7b8E2"]);
  
  await Token.waitForDeployment();

  console.log(
    `Token deployed to ${Token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
