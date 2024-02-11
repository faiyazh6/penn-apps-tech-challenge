import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar: React.FC<{}> = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToApply = () => {
        const applySection = document.getElementById('apply-section');
        if (applySection) {
            applySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar-content">
            <div className="PennApps-Title" onClick={scrollToTop}>
                <p>PENNAPPS</p>
            </div>
            <div className="about-apply-container">
                <div className="about" onClick={scrollToAbout}>
                    <p>ABOUT</p>
                </div>
                <div className="apply" onClick={scrollToApply}>
                    <p>APPLY</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;