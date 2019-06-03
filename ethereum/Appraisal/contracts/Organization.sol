

import "./Role.sol";
import "./RLPRegistration.sol";

contract Organization is RLPRegistration {
    struct OrganizationData {
        mapping(address => bool) admins;
        string name; // entity name
        string streetAddress;
        string city; 
        string state;
        string zip;
        string contact;

    }

    event OrganizationRegistered(
        bytes32 id,
        address account,
        bool active
    );
   // id => rlp struct data
 
    mapping(bytes32 => OrganizationData) public masterAdmins;

    /**
     * Parses RLP data and registers the account as a master admin for the organization
     */
    function register(
        address caller,
        Role parent,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) external  returns (bytes32) {
        // need unique id for each registration
        bytes32 id = getId(account, childId);

        RLP.RLPItem memory data = rlpData.toRLPItem(true);
        require(data.isList(), "RLP data is not a list");
        RLP.Iterator memory iterator = data.iterator();

        require(!masterAdmins[id].admins[account], "Already registered");

        masterAdmins[id] = OrganizationData({
            name: iterator.next().toAscii(),
            streetAddress: iterator.next().toAscii(),
            city: iterator.next().toAscii(),
            state: iterator.next().toAscii(),
            zip: iterator.next().toAscii(),
            contact: iterator.next().toAscii()
         
        });

        // FIXME: Compilation error on newer versions of solidity
        // require(keccak256(types[masterAdmins[id].organizationType]) != keccak256(""), "Invalid organizationType");

        masterAdmins[id].admins[account] = true;
       // orgMap[id] = parentId;

        emit OrganizationRegistered({
            id: id,
            account: account,
            active: true
        });

        return id;
    }

    function unregister(
        address caller,
        Role parent,
        bytes32 id,
        address account,
        bytes rlpData
    ) external  {
        delete masterAdmins[id];
        emit OrganizationRegistered({
            id: id,
            account: account,
            active: false
        });
    }

    // function acl(
    //     address caller,
    //     Role withContract,
    //     Role asRole,
    //     bytes32 parentId,
    //     bytes32 childId,
    //     address account,
    //     bool create
    // ) internal returns (bool) {
    //     return masterAdmins[parentId].admins[caller];
    // }
}
