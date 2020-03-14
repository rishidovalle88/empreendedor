import React from 'react';

import logo from '../../assets/img/logo.webp';

export default function SidebarHeader() {
    return (
        <>
            {/* Brand Logo */}
            <a href="/" className="brand-link">
                <img src={logo} alt="7 Equilibrium" className="brand-image img-circle" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">7 Equilibrium</span>
            </a>
        </>
    )
}
