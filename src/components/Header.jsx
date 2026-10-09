import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    { to: '/projects', label: 'Projets' },
    { to: '/about', label: 'À propos' },
    { to: '/contact', label: 'Contact' },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="relative z-40 flex justify-between items-center py-5 md:py-6 px-5 sm:px-8 lg:px-10 container mx-auto">
            <Link to="/" className="flex items-center gap-2">
                <div className="leading-tight text-sm font-medium">
                    <div>Gwenaëlle Besson</div>
                </div>
            </Link>

            <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                {navLinks.map(link => (
                    <Link key={link.to} to={link.to} className="hover:text-design-cyan transition-colors">{link.label}</Link>
                ))}
            </nav>

            {/* Mobile menu toggle */}
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                className="md:hidden -mr-2 p-2 flex flex-col justify-center gap-1.5 w-10 h-10"
            >
                <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </button>

            {/* Mobile menu panel */}
            {open && (
                <nav className="md:hidden absolute top-full left-0 right-0 mx-5 sm:mx-8 bg-[#111111] text-white border border-gray-800 rounded-lg flex flex-col py-2 shadow-xl">
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setOpen(false)}
                            className="px-5 py-3 font-oswald uppercase text-xl tracking-wide hover:text-design-cyan transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
