

interface Role {
    function isRegistered(
        Role asRole,
        address account
    ) external view returns (bool);

    event Registered(
        Role inContract, // this contract
        Role asRole,
        bytes32 id,
        address account
    );

    event Unregistered(
        Role inContract, // this contract
        Role asRole,
        bytes32 id,
        address account
    );

    function registerMembership(
        address caller,
        Role parent,
        Role asRole,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) external returns (bytes32);

    function unregisterMembership(
        address caller,
        Role parent,
        Role asRole,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) external;
    
    
    function departmentDoctor(
        Role asRole,
        bytes32 parentId,
        bytes32  npi,
        address account
        ) external returns(bytes32);

    function register(
        address caller,
        Role parent,
        bytes32 parentId,
        bytes32 childId,
        address account,
        bytes rlpData
    ) external returns (bytes32);

    function unregister(
        address caller,
        Role parent,
        bytes32 id,
        address account,
        bytes rlpData
    ) external;
}
