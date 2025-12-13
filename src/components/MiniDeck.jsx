import React, { useState, useEffect } from 'react';

const MiniDeck = ({
    node,
    isEditable,
    isSelected,
    isScaleExpanded,
    onUpdateContent,
    onUpdateCard,
    cardLinks,
    onJumpToLink,
    jumpRequest,
    forceActive,
    onAddCard,
    onDeleteCard,
    onAddLink,
    onDeleteLink,
    onDeleteDeck,
    allDecks
}) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    // Linking State
    const [showLinkMenu, setShowLinkMenu] = useState(false);
    const [linkTargetDeckId, setLinkTargetDeckId] = useState('');
    const [linkTargetCardId, setLinkTargetCardId] = useState('');

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

    // Ensure currentCardIndex is valid when cards are deleted
    useEffect(() => {
        if (currentCardIndex >= cards.length && cards.length > 0) {
            setCurrentCardIndex(cards.length - 1);
        } else if (cards.length === 0 && currentCardIndex !== 0) {
            setCurrentCardIndex(0);
        }
    }, [cards.length, currentCardIndex]);

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
        // If in edit mode, clicking does NOT flip (unless handled by specific buttons or if we want focus)
        // User said: "Clicking on the card makes it editable, you no longer can flip cards."
        // So in edit mode, the click just focuses/does nothing. Flipping is manual via button.
        if (isEditable) return;

        // Unified Click Logic for Play mode
        if (isScaleExpanded || forceActive) {
            if (!isFlipped) {
                handleFlip();
            } else {
                handleNext();
            }
        }
    };

    const handleAddLinkClick = () => {
        if (linkTargetDeckId && linkTargetCardId && currentCard) {
            onAddLink(node.id, currentCard.id, linkTargetDeckId, linkTargetCardId);
            setLinkTargetDeckId('');
            setLinkTargetCardId('');
            setShowLinkMenu(false);
        }
    };

    // Filter links for current card
    const cardSpecificLinks = (cardLinks || []).filter(l =>
        currentCard && (
            (l.sourceDeckId === node.id && l.sourceCardId === currentCard.id) ||
            (l.targetDeckId === node.id && l.targetCardId === currentCard.id)
        )
    );

    return (
        <div
            className={`relative flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isScaleExpanded ? 'scale-[1.8]' : ''} ${(isScaleExpanded || (isEditable && isSelected)) ? 'z-50' : ''}`}
            onMouseDown={(e) => {
                // Determine drag capability
                if (isEditable && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && !e.target.closest('button') && !e.target.closest('select')) {
                    // Start drag
                } else {
                    e.stopPropagation();
                }
            }}
        >
            {/* DELETE DECK BUTTON (Edit Mode Only - Top) */}
            {isEditable && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (window.confirm('Delete this deck?')) onDeleteDeck(node.id);
                    }}
                    className="absolute -top-10 right-0 z-50 p-2 bg-white dark:bg-gray-800 text-red-500 rounded-full shadow-md border hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                    title="Delete Deck"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            )}

            {/* Main Deck Area */}
            <div className="relative flex items-center justify-center">
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    className="absolute -left-10 z-10 p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-full dark:text-white transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                {/* Card Itself */}
                <div className="relative group">
                    <div className={`border bg-white dark:bg-gray-800 w-64 h-48 flex flex-col relative transition-all duration-200 
                        ${isSelected ? 'border-2 border-blue-500 shadow-xl ring-2 ring-blue-200 dark:ring-blue-900' :
                            isScaleExpanded ? 'border-emerald-400 border-2 shadow-2xl shadow-emerald-100/50 dark:shadow-emerald-900/20' : 'border-black dark:border-gray-600'}
                    `}>
                        {/* Title Bar */}
                        <div className={`min-h-[2rem] border-b flex items-center justify-between px-2 py-1 transition-colors
                            ${isScaleExpanded ? 'bg-emerald-50/30 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' : 'bg-white dark:bg-gray-800 border-black dark:border-gray-600'}
                        `}>
                            {isEditable ? (
                                <input
                                    value={node.content}
                                    onChange={(e) => onUpdateContent(e.target.value)}
                                    className="text-xs text-center w-full bg-transparent font-bold dark:text-white border-b border-transparent hover:border-gray-300 focus:border-blue-500 outline-none"
                                    placeholder="Deck Title"
                                />
                            ) : (
                                <span className="text-xs text-center w-full bg-transparent font-bold dark:text-white break-words whitespace-normal block">{node.content}</span>
                            )}
                        </div>

                        {/* Card Body */}
                        <div
                            className="flex-1 flex flex-col items-center justify-center p-4 text-center cursor-default relative overflow-hidden"
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

                            {/* Content or Input */}
                            <div className="w-full h-full flex flex-col items-center justify-center mt-2 gap-2">
                                {isEditable && cards.length > 0 ? (
                                    <textarea
                                        value={isFlipped ? (currentCard?.back || '') : (currentCard?.front || '')}
                                        onChange={(e) => currentCard && onUpdateCard(currentCard.id, isFlipped ? 'back' : 'front', e.target.value)}
                                        className="w-full h-full text-center font-serif text-sm leading-relaxed bg-transparent border-none outline-none resize-none dark:text-white placeholder-gray-400"
                                        placeholder={isFlipped ? "Answer..." : "Question..."}
                                    />
                                ) : (
                                    <p className={`font-serif text-base leading-relaxed select-none break-words w-full px-2 ${(!cards.length || (!isFlipped ? currentCard?.front : currentCard?.back)?.trim() === '') ? 'text-gray-400 italic' : 'dark:text-white'}`}>
                                        {cards.length > 0 ? (
                                            isFlipped ? (currentCard?.back || "Net Answer") : (currentCard?.front || "New Question")
                                        ) : "Empty Deck"}
                                    </p>
                                )}

                                {/* PLAY MODE LINK BUTTON */}
                                {isScaleExpanded && !isEditable && cardSpecificLinks.length > 0 && isFlipped && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const link = cardSpecificLinks[0];
                                            const targetDeckId = (link.sourceDeckId === node.id) ? link.targetDeckId : link.sourceDeckId;
                                            const targetCardId = (link.sourceDeckId === node.id) ? link.targetCardId : link.sourceCardId;
                                            onJumpToLink(targetDeckId, targetCardId);
                                        }}
                                        className="w-8 h-8 flex-shrink-0 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/50 dark:hover:bg-blue-800 border border-blue-500 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 transition-colors shadow-sm mt-2"
                                        title="Jump to Linked Card"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Stack Effect */}
                    <div className="absolute top-1 left-1 w-64 h-48 border border-black dark:border-gray-600 bg-white dark:bg-gray-800 -z-10"></div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute -right-10 z-10 p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-full dark:text-white transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* ACTION BUTTONS (Edit Mode Only - Bottom) */}
            {isEditable && (
                <div className="mt-4 flex flex-col gap-2 items-start w-64">
                    <div className="flex justify-between items-center w-full px-1">
                        {/* Left Group */}
                        <div className="flex gap-2">
                            {/* Add Card */}
                            <button
                                onClick={() => onAddCard(node.id)}
                                className="p-1.5 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 transition-colors"
                                title="Add Card"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>

                            {/* Link Button */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowLinkMenu(!showLinkMenu)}
                                    className={`p-1.5 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 transition-colors ${showLinkMenu ? 'bg-blue-100 dark:bg-blue-900/40 border-blue-400' : ''}`}
                                    title="Link Card"
                                    disabled={cards.length === 0}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                </button>

                                {/* Link Menu Popover */}
                                {showLinkMenu && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-600 rounded p-2 z-50 flex flex-col gap-2">
                                        <div className="text-[10px] font-bold text-gray-500 uppercase">Link To:</div>
                                        <select
                                            className="w-full text-xs p-1 border rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white"
                                            value={linkTargetDeckId}
                                            onChange={(e) => { setLinkTargetDeckId(e.target.value); setLinkTargetCardId(''); }}
                                        >
                                            <option value="">Select Deck...</option>
                                            {allDecks && allDecks.filter(d => d.id !== node.id).map(d => (
                                                <option key={d.id} value={d.id}>{d.content || 'Untitled'}</option>
                                            ))}
                                        </select>

                                        {linkTargetDeckId && (
                                            <select
                                                className="w-full text-xs p-1 border rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white"
                                                value={linkTargetCardId}
                                                onChange={(e) => setLinkTargetCardId(e.target.value)}
                                            >
                                                <option value="">Select Card...</option>
                                                {allDecks.find(d => d.id === linkTargetDeckId)?.cards.map((c, idx) => (
                                                    <option key={c.id} value={c.id}>Card {idx + 1}</option>
                                                ))}
                                            </select>
                                        )}

                                        <button
                                            onClick={handleAddLinkClick}
                                            disabled={!linkTargetDeckId || !linkTargetCardId}
                                            className="w-full bg-black dark:bg-white text-white dark:text-black text-xs py-1.5 rounded disabled:opacity-50"
                                        >
                                            Add Link
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Delete Card */}
                            <button
                                onClick={(e) => {
                                    if (window.confirm('Delete this card?')) onDeleteCard(node.id, currentCardIndex);
                                }}
                                className="p-1.5 rounded bg-gray-100 hover:bg-red-100 dark:bg-gray-700 dark:hover:bg-red-900/30 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                title="Delete Card"
                                disabled={cards.length === 0}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Right Group - Flip */}
                        <button
                            onClick={handleFlip}
                            className="p-1.5 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 transition-colors"
                            title="Flip"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                            </svg>
                        </button>
                    </div>

                    {/* Links Bubbles */}
                    {cardSpecificLinks.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2 px-1 justify-start">
                            {cardSpecificLinks.map(link => {
                                const isSource = link.sourceDeckId === node.id && link.sourceCardId === currentCard.id;
                                const otherDeckId = isSource ? link.targetDeckId : link.sourceDeckId;
                                const otherDeck = allDecks?.find(d => d.id === otherDeckId);

                                return (
                                    <div key={link.id} className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-[10px] px-1.5 py-0.5 rounded-full">
                                        <span className="truncate max-w-[80px]">{otherDeck?.content || 'Unknown'}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDeleteLink && onDeleteLink(link.id);
                                            }}
                                            className="hover:text-red-500 rounded-full p-0.5"
                                        >
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MiniDeck;
