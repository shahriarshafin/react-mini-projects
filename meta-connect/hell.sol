// SPDX-License-Identifier: MIT
// set the version
pragma solidity >=0.5.0 <0.7.0;
contract HelloWorld {  // contract name
    function get()public pure returns (string memory){
        // hello
        return 'Hello Contracts';
    }
}
