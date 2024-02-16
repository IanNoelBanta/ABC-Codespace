import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.deployContract("Activity1", ["0x1A5FA18CA9270a5a46BBf99bB0A21fbc08F7b8E2"]);
  
  await Token.waitForDeployment();

  console.log(
    // `${Token.fallback} tokens deployed to ${Token.target}`
    `Tokens deployed to ${Token.target}`

  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
