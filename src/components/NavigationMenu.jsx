import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsPopup from './SettingsPopup';
import MiniDeck from './MiniDeck';
import { useAppContext } from '../context/AppContext';

const NavigationMenu = ({ onClose }) => {
    const navigate = useNavigate();
    const [showAbout, setShowAbout] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const { exportData, importData } = useAppContext();
    const fileInputRef = useRef(null);

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

                {/* Export */}
                <button
                    onClick={exportData}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors"
                    title="Export Data"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </button>

                {/* Import */}
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors"
                    title="Import Data"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    className="hidden"
                    onChange={(e) => {
                        if (e.target.files?.[0]) {
                            importData(e.target.files[0]);
                            e.target.value = '';
                        }
                    }}
                />

                {/* About */}
                <button
                    onClick={() => setShowAbout(true)}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors font-serif font-bold text-lg w-8 h-8 flex items-center justify-center"
                    title="About"
                >
                    ?
                </button>
            </div>

            {/* Help Dialog */}
            {showAbout && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 overflow-y-auto py-10" onClick={() => setShowAbout(false)}>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-black dark:border-white w-full max-w-4xl shadow-xl relative" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setShowAbout(false)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dark:text-white">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <h3 className="font-serif text-2xl mb-6 border-b border-black dark:border-white pb-4 dark:text-white">Help</h3>

                        <div className="space-y-4 font-serif text-lg dark:text-gray-200 mb-8">
                            <ul className="list-disc pl-6 space-y-3">
                                <li>You play, create and find boards.</li>
                                <li>A board consists of multiple decks, similar to nodes in a graph.</li>
                                <li>Each one of those decks can store multiple double-sided flashcards.</li>
                                <li>Cards between different decks can be linked, thus making and edge between those cards and their respective decks. This feature allows the user to connect concepts together.</li>
                            </ul>
                        </div>

                        {/* Visualization */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-4">
                            <div className="relative h-72 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 w-full overflow-hidden flex items-center justify-center">

                                {/* Connection Line & Smart Edge Bubbles */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                                    <svg className="absolute w-full h-full overflow-visible">
                                        <line
                                            x1="25%" y1="50%"
                                            x2="75%" y2="50%"
                                            stroke="red"
                                            strokeWidth="3"
                                            strokeDasharray="5,5"
                                        />
                                    </svg>

                                    {/* Smart Edge Bubbles Container */}
                                    <div className="flex flex-col items-center justify-center bg-transparent z-10 scale-90">
                                        <div className="bg-white/90 dark:bg-gray-800/90 px-3 py-1.5 rounded text-xs font-serif border border-red-200 dark:border-red-900 shadow-sm overflow-hidden text-center min-w-[120px] dark:text-white">
                                            Concept A
                                        </div>
                                        <div className="h-8 w-0.5 bg-red-400 opacity-50"></div>
                                        <div className="bg-white/90 dark:bg-gray-800/90 px-3 py-1.5 rounded text-xs font-serif border border-red-200 dark:border-red-900 shadow-sm overflow-hidden text-center min-w-[120px] dark:text-white">
                                            Concept B
                                        </div>
                                    </div>
                                </div>

                                {/* Deck 1 */}
                                <div className="absolute left-[10%] transform scale-[0.6] cursor-pointer hover:scale-[0.65] transition-transform z-10 origin-center">
                                    <MiniDeck
                                        node={{
                                            id: 'demo-1',
                                            content: 'Deck 1',
                                            cards: [
                                                { id: 'd1-c1', front: 'Concept A', back: 'Answer on the back' },
                                                { id: 'd1-c2', front: 'Other Card', back: 'Answer on the back' }
                                            ]
                                        }}
                                        isEditable={false}
                                        isSelected={false}
                                        isScaleExpanded={false}
                                        forceActive={true}
                                    />
                                </div>

                                {/* Deck 2 */}
                                <div className="absolute right-[10%] transform scale-[0.6] cursor-pointer hover:scale-[0.65] transition-transform z-10 origin-center">
                                    <MiniDeck
                                        node={{
                                            id: 'demo-2',
                                            content: 'Deck 2',
                                            cards: [
                                                { id: 'd2-c1', front: 'Concept B', back: 'Answer on the back' },
                                                { id: 'd2-c2', front: 'Yet another card', back: 'Answer on the back' }
                                            ]
                                        }}
                                        isEditable={false}
                                        isSelected={false}
                                        isScaleExpanded={false}
                                        forceActive={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Popup */}
            {showSettings && <SettingsPopup onClose={() => setShowSettings(false)} />}
        </>
    );
};

export default NavigationMenu;
