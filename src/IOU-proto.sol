// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "openzeppelin-contracts-5.0.2/token/ERC20/ERC20.sol"

contrct IOU-proto is ERC20 {
    constructor(uint256 initialSupply) ERC20("IOU-proto", "CC-IOU") {
        _mint(msg.sender, 1000);
    }
}