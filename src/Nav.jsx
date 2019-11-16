import React, { Component } from 'react';
import SearchBar from './SearchBar'
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <ul className="nav-left">
                    <li className="nav-left-item header-logo"><img className="logo" src="../logo.svg"/></li>
                    <li className="nav-left-item"><SearchBar /></li>
                </ul>

                <ul class="nav-links">
                    <li><a href="#" class="nav-item">Host</a></li>
                    <li><a href="#" class="nav-item">Saved</a></li>
                    <li><a href="#" class="nav-item">Dashboard</a></li>
                    <li><a href="#" class="nav-item">Messages</a></li>
                    <li><a href="#" class="nav-item">Help</a></li>
                    <li><a href="#" class="nav-item">Just Me</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav;

