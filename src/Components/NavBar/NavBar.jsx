import { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, SetOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];


    return (
        <nav className='bg-[#3e5172] p-10'>
            <div className='md:hidden' onClick={() => SetOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose className='text-2xl text-white' />
                        : <AiOutlineMenu className='text-2xl text-white' />
                }

            </div>

            <ul className={`md:flex duration-700 absolute md:static bg-slate-600 md:bg-inherit text-white p-6 rounded-lg
                ${open ? 'top-16' : '-top-60'}
                `}>

                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;