import React, { useState } from 'react';

const DeckSidebar = ({ deck, allDecks, onClose, onUpdateCard, onAddCard, onDeleteCard, onAddLink, cardLinks, onDeleteLink }) => {
    const [linkingCardId, setLinkingCardId] = useState(null);
    const [selectedDeckId, setSelectedDeckId] = useState('');
    const [selectedCardId, setSelectedCardId] = useState('');

    if (!deck) return null;

    const handleStartLink = (cardId) => {
        setLinkingCardId(cardId);
        setSelectedDeckId('');
        setSelectedCardId('');
    };

    const handleConfirmLink = () => {
        if (selectedDeckId && selectedCardId) {
            onAddLink(deck.id, linkingCardId, selectedDeckId, selectedCardId);
            setLinkingCardId(null);
        }
    };

    return (
        <div
            className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-800 border-l border-black dark:border-gray-600 shadow-xl z-40 flex flex-col transform transition-transform duration-300 ease-in-out"
            onMouseDown={(e) => e.stopPropagation()}
        >
            {/* Header */}
            <div className="p-4 border-b border-black dark:border-gray-600 flex justify-between items-center bg-[#F9F5FF] dark:bg-gray-900">
                <h2 className="font-serif text-xl font-bold truncate dark:text-white">{deck.content}</h2>
                <button onClick={onClose} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full dark:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Cards List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {deck.cards && deck.cards.map((card, index) => {
                    const relatedLinks = cardLinks ? cardLinks.filter(l =>
                        (l.sourceDeckId === deck.id && l.sourceCardId === card.id) ||
                        (l.targetDeckId === deck.id && l.targetCardId === card.id)
                    ) : [];

                    return (
                        <div key={card.id} className="border border-black dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 relative group">
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                <button
                                    onClick={() => handleStartLink(card.id)}
                                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                    title="Link to another card"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                </button>
                                <button
                                    onClick={() => onDeleteCard(deck.id, index)}
                                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                                    title="Delete Card"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-2">
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">Front (Question)</label>
                                <textarea
                                    value={card.front}
                                    onChange={(e) => onUpdateCard(deck.id, card.id, 'front', e.target.value)}
                                    className="w-full border border-gray-300 dark:border-gray-500 rounded p-2 text-sm font-serif resize-none focus:border-black dark:focus:border-white outline-none bg-white dark:bg-gray-600 dark:text-white"
                                    rows="2"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">Back (Answer)</label>
                                <textarea
                                    value={card.back}
                                    onChange={(e) => onUpdateCard(deck.id, card.id, 'back', e.target.value)}
                                    className="w-full border border-gray-300 dark:border-gray-500 rounded p-2 text-sm font-serif resize-none focus:border-black dark:focus:border-white outline-none bg-white dark:bg-gray-600 dark:text-white"
                                    rows="2"
                                />
                            </div>

                            {relatedLinks.length > 0 && (
                                <div className="mt-2 text-xs border-t border-gray-100 dark:border-gray-600 pt-2">
                                    {relatedLinks.map(link => {
                                        const isSource = link.sourceDeckId === deck.id && link.sourceCardId === card.id;
                                        const otherDeckId = isSource ? link.targetDeckId : link.sourceDeckId;
                                        const otherDeck = allDecks.find(d => d.id === otherDeckId);

                                        return (
                                            <div key={link.id} className="flex justify-between items-center text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 p-1 rounded mb-1">
                                                <span>Linked with {otherDeck?.content || "Unknown Deck"}</span>
                                                <button
                                                    onClick={() => onDeleteLink && onDeleteLink(link.id)}
                                                    className="text-red-500 hover:text-red-700 ml-2"
                                                    title="Remove Link"
                                                >
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Link Selector */}
                            {linkingCardId === card.id && (
                                <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded">
                                    <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 mb-1">Link to:</label>
                                    <select
                                        className="w-full text-xs mb-1 p-1 border rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white"
                                        value={selectedDeckId}
                                        onChange={(e) => { setSelectedDeckId(e.target.value); setSelectedCardId(''); }}
                                    >
                                        <option value="">Select Deck</option>
                                        {allDecks.filter(d => d.id !== deck.id).map(d => (
                                            <option key={d.id} value={d.id}>{d.content || "Untitled Deck"}</option>
                                        ))}
                                    </select>
                                    {selectedDeckId && (
                                        <select
                                            className="w-full text-xs mb-2 p-1 border rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white"
                                            value={selectedCardId}
                                            onChange={(e) => setSelectedCardId(e.target.value)}
                                        >
                                            <option value="">Select Card</option>
                                            {allDecks.find(d => d.id === selectedDeckId)?.cards?.map((c, idx) => (
                                                <option key={c.id} value={c.id}>Card {idx + 1}: {c.front.substring(0, 15)}...</option>
                                            ))}
                                        </select>
                                    )}
                                    <div className="flex justify-end gap-1">
                                        <button onClick={() => setLinkingCardId(null)} className="text-xs px-2 py-1 border rounded dark:border-gray-500 dark:text-white dark:hover:bg-gray-700">Cancel</button>
                                        <button onClick={handleConfirmLink} className="text-xs px-2 py-1 bg-black text-white rounded dark:bg-white dark:text-black" disabled={!selectedCardId}>Add Link</button>
                                    </div>
                                </div>
                            )}

                            <div className="text-right mt-1">
                                <span className="text-[10px] text-gray-400">Card {index + 1}</span>
                            </div>
                        </div>
                    );
                })}

                {(!deck.cards || deck.cards.length === 0) && (
                    <div className="text-center text-gray-500 dark:text-gray-400 py-8 font-serif">
                        No cards in this deck.
                    </div>
                )}
            </div>

            {/* Footer / Add Button */}
            <div className="p-4 border-t border-black dark:border-gray-600 bg-gray-50 dark:bg-gray-900">
                <button
                    onClick={() => onAddCard(deck.id)}
                    className="w-full flex items-center justify-center gap-2 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif dark:text-white"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add New Card
                </button>
            </div>
        </div>
    );
};

export default DeckSidebar;
