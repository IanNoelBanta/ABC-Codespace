// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract Zzz2 is ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor() ERC721("Zzz2 ", "z2") {}

    function safeMint() external {
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(
            tokenId,
            "ipfs://bafkreibs5tunrozpvvblvahpx5bwitu3sgugyo6uyoty2hmql6zbvlemaa"
        );
    }
}
