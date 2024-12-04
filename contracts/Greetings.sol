
// SPDX-License-Identifier: MIT 
pragma solidity  ^0.8.27;


// contract NightsofCode {
//     string private message;

//     constructor(string memory initializeMessage) {
//         message = initializeMessage;        
//     }

//     function getMessage() public view returns (string memory) {
//         return message;
//     }

//     function setMessage(string memory newMessage) public{
//         message = newMessage;
//     }
// }

contract HelloWorld {
    string public message;

    // Constructor removed; message will be set later

    function getMessage() public view returns (string memory) {
        return message;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}