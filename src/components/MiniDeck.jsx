import React, { useState } from 'react';

const MiniDeck = ({ node, onMenuClick, isEditable, onUpdateContent, onUpdateCard }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const cards = node.cards || [];
    const currentCard = cards[currentCardIndex];

    const handleNext = (e) => {
        e.stopPropagation();
        if (cards.length > 0) {
            setCurrentCardIndex((prev) => (prev + 1) % cards.length);
            setIsFlipped(false);
        }
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        if (cards.length > 0) {
            setCurrentCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
            setIsFlipped(false);
        }
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleContentChange = (e) => {
        if (isEditable && onUpdateCard && currentCard) {
            const field = isFlipped ? 'back' : 'front';
            onUpdateCard(currentCard.id, field, e.target.value);
        }
    };

    return (
        <div
            className="flex items-center justify-center gap-2"
        >
            {/* Left Arrow */}
            <button onClick={handlePrev} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full dark:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Card Container */}
            <div className="relative">
                <div className="border border-black dark:border-gray-600 bg-white dark:bg-gray-800 w-48 h-32 flex flex-col relative transition-colors">
                    {/* Header/Title Area */}
                    <div className="h-8 border-b border-black dark:border-gray-600 flex items-center justify-between bg-white dark:bg-gray-800 px-2 transition-colors">
                        {isEditable ? (
                            <input
                                type="text"
                                value={node.content}
                                onChange={(e) => onUpdateContent(e.target.value)}
                                className="text-xs text-center w-full bg-transparent outline-none font-bold dark:text-white"
                                placeholder="Deck Title"
                            />
                        ) : (
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-bold truncate max-w-[80%]">{node.content}</span>
                        )}
                        <span className="text-[10px] text-gray-400 font-serif whitespace-nowrap ml-1">
                            {cards.length} cards
                        </span>
                    </div>

                    {/* Card Content */}
                    <div
                        className="flex-1 flex items-center justify-center p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 relative group transition-colors"
                        onClick={!isEditable ? handleFlip : undefined}
                    >
                        {/* Indicators */}
                        {cards.length > 0 && (
                            <>
                                <span className="absolute top-1 left-2 text-[10px] text-gray-400 font-serif">
                                    {currentCardIndex + 1}/{cards.length}
                                </span>
                                <span className="absolute top-1 right-2 text-[10px] text-gray-400 font-serif">
                                    {isFlipped ? "Back" : "Front"}
                                </span>
                            </>
                        )}

                        {isEditable ? (
                            <div className="w-full h-full flex flex-col items-center justify-center mt-2">
                                <textarea
                                    value={isFlipped ? currentCard?.back || '' : currentCard?.front || ''}
                                    onChange={handleContentChange}
                                    className="w-full h-full text-center font-serif text-sm resize-none bg-transparent outline-none dark:text-white"
                                    placeholder={isFlipped ? "Back (Answer)" : "Front (Question)"}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleFlip(); }}
                                    className="absolute bottom-1 right-1 text-[10px] text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-gray-600 rounded px-1 bg-white dark:bg-gray-700"
                                >
                                    Flip
                                </button>
                            </div>
                        ) : (
                            <p className="font-serif text-lg leading-tight select-none mt-2 dark:text-white">
                                {cards.length > 0 ? (isFlipped ? currentCard?.back : currentCard?.front) : "Empty Deck"}
                            </p>
                        )}
                    </div>

                    {/* Menu Trigger */}
                    <button
                        className="absolute -bottom-8 right-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white rounded-full"
                        onClick={(e) => onMenuClick(e, node, currentCardIndex)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="5" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                        </svg>
                    </button>
                </div>

                {/* Stack effect (visual only) */}
                <div className="absolute top-1 left-1 w-48 h-32 border border-black dark:border-gray-600 bg-white dark:bg-gray-800 -z-10 transition-colors"></div>
            </div>

            {/* Right Arrow */}
            <button onClick={handleNext} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full dark:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    );
};

export default MiniDeck;
