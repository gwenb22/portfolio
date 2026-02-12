import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-6 px-10 container mx-auto">
            <Link to="/" className="flex items-center gap-2">
                <div className="leading-tight text-sm font-medium">
                    <div>Portfolio</div>
                </div>
            </Link>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                <Link to="/projects" className="hover:text-design-cyan transition-colors">Projets</Link>
                <Link to="/about" className="hover:text-design-cyan transition-colors">À propos</Link>
                <Link to="/contact" className="hover:text-design-cyan transition-colors">Contact</Link>
            </div>
        </header>
    );
};

export default Header;
