import PropTypes from 'prop-types';

const Link = ({route}) => {
    
    return (
        <div>
            <li key={route.id} className='mr-5 hover:bg-slate-400'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};


 Link.propTypes = {
        route:PropTypes.object
    }
export default Link;

// npm install --save prop-types

// import PropTypes from 'prop-types';
