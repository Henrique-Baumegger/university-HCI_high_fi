import React from 'react';
import { useAppContext } from '../context/AppContext';

const SettingsPopup = ({ onClose }) => {
    const { theme, toggleTheme, fontSize, setFontSize, boards } = useAppContext();
    const [copySuccess, setCopySuccess] = React.useState('');

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(boards));
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-black dark:border-white max-w-sm w-full shadow-xl" onClick={e => e.stopPropagation()}>
                <h3 className="font-serif text-xl mb-6 border-b border-black dark:border-white pb-2 text-center dark:text-white">Settings</h3>

                {/* Theme Toggle */}
                <div className="mb-6 flex justify-between items-center">
                    <span className="font-serif text-lg dark:text-white">Dark Mode</span>
                    <button
                        onClick={toggleTheme}
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'}`}
                    >
                        <div className={`bg-white dark:bg-black w-4 h-4 rounded-full shadow-md transform duration-300 ${theme === 'dark' ? 'translate-x-6' : ''}`}></div>
                    </button>
                </div>

                {/* Font Size Selector */}
                <div className="mb-8">
                    <span className="font-serif text-lg block mb-2 dark:text-white">Font Size</span>
                    <div className="flex justify-between gap-2">
                        {['small', 'medium', 'large'].map((size) => (
                            <button
                                key={size}
                                onClick={() => setFontSize(size)}
                                className={`flex-1 py-2 border border-black dark:border-white rounded font-serif capitalize ${fontSize === size ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Developer Zone */}
                <div className="mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <span className="font-serif text-lg block mb-2 dark:text-white">Developer Zone</span>
                    <button
                        onClick={handleCopy}
                        className="w-full py-2 border border-black dark:border-white rounded font-serif bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                    >
                        <span>{copySuccess || 'Copy Board Data'}</span>
                        {!copySuccess && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        )}
                    </button>
                    <p className="text-[10px] text-gray-400 mt-2 text-center">
                        Use this to export your local data.
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="w-full bg-black text-white dark:bg-white dark:text-black py-2 font-serif hover:bg-gray-800 dark:hover:bg-gray-200 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SettingsPopup;
