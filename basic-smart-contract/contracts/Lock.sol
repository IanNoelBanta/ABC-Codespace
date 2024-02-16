// Create a smart contract that mints a certain amount of ERC20 tokens to the sender depending on the amount of ETH value sent.

// The contract should have a parametet called price per token initialized during deployment.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StringSaver {
    string public data;

    function setData(string memory _data) public payable {
        data = _data;
    }
}
