// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin-contracts-5.0.2/token/ERC20/ERC20.sol";
import "@openzeppelin-contracts-5.0.2/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin-contracts-5.0.2/token/ERC20/extensions/ERC20Burnable.sol";

contract IOU_proto is ERC20Capped, ERC20Burnable {

    address public owner;

    constructor(uint256 cap) ERC20("CC IOU | Prototype 001", "CC-IOU-Pro-001") ERC20Capped(cap) {
        owner = msg.sender;
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == owner);
        _mint(to, amount);
    }

    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Capped) {
        super._update(from, to, value);
    }
}