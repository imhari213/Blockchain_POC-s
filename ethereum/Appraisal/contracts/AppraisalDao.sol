

import "./Membership.sol";
import "./Role.sol";


/**
 * The contractName contract does this and that...
 */
contract AppraisalDao is  Membership
{
    
   

    function registerMembership(
        Role withContract,
        Role asRole,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) public returns (bytes32) {
        return _registerMembership(
            msg.sender,
            withContract,
            asRole,
            parentId,
            childId,
            account,
            rlpData
        );
    }
   

    
}
