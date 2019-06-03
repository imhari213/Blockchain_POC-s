

import "./Role.sol";
import "./Ownable.sol";
import "./Membership.sol";

contract Registration is Membership {
    function registerMembership(
        address caller,
        Role withContract,
        Role asRole,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) public returns (bytes32) {
        return _registerMembership(caller, withContract, asRole, parentId, childId, account, rlpData);
    }

    function unregisterMembership(
        address caller,
        Role withContract,
        Role asRole,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) public returns (bytes32) {
        return _unregisterMembership(caller, withContract, asRole, parentId, childId, account, rlpData);
    }

  
}
