import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsPopup from './SettingsPopup';

const NavigationMenu = ({ onClose }) => {
    const navigate = useNavigate();
    const [showAbout, setShowAbout] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const handleNavigation = (path) => {
        if (path === 'back') {
            navigate(-1);
        } else {
            navigate(path);
        }
        onClose();
    };

    return (
        <>
            {/* Backdrop - transparent to allow clicking outside to close, or handled by layout */}
            <div className="fixed inset-0 z-40" onClick={onClose}></div>

            {/* Menu Container - Horizontal Row left of the header icon */}
            <div className="absolute top-8 right-24 z-50 flex flex-row items-center gap-8 bg-white dark:bg-gray-800 border border-black dark:border-white rounded-full px-8 py-2 shadow-xl origin-top-right transition-all">

                {/* Home */}
                <button
                    onClick={() => handleNavigation('/')}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors"
                    title="Home"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </button>

                {/* Back */}
                <button
                    onClick={() => handleNavigation('back')}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors"
                    title="Back"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>

                {/* Settings */}
                <button
                    onClick={() => setShowSettings(true)}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors"
                    title="Settings"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                </button>

                {/* About */}
                <button
                    onClick={() => setShowAbout(true)}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors font-serif font-bold text-lg w-8 h-8 flex items-center justify-center"
                    title="About"
                >
                    ?
                </button>
            </div>

            {/* About Dialog */}
            {showAbout && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={() => setShowAbout(false)}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-black dark:border-white max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
                        <h3 className="font-serif text-xl mb-4 border-b border-black dark:border-white pb-2 dark:text-white">About</h3>
                        <p className="font-serif mb-4 dark:text-white">
                            Done with Antigravity, from Group 5 of course HCI in winter semester 2025, implemented with node and so on...
                        </p>
                        <button
                            onClick={() => setShowAbout(false)}
                            className="w-full bg-black text-white dark:bg-white dark:text-black py-2 font-serif hover:bg-gray-800 dark:hover:bg-gray-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Settings Popup */}
            {showSettings && <SettingsPopup onClose={() => setShowSettings(false)} />}
        </>
    );
};

export default NavigationMenu;
