import React from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import AllInboxIcon from '@material-ui/icons/AllInbox';
function Header() {
    return (
        <nav className="header">
            <h1>Hello</h1>
            <Avatar/>
            <AllInboxIcon/>
        </nav>
    )
}

export default Header;        