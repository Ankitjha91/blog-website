import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menu = [
        { text: 'Nature', path: '/Nature' },
        { text: 'Travel', path: '/Travel' },
        { text: 'Technology', path: '/Technology' },
        { text: 'Politics', path: '/Politics' }
    ];

    return (
        <div>
            {/* Header */}
            <div className="border-b bg-white shadow-md sticky top-0 z-50">
                <div className="px-5 py-4 flex justify-between items-center">
                    <Link to='/' className='font-extrabold text-2xl'>BLOGGER</Link>
                    
                    {/* Desktop Menu */}
                    <div className='hidden md:flex space-x-4 items-center'>
                        <ul className='flex space-x-4'>
                            {menu.map((x, i) => (
                                <li key={i}>
                                    <Link className='p-2' to={x.path}>{x.text}</Link>
                                </li>
                            ))}
                        </ul>
                        <button className='bg-slate-500 text-white px-3 py-1 rounded'>
                            <Link to='/create'>+ New Post</Link>
                        </button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Menu (Right Side) */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-md transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out duration-300 md:hidden z-50`}>
                <div className='p-5 flex justify-between items-center'>
                    <h3 className='font-bold text-xl'>BLOGGER</h3>
                    <X className='cursor-pointer' onClick={toggleMenu} />
                </div>
                <ul className='flex flex-col space-y-4 p-5'>
                    {menu.map((x, i) => (
                        <li key={i}>
                            <Link className='block p-2' to={x.path} onClick={toggleMenu}>{x.text}</Link>
                        </li>
                    ))}
                    <button className='bg-slate-500 text-white px-3 py-1 rounded w-full' onClick={toggleMenu}>
                        <Link to='/create'>+ New Post</Link>
                    </button>
                </ul>
            </div>

            {/* Page Content */}
            <div className="flex mx-auto px-5 md:px-20">
                <div className="mt-5 mb-5 min-h-[500px] w-full">
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            <div className="flex bg-slate-800">
                <div className="flex mx-auto px-20 py-10 items-center justify-center">
                    <h3 className='text-gray-400'>BLOGGER</h3>
                </div>
            </div>
        </div>
    );
}

export default Layout;
