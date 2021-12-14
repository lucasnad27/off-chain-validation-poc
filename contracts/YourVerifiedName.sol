pragma solidity >=0.8.10 < 0.9;

contract YourVerifiedName {
    mapping (address => string) public names;
    string public publicKey;

    event NameChanged(address indexed _from, string indexed _name);

    constructor() public {
        publicKey = 
        "-----BEGIN PUBLIC KEY-----\n"
        "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEBQ+KHYy6pX/wkl56uCyLWBTAniSA\n"
        "nYKZYV4ad18v+wFft8ZDTSgZ6kUZKXQqaKRpLfHXkd8ZEwUa0orQW4DFaQ==\n"
        "-----END PUBLIC KEY-----\n"
    };

    function updateName(string jwt) public returns(bool success) {
        string name = getNameFromJWT(jwt);
        if (name == "") {
            return false;
        }
        names[msg.sender] = name;
    }
}
