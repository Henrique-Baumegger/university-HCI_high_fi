import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';

const Header = ({ title, showMenu = true }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="flex justify-between items-center p-6 relative z-40">
                <h1 className="text-3xl font-serif text-black">{title}</h1>
                {showMenu && (
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 border border-black rounded bg-white hover:bg-gray-100 z-50 relative"
                    >
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                )}
            </header>
            {isMenuOpen && <NavigationMenu onClose={() => setIsMenuOpen(false)} />}
        </>
    );
};

export default Header;
