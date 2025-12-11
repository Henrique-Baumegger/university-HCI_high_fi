import React, { useState, useEffect } from 'react';

const MiniDeck = ({ node, isEditable, isSelected, isScaleExpanded, onUpdateContent, onUpdateCard, cardLinks, onJumpToLink, jumpRequest, forceActive }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if (jumpRequest && jumpRequest.deckId === node.id) {
            // Find index of the requested card
            if (node.cards) {
                const index = node.cards.findIndex(c => c.id === jumpRequest.cardId);
                if (index !== -1) {
                    setCurrentCardIndex(index);
                    setIsFlipped(false); // Ensure we start at front of the linked card
                }
            }
        }
    }, [jumpRequest, node.id, node.cards]);

    const cards = node.cards || [];
    const currentCard = cards[currentCardIndex];

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        if (cards.length > 0) {
            setCurrentCardIndex((prev) => (prev + 1) % cards.length);
            setIsFlipped(false);
        }
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        if (cards.length > 0) {
            setCurrentCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
            setIsFlipped(false);
        }
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleDeckClick = (e) => {
        // Unified Click Logic for Play and Edit modes (and ForceActive)
        // Checks if interaction is allowed (Expanded, Forced, or Editable)
        if (isScaleExpanded || forceActive || isEditable) {
            if (!isFlipped) {
                handleFlip();
            } else {
                handleNext();
            }
        }
    };

    // handleContentChange removed as inline editing is disabled.

    return (
        <div
            className={`relative flex items-center justify-center transition-transform duration-300 ease-in-out ${isScaleExpanded ? 'scale-[1.8] z-50' : ''}`}
            onMouseDown={(e) => {
                if (!isEditable) {
                    e.stopPropagation();
                }
            }}
        >

            {/* Left Arrow Bar */}
            <button
                onClick={handlePrev}
                className="absolute -left-8 top-0 bottom-0 w-8 flex items-center justify-center hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-l-lg dark:text-white transition-colors z-10 group/arrow"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50 group-hover/arrow:opacity-100">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Card Container */}
            <div className="relative">
                <div className={`border bg-white dark:bg-gray-800 w-64 h-48 flex flex-col relative transition-all duration-200 
                    ${isSelected ? 'border-2 border-blue-500 shadow-xl ring-2 ring-blue-200 dark:ring-blue-900' :
                        isScaleExpanded ? 'border-emerald-400 border-2 shadow-2xl shadow-emerald-100/50 dark:shadow-emerald-900/20' : 'border-black dark:border-gray-600'}
                `}>
                    {/* Header/Title Area */}
                    <div className={`min-h-[2rem] border-b flex items-center justify-center px-2 py-1 transition-colors
                        ${isScaleExpanded ? 'bg-emerald-50/30 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' : 'bg-white dark:bg-gray-800 border-black dark:border-gray-600'}
                    `}>
                        <span className="text-xs text-center w-full bg-transparent font-bold dark:text-white break-words whitespace-normal block">{node.content}</span>
                    </div>

                    {/* Card Content */}
                    <div
                        className="flex-1 flex items-center justify-center p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 relative group transition-colors overflow-hidden"
                        onClick={handleDeckClick}
                    >
                        {/* Indicators */}
                        {cards.length > 0 && (
                            <>
                                <span className="absolute top-1 left-2 text-[10px] text-gray-400 font-serif">
                                    {currentCardIndex + 1}/{cards.length}
                                </span>
                                <span className={`absolute top-1 right-2 text-[9px] font-serif ${isFlipped ? 'text-green-500' : 'text-orange-400/80'}`}>
                                    {isFlipped ? "Back" : "Front"}
                                </span>
                            </>
                        )}


                        <div className="w-full flex flex-col items-center">
                            <p className={`font-serif text-base leading-relaxed select-none mt-2 break-words w-full px-2 ${(!cards.length || (!isFlipped ? currentCard?.front : currentCard?.back)?.trim() === '') ? 'text-gray-400 italic' : 'dark:text-white'}`}>
                                {cards.length > 0 ? (
                                    (() => {
                                        const text = isFlipped ? currentCard?.back : currentCard?.front;
                                        if (!text || text.trim() === '') {
                                            return isFlipped ? "New Answer" : "New Question";
                                        }
                                        return text;
                                    })()
                                ) : "Empty Deck"}
                            </p>

                            {isScaleExpanded && isFlipped && currentCard && cardLinks && (
                                (() => {
                                    // Find link for this card
                                    const link = cardLinks.find(l =>
                                        (l.sourceDeckId === node.id && l.sourceCardId === currentCard.id) ||
                                        (l.targetDeckId === node.id && l.targetCardId === currentCard.id)
                                    );

                                    if (link) {
                                        const targetDeckId = (link.sourceDeckId === node.id) ? link.targetDeckId : link.sourceDeckId;
                                        const targetCardId = (link.sourceDeckId === node.id) ? link.targetCardId : link.sourceCardId;

                                        // Optional: Find target deck title for better button text
                                        // but we don't have all nodes here easily without prop drilling more. 
                                        // "Go to connected card" is sufficient as per spec.

                                        return (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onJumpToLink(targetDeckId, targetCardId);
                                                }}
                                                className="mt-4 p-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full border border-blue-300 transition-colors flex items-center justify-center"
                                                title="Go to connected card"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </button>
                                        );
                                    }
                                    return null;
                                })()
                            )}
                        </div>
                    </div>
                </div>

                {/* Stack effect (visual only) */}
                <div className="absolute top-1 left-1 w-64 h-48 border border-black dark:border-gray-600 bg-white dark:bg-gray-800 -z-10 transition-colors"></div>
            </div>

            {/* Right Arrow Bar */}
            <button
                onClick={handleNext}
                className="absolute -right-8 top-0 bottom-0 w-8 flex items-center justify-center hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-r-lg dark:text-white transition-colors z-10 group/arrow"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50 group-hover/arrow:opacity-100">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    );
};

export default MiniDeck;
