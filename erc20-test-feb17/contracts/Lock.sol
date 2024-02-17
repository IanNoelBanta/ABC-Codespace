// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply, address initialOwner) ERC20("MyToken", "MTK") {
        _mint(initialOwner, initialSupply);
    }

}
