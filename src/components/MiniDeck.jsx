import React, { useState } from 'react';

const MiniDeck = ({ node, isEditable, isSelected, isScaleExpanded, onUpdateContent, onUpdateCard }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

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
        if (!isEditable) {
            // Play Logic
            if (isScaleExpanded) {
                // If Expanded: Front -> Flip, Back -> Next
                if (!isFlipped) {
                    handleFlip();
                } else {
                    handleNext();
                }
            } else {
                // Not Expanded: Just flip (legacy behavior, or allow parent to handle expansion)
                handleFlip();
            }
        }
    };

    const handleContentChange = (e) => {
        if (isEditable && onUpdateCard && currentCard) {
            const field = isFlipped ? 'back' : 'front';
            onUpdateCard(currentCard.id, field, e.target.value);
        }
    };

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
                    <div className={`min-h-[2rem] border-b flex items-center justify-between px-2 transition-colors
                        ${isScaleExpanded ? 'bg-emerald-50/30 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' : 'bg-white dark:bg-gray-800 border-black dark:border-gray-600'}
                    `}>
                        {isEditable ? (
                            <textarea
                                value={node.content}
                                onChange={(e) => onUpdateContent(e.target.value)}
                                className="text-xs text-center w-full bg-transparent outline-none font-bold dark:text-white break-words whitespace-normal resize-none h-full overflow-hidden flex items-center justify-center pt-1"
                                placeholder="Deck Title"
                                rows={2}
                            />
                        ) : (
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-bold whitespace-normal leading-tight max-w-[80%] block">{node.content}</span>
                        )}
                        <span className="text-[10px] text-gray-400 font-serif whitespace-nowrap ml-1 shrink-0">
                            {cards.length} cards
                        </span>
                    </div>

                    {/* Card Content */}
                    <div
                        className="flex-1 flex items-center justify-center p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 relative group transition-colors overflow-hidden"
                        onClick={!isEditable ? handleDeckClick : undefined}
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

                        {isEditable && cards.length > 0 ? (
                            <div className="w-full h-full flex flex-col items-center justify-center mt-2">
                                <textarea
                                    value={isFlipped ? currentCard?.back || '' : currentCard?.front || ''}
                                    onChange={handleContentChange}
                                    className="w-full h-full text-center font-serif text-sm resize-none bg-transparent outline-none dark:text-white"
                                    placeholder={isFlipped ? "Back (Answer)" : "Front (Question)"}
                                    onClick={(!isEditable) ? (e) => { e.stopPropagation(); } : undefined}
                                />
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleFlip(); }}
                                    className="absolute bottom-1 right-1 text-[10px] text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-gray-600 rounded px-1 bg-white dark:bg-gray-700"
                                >
                                    Flip
                                </button>
                            </div>
                        ) : (
                            <p className="font-serif text-base leading-relaxed select-none mt-2 dark:text-white break-words w-full px-2">
                                {cards.length > 0 ? (isFlipped ? currentCard?.back : currentCard?.front) : "Empty Deck"}
                            </p>
                        )}
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
