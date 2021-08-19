import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () =>{
    return (
        <div>
        <h1 className=' bg-gray-500 py-5 w-full flex justify-center'>Clothes | Logo</h1>
            <ul className='flex gap-10 justify-center mt-6 max-w-screen-xl text-center mx-auto'>
                <li><Link to='/'>Outer</Link></li>
                <li><Link to='top'>Top</Link></li>
                <li><Link to='/bottom'>Bottom</Link></li>
                <li><Link to='/accessories'>Accessories</Link></li>
            </ul>
        </div>
    )
}