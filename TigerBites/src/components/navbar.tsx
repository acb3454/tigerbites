import { useState } from 'react';
import './navbar.css';
import AuthStatus from './authstatus';
import  logo  from '../assets/tigerbyteslogo.png';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/"><img src={logo}></img></a>
                </div>
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <a href="/about" className="navbar-item">About</a>
                    <a href="/team" className="navbar-item">Team</a>
                    <a href="/login" className="navbar-item"><AuthStatus /></a>
                </div>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}