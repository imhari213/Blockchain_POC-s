
import "./RLP.sol";
import "./Registration.sol";

contract RLPRegistration is Registration {
    using RLP for RLP.RLPItem;
    using RLP for RLP.Iterator;
    using RLP for bytes;
}