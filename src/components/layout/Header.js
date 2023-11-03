import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Task list </h1>
            <Link style={linkStyle} to="/">Home</Link> |
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: 'lightcoral',
    color: '#blue',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;