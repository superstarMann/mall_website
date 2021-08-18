import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () =>{
    return (
        <>
        <h1>Clothes</h1>
        <ul>
            <li><Link to='/'>Outer</Link></li>
            <li><Link to='top'>Top</Link></li>
            <li><Link to='/bottom'>Bottom</Link></li>
            <li><Link to='/accessories'>Accessories</Link></li>
        </ul>
        </>
    )
}