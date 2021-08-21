import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, withRouter } from 'react-router-dom';

const Header = () =>{
    return (
        <div>
            <Helmet><title>Home | AUG08</title></Helmet>
        <h1 className=' bg-gray-500 py-5 w-full flex justify-center'>Clothes | Logo</h1>
            <ul className='flex gap-10 justify-center mt-6 max-w-screen-xl text-center mx-auto'>
                <li><Link to='/'>Coins</Link></li>
                <li><Link to='/exchanges'>Exchanges</Link></li>
                <li><Link to='/ranks'>Ranks</Link></li>
            </ul>
        </div>
    )
}

export default withRouter(Header);