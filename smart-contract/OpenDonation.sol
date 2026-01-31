// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OpenDonation {

    struct Donation {
        address donor;
        uint256 amount;
        uint256 time;
    }

    Donation[] public donations;

    function donate() external payable {
        require(msg.value > 0, "Donation must be > 0");
        donations.push(Donation(msg.sender, msg.value, block.timestamp));
    }

    function getDonations() external view returns (Donation[] memory) {
        return donations;
    }

    function totalDonation() external view returns (uint256) {
        uint256 total;
        for (uint i = 0; i < donations.length; i++) {
            total += donations[i].amount;
        }
        return total;
    }
}


