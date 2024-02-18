const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
//   const [owner, addr1] = await ethers.getSigners();
  const initialSupply = ethers.parseUnits("1000", 18);
  const myTokenContract = await await hre.ethers.deployContract("MyToken", [initialSupply, owner.address]);
  await myTokenContract.waitForDeployment();

  // minted 100 tokens
  const ethAmount = ethers.parseUnits("100", 18); 
  // const ethAmount = 100; 

  await myTokenContract.connect(owner).mint(owner.address, ethAmount);

  // staked 100 tokens    
  const ethAmountStake = ethers.parseUnits("10", 18); 
  // const ethAmountStake = 10;

  await myTokenContract.connect(owner).stake(ethAmountStake);

  const stakedBalance = await myTokenContract.getStake(owner.address);
  // const convertedStakedBalance = uint256(stakedBalance) * 10e18;
  // const convertedStakedBalance = ethers.parseUnits(stakedBalance.toString(), 18);
  console.log("Staking successful. Staked balance of Address:", stakedBalance.toString());

  const balance = await myTokenContract.balanceOf(owner.address);
  // const convertedBalance = ethers.parseUnits(balance.toString(), 18);
  console.log("Balance of Address:", balance.toString());
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});