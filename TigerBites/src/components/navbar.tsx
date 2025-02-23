import { useState } from 'react';
import './navbar.css';
import AuthStatus from './authstatus';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">TigerBytes</a>
                </div>
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <a href="/about" className="navbar-item">About</a>
                    <a href="#services" className="navbar-item">Services</a>
                    <a href="#contact" className="navbar-item">Contact</a>
                </div>
                <a href="/login"><AuthStatus /></a>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}