'use client';
import React, { useState } from 'react';
import './navbar.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    TigerBytes
                </div>
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <a href="#home" className="navbar-item">Home</a>
                    <a href="#about" className="navbar-item">About</a>
                    <a href="#services" className="navbar-item">Services</a>
                    <a href="#contact" className="navbar-item">Contact</a>
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