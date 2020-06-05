contract PersonalBank2 {
    address owner;

   mapping(uint256 => bool) replayPrevention;
    
    constructor() public payable {
        owner = msg.sender;
    }
    function() external payable {
    }
     function checkReplay(uint256 num) private view returns(bool){
        return replayPrevention[num];
    }
    function cashCheque(address payable to, uint256 amount, bytes32 r, bytes32 s, uint8 v, uint256 num) public {
                    
        require(!checkReplay(num), "Transaction already completed");
        
        replayPrevention[num] = true;
                    
        bytes32 messageHash = keccak256(abi.encodePacked(to, amount,address(this),num));
        
        bytes32 messageHash2 = keccak256(abi.encodePacked(
            "\x19Ethereum Signed Message:\n32", messageHash
        ));
        
        require(ecrecover(messageHash2, v, r, s) == owner, "bad signature");
       
        
        to.transfer(amount);
    }
}