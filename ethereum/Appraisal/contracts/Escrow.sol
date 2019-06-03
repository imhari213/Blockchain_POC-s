pragma solidity ^0.4.25;

import './ERC20.sol';

contract Escrow {
    
    
    struct goalData {
        string goalType;
        string goalName;
        address assignedBy;
        address assigne;
        string status;
    }
    
    event goalRegistered(
        bytes32 id,
        address assignedBy,
        address assigne
        );
    
    event goalCompleted(
        bytes32 id,
        string status
        );
    
    mapping(bytes32 => goalData) public goals;
    
    
    function registerGoal(
        string goalType,
        string goalName,
        address assignedBy,
        address assigne,
        string status,
        address tokenAddress,
        uint tokenCount
        ){
            
            //generating unique id
            bytes32 id = keccak256(assigne, tx.origin, msg.sender, msg.data, blockhash(block.number));
            
            goals[id] = goalData({
                goalType : goalType,
                goalName : goalName,
                assignedBy : assignedBy,
                assigne : assigne,
                status : status
                
            });
            
            uint multiplier = 1000000000000000000;
            uint tokens = multiplier * tokenCount ;
            
           
           ERC20(tokenAddress).transferFrom(assignedBy, this, tokenCount);
            
            emit goalRegistered({
                id : id,
                assignedBy : assignedBy,
                assigne : assigne
                });
            
            
        }
        
        
    function claimGoal(
        bytes32 id,
        string status,
        address tokenAddress,
        address assigne,
        address assignedBy,
        uint tokenCount
        ){
            
            goals[id].status = status;
            uint multiplier = 1000000000000000000;
            uint tokens = multiplier * tokenCount ;
            ERC20(tokenAddress).transfer(assigne,tokens);
            
            emit goalCompleted({
                id : id,
                status : status
                });
            
            
        } 
        
      
    
}