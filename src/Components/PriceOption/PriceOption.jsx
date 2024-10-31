import PropTypes from 'prop-types';
import AccessItem from '../AccessItem/AccessItem';

const PriceOption = ({ option }) => {
    // console.log(option);
    const { name, duration, price, access } = option;
    // console.log(access);

    return (
        <div className=' bg-lime-400 rounded-lg flex flex-col text-wrap p-5  shadow-2xl'>
            <h2 className='text-center '>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl font-semibold'>/month</span>
            </h2>
            <h4 className='text-4xl font-bold text-center my-5'>{name}</h4>
            <h4 className='text-4xl font-semibold text-center my-5'>{duration}</h4>

            <h5 className='text-4xl font-medium text-wrap'>You are eligible to access of this :</h5>
            <div className='flex-grow'>
                {
                    access.map((accessItem, index) => <AccessItem key={index} accessItem={accessItem}> </AccessItem>)
                }
            </div>

            <div className='flex items-center justify-center py-5'>
                <button className='btn btn-primary '>Subscribe</button>
            </div>

        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.shape({
        name: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        access: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default PriceOption;