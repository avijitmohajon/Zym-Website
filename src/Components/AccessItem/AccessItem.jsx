import PropTypes from 'prop-types';
import { BsCheckCircleFill } from "react-icons/bs";
const AccessItem = ({ accessItem }) => {

    return (
        <div>
            <p className="text-3xl p-4 font-bold flex items-center"> <BsCheckCircleFill className="mr-2" />{accessItem}</p>

        </div>
    );
};
AccessItem.propTypes = {
    
        accessItem: PropTypes.arrayOf(PropTypes.string).isRequired
    
};

export default AccessItem;