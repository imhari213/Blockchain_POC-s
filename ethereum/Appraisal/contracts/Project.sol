

import "./Role.sol";
import "./RLPRegistration.sol";

contract Project is RLPRegistration {
    struct ProjectData {
       
        string id;
        string clientname; // entity name
        string projectname;
      
    }

    event ProjectRegistered(
        bytes32 id,
        address account,
        bool active
    );
    
        event ProjectUnregistered(
        bytes32 id,
        address account,
        bool active
    );
    
   // id => rlp struct data
 
    mapping(bytes32 => ProjectData) public projects;

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

    
    
        projects[id] = ProjectData({
            id: iterator.next().toAscii(),
            clientname: iterator.next().toAscii(),
            projectname: iterator.next().toAscii()
         
        });

        // FIXME: Compilation error on newer versions of solidity
        // require(keccak256(types[masterAdmins[id].organizationType]) != keccak256(""), "Invalid organizationType");

      //  employees[id].admins[account] = true;
       // orgMap[id] = parentId;

        emit ProjectRegistered({
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
        delete projects[id];
        emit ProjectUnregistered({
            id:id,
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
