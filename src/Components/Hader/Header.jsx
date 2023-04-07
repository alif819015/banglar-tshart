import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-end gap-6 font-semibold text-purple-800 mt-5 bg-orange-200 px-8 py-3'>
            <Link to='/'>Home</Link>
            <Link to='/review'>OrderReview</Link>
            <Link to='/about'>About</Link>
            <Link to='/contract'>Contract</Link>
        </nav>
    );
};

export default Header;