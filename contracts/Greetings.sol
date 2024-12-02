// Specify the compiler version
// SPDX-License-Identifier: MIT 
pragma solidity  ^0.8.0;
contract NightsofCode {
    string private message;

    constructor(string memory initializeMessage) {
        message = initializeMessage;        
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public{
        message = newMessage;
    }
}