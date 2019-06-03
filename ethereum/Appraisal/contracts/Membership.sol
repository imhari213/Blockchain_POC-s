

import "./Role.sol";


contract Membership  {
 
    event Registered(
        Role asRole,
        bytes32 id,
        bytes32 childId,
        address account,
        bool active
    );

    constructor() {
      
    }

    /**
     * Generates a unique ID that will become the 'id' for whatever you are registering for
     */
    function getId(address account, bytes32 id) internal returns (bytes32) {
        if (id == bytes32("")) {
            return keccak256(account, tx.origin, msg.sender, msg.data, blockhash(block.number));
        } else {
            return id;
        }
    }


        
    function _registerMembership(
        address caller,
        Role withContract,
        Role asRole,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) internal  returns (bytes32) {
        
            bytes32 chosenParentId = getId(account, parentId);
            // register is trusted entry point
            bytes32 chosenChildId = asRole.register(
                caller,
                Role(this),
                chosenParentId,
                childId,
                account,
                rlpData
            );
            emit Registered({
                asRole: asRole,
                id: parentId,
                childId: chosenChildId,
                account: account,
                active: true
            });

            return chosenChildId;
        
    }
    
    
    
    function _unregisterMembership(
        address caller,
        Role withContract,
        Role asRole,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) internal  returns (bytes32) {
        
            bytes32 chosenParentId = getId(account, parentId);
            // register is trusted entry point
            bytes32 chosenChildId = asRole.register(
                caller,
                Role(this),
                chosenParentId,
                childId,
                account,
                rlpData
            );
            emit Registered({
                asRole: asRole,
                id: parentId,
                childId: chosenChildId,
                account: account,
                active: true
            });

            return chosenChildId;
        
    }

  
   
}
