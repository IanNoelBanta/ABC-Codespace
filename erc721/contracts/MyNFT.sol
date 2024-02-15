// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract Zzz  is ERC721URIStorage  {
    uint256 private _nextTokenId;

    constructor()
        ERC721("Zzz ", "z")
    {}

    function safeMint() external {
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(
            tokenId,
            "ipfs://bafkreidyrhfdrgb33wqomqn3tyuoeohdzlrxlpb2h5uqavl2sgi4gtdt2e"
        );
    }
} 