

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import MiniDeck from '../components/MiniDeck';
import ExposedCard from '../components/ExposedCard';
import { useAppContext } from '../context/AppContext';
import DeckSidebar from '../components/DeckSidebar';

const BoardView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { boards, communityBoards, updateBoardTitle, addBoard, setBoards } = useAppContext();
    const [board, setBoard] = useState(null);
    const [mode, setMode] = useState('edit'); // 'edit' or 'play'
    const [menuOpen, setMenuOpen] = useState(null); // { x, y, nodeId }
    const [title, setTitle] = useState('');

    // Flashcard Play Mode State
    const [activeDeckId, setActiveDeckId] = useState(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isCardFlipped, setIsCardFlipped] = useState(false);

    // Sidebar State for editing a specific deck
    const [editingDeckId, setEditingDeckId] = useState(null);

    const [isReadOnly, setIsReadOnly] = useState(false);

    useEffect(() => {
        // Check both user boards and community boards (for play mode)
        let foundBoard = boards.find(b => b.id === id);
        if (!foundBoard) {
            // Try finding in community boards
            const rawId = id.replace('c-', ''); // Handle potential prefix
            foundBoard = communityBoards.find(b => b.id.toString() === rawId || b.id === id);
            if (foundBoard) {
                // If it's a community board, we should probably treat it as read-only or copy it?
                // For "Play" action, we just want to view it.
                setMode('play');
                setIsReadOnly(true);
            }
        } else {
            setIsReadOnly(false);
        }

        if (foundBoard) {
            setBoard(foundBoard);
            setTitle(foundBoard.title);
        }
    }, [id, boards, communityBoards]);

    const handleMenuClick = (e, node, cardIndex = 0) => {
        e.stopPropagation();
        // Calculate position relative to viewport to avoid overflow or weird offsets
        // Using fixed positioning for the menu
        setMenuOpen({ x: e.clientX, y: e.clientY, nodeId: node.id, cardIndex });
    };

    const closeMenu = () => setMenuOpen(null);

    // --- Editing Logic ---
    const handleAddNode = () => {
        if (!board) return;
        const newNode = {
            id: `d - ${Date.now()} `,
            type: 'deck',
            x: 100 + Math.random() * 200,
            y: 100 + Math.random() * 200,
            content: 'New Deck',
            cards: []
        };

        // Update local state
        const updatedBoard = { ...board, nodes: [...(board.nodes || []), newNode] };
        setBoard(updatedBoard);

        // Update global state (which triggers localStorage save)
        setBoards(prevBoards => prevBoards.map(b => b.id === board.id ? updatedBoard : b));
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (board && mode === 'edit') {
            const updatedBoard = { ...board, title: newTitle };
            setBoard(updatedBoard);
            updateBoardTitle(board.id, newTitle);
        }
    };

    const handleUpdateNodeContent = (nodeId, newContent) => {
        const updatedNodes = board.nodes.map(n => n.id === nodeId ? { ...n, content: newContent } : n);
        const updatedBoard = { ...board, nodes: updatedNodes };
        setBoard(updatedBoard);
        setBoards(boards.map(b => b.id === board.id ? updatedBoard : b));
    };

    const handleAddCardToDeck = (deckId) => {
        const updatedNodes = board.nodes.map(n => {
            if (n.id === deckId) {
                const newCard = { id: `c - ${Date.now()} `, front: 'New Question', back: 'New Answer' };
                return { ...n, cards: [...(n.cards || []), newCard] };
            }
            return n;
        });
        const updatedBoard = { ...board, nodes: updatedNodes };
        setBoard(updatedBoard);
        setBoards(boards.map(b => b.id === board.id ? updatedBoard : b));
    };

    const handleDeleteCard = (deckId, cardIndex) => {
        const deckNode = board.nodes.find(n => n.id === deckId);
        if (!deckNode || !deckNode.cards || deckNode.cards.length <= cardIndex) return;

        const cardToDelete = deckNode.cards[cardIndex];
        const cardId = cardToDelete.id;

        const updatedNodes = board.nodes.map(n => {
            if (n.id === deckId) {
                const newCards = [...(n.cards || [])];
                newCards.splice(cardIndex, 1);
                return { ...n, cards: newCards };
            }
            return n;
        });

        // Filter out links associated with this card
        const updatedLinks = (board.cardLinks || []).filter(l =>
            l.sourceCardId !== cardId && l.targetCardId !== cardId
        );

        const updatedBoard = { ...board, nodes: updatedNodes, cardLinks: updatedLinks };
        setBoard(updatedBoard);
        setBoards(boards.map(b => b.id === board.id ? updatedBoard : b));
    };

    const handleExposeCard = (deckId, cardIndex) => {
        const deckNode = board.nodes.find(n => n.id === deckId);
        if (!deckNode || !deckNode.cards || deckNode.cards.length <= cardIndex) return;

        const card = deckNode.cards[cardIndex];

        // Create a new node for the exposed card
        const newNode = {
            id: `exposed - ${Date.now()} `,
            type: 'exposed', // Using 'exposed' type to match ExposedCard component usage
            x: deckNode.x + 280, // Position it to the right of the deck (w-64 = 256 + gap)
            y: deckNode.y,
            content: card.front, // Expose the question/front
            cards: []
        };

        const updatedBoard = { ...board, nodes: [...board.nodes, newNode] };
        setBoard(updatedBoard);
        setBoards(boards.map(b => b.id === board.id ? updatedBoard : b));
    };

    const handleDeleteNode = (nodeId) => {
        const updatedNodes = board.nodes.filter(n => n.id !== nodeId);
        const updatedBoard = { ...board, nodes: updatedNodes };
        setBoard(updatedBoard);
        setBoards(boards.map(b => b.id === board.id ? updatedBoard : b));
    };


    const handleUpdateCard = (deckId, cardId, field, value) => {
        const updatedNodes = board.nodes.map(n => {
            if (n.id === deckId) {
                const updatedCards = n.cards.map(c => c.id === cardId ? { ...c, [field]: value } : c);
                return { ...n, cards: updatedCards };
            }
            return n;
        });
        const updatedBoard = { ...board, nodes: updatedNodes };
        setBoard(updatedBoard);
        setBoards(boards.map(b => b.id === board.id ? updatedBoard : b));
    };

    const handleAddLink = (sourceDeckId, sourceCardId, targetDeckId, targetCardId) => {
        const newLink = {
            id: `l-${Date.now()}`,
            sourceDeckId,
            sourceCardId,
            targetDeckId,
            targetCardId
        };
        const updatedBoard = {
            ...board,
            cardLinks: [...(board.cardLinks || []), newLink]
        };
        setBoard(updatedBoard);
        setBoards(boards.map(b => b.id === board.id ? updatedBoard : b));
    };

    // Calculate unique deck connections for red lines
    const getUniqueDeckConnections = () => {
        if (!board || !board.cardLinks) return [];
        const connections = [];
        const seen = new Set();

        board.cardLinks.forEach(link => {
            // Sort IDs to ensure A->B and B->A are treated as same connection
            const pair = [link.sourceDeckId, link.targetDeckId].sort().join('-');
            if (!seen.has(pair)) {
                seen.add(pair);
                const sourceNode = board.nodes.find(n => n.id === link.sourceDeckId);
                const targetNode = board.nodes.find(n => n.id === link.targetDeckId);
                if (sourceNode && targetNode) {
                    connections.push({ source: sourceNode, target: targetNode });
                }
            }
        });
        return connections;
    };

    // --- Play Mode Logic ---
    const handleDeckClick = (node) => {
        if (mode === 'play' && node.type === 'deck') {
            setActiveDeckId(node.id);
            setCurrentCardIndex(0);
            setIsCardFlipped(false);

            // Center Camera Logic
            // Viewport dimensions (approximated or via window)
            const viewportW = window.innerWidth;
            const viewportH = window.innerHeight;

            // Adjust for offsets. Node position is top-left.
            // Center of node (w-64=256, h-48=192). half is 128, 96.
            const nodeCenterX = node.x + 128;
            const nodeCenterY = node.y + 96;

            // Goal: (nodeCenterX * zoom) + panX = viewportW / 2
            // panX = (viewportW / 2) - (nodeCenterX * zoom)

            setPan({
                x: (viewportW / 2) - (nodeCenterX * zoom),
                y: (viewportH / 2) - (nodeCenterY * zoom)
            });

        } else if (mode === 'edit' && node.type === 'deck') {
            setEditingDeckId(node.id);
        }
    };

    const handleFeedback = (feedback) => {
        console.log(`Feedback: ${feedback} `);
        const activeNode = board.nodes.find(n => n.id === activeDeckId);
        if (activeNode && currentCardIndex < activeNode.cards.length - 1) {
            setCurrentCardIndex(prev => prev + 1);
            setIsCardFlipped(false);
        } else {
            setActiveDeckId(null);
            alert("Deck completed!");
        }
    };

    // --- Zoom & Pan & Drag Logic ---
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 }); // Screen coordinates
    const [startVal, setStartVal] = useState({ x: 0, y: 0 }); // Initial values (node pos or pan pos)

    const [draggingId, setDraggingId] = useState(null);

    const handleWheel = (e) => {
        // Zoom logic
        // "put all the decks in the board in a frame... so that you can 'move around' decks"
        // Enable zoom for both modes as it's a view transform.

        const scaleSensitivity = 0.001;
        const delta = -e.deltaY * scaleSensitivity;
        const newZoom = Math.min(Math.max(0.2, zoom + delta), 4);

        // Zoom towards mouse position
        const containerRect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;

        // Calculate point in world space before zoom
        const worldX = (mouseX - pan.x) / zoom;
        const worldY = (mouseY - pan.y) / zoom;

        // Calculate new pan to keep world point at same screen pos
        const newPanX = mouseX - worldX * newZoom;
        const newPanY = mouseY - worldY * newZoom;

        setZoom(newZoom);
        setPan({ x: newPanX, y: newPanY });
    };

    const handleMouseDownNode = (e, node) => {
        if (mode !== 'edit' || node.type !== 'deck') return;
        e.stopPropagation();
        setDraggingId(node.id);
        setDragStart({ x: e.clientX, y: e.clientY });
        setStartVal({ x: node.x, y: node.y });
    };

    const handleMouseDownBg = (e) => {
        // Start panning
        // Only if clicking directly on background
        setIsPanning(true);
        setDragStart({ x: e.clientX, y: e.clientY });
        setStartVal({ x: pan.x, y: pan.y });

        // If in play mode and a deck is active, click outside resets it
        if (mode === 'play' && activeDeckId) {
            setActiveDeckId(null);
        }
    };

    const handleMouseMove = (e) => {
        if (draggingId) {
            // Node Dragging
            const dx = (e.clientX - dragStart.x) / zoom;
            const dy = (e.clientY - dragStart.y) / zoom;

            const updatedNodes = board.nodes.map(n =>
                n.id === draggingId ? { ...n, x: startVal.x + dx, y: startVal.y + dy } : n
            );
            setBoard({ ...board, nodes: updatedNodes });
        } else if (isPanning) {
            // Pan Dragging
            const dx = e.clientX - dragStart.x;
            const dy = e.clientY - dragStart.y;
            setPan({ x: startVal.x + dx, y: startVal.y + dy });
        }
    };

    const handleMouseUp = () => {
        if (draggingId) {
            setBoards(boards.map(b => b.id === board.id ? board : b));
            setDraggingId(null);
        }
        setIsPanning(false);
    };

    if (!board) return <div>Loading...</div>;

    return (
        <div
            className="min-h-screen bg-[#F9F5FF] dark:bg-gray-900 flex flex-col transition-colors duration-300"
            onClick={closeMenu}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="flex justify-between items-center px-6 pt-4 relative z-30">
                <div className="text-gray-500 dark:text-gray-400 text-lg font-serif w-1/3">
                    {mode === 'edit' ? 'Editing mode' : 'Play mode'}
                </div>

                {/* Editable Title */}
                <div className="w-1/3 flex justify-center">
                    {mode === 'edit' ? (
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            className="border border-black px-8 py-2 bg-white font-serif text-xl text-center w-full max-w-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        />
                    ) : (
                        <div className="border border-black px-8 py-2 bg-white font-serif text-xl text-center w-full max-w-md dark:bg-gray-800 dark:text-white dark:border-gray-600">
                            {title}
                        </div>
                    )}
                </div>

                <div className="w-1/3 flex justify-end">
                    <Header title="" showMenu={true} />
                </div>
            </div>

            <div
                className="flex-1 relative overflow-hidden cursor-crosshair active:cursor-grabbing bg-gray-50/30 dark:bg-gray-900/30"
                onWheel={handleWheel}
                onMouseDown={handleMouseDownBg}
            >
                {/* Zoomable World Container */}
                <div
                    style={{
                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                        transformOrigin: '0 0',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                >
                    {/* Edges */}
                    <svg className="absolute inset-0 pointer-events-none overflow-visible">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="black" className="dark:fill-white" />
                            </marker>
                        </defs>
                        {board.edges && board.edges.map(edge => {
                            const start = board.nodes.find(n => n.id === edge.from);
                            const end = board.nodes.find(n => n.id === edge.to);
                            if (!start || !end) return null;
                            return (
                                <line
                                    key={edge.id}
                                    x1={start.x + 128}
                                    y1={start.y + 96}
                                    x2={end.x + 128}
                                    y2={end.y + 96}
                                    stroke="black"
                                    strokeWidth="2"
                                    markerEnd="url(#arrowhead)"
                                    className="dark:stroke-white"
                                />
                            );
                        })}

                        {/* Card Links (Red Lines) with Text */}
                        {getUniqueDeckConnections().map((conn, idx) => {
                            const links = board.cardLinks.filter(l =>
                                (l.sourceDeckId === conn.source.id && l.targetDeckId === conn.target.id) ||
                                (l.sourceDeckId === conn.target.id && l.targetDeckId === conn.source.id)
                            );

                            const linkPairs = links.map(link => {
                                const sourceNodeCardId = (link.sourceDeckId === conn.source.id) ? link.sourceCardId : link.targetCardId;
                                const targetNodeCardId = (link.sourceDeckId === conn.target.id) ? link.sourceCardId : link.targetCardId;

                                const cardTop = conn.source.cards.find(c => c.id === sourceNodeCardId);
                                const cardBottom = conn.target.cards.find(c => c.id === targetNodeCardId);

                                return {
                                    top: cardTop?.front || '?',
                                    bottom: cardBottom?.front || '?'
                                };
                            });

                            const midX = (conn.source.x + 128 + conn.target.x + 128) / 2;
                            const midY = (conn.source.y + 96 + conn.target.y + 96) / 2;

                            return (
                                <g key={`link-group-${idx}`}>
                                    <line
                                        x1={conn.source.x + 128}
                                        y1={conn.source.y + 96}
                                        x2={conn.target.x + 128}
                                        y2={conn.target.y + 96}
                                        stroke="red"
                                        strokeWidth="3"
                                        strokeDasharray="5,5"
                                    />
                                    <foreignObject x={midX - 200} y={midY - 50} width="400" height="100" style={{ overflow: 'visible', pointerEvents: 'none' }}>
                                        <div className="flex flex-row justify-center items-center gap-8 h-full w-full">
                                            {linkPairs.map((pair, pIdx) => (
                                                <div key={pIdx} className="flex flex-col items-center">
                                                    <div className="bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded text-xs font-serif border border-red-200 dark:border-red-900 shadow-sm overflow-hidden text-center max-w-[200px] break-words dark:text-white">
                                                        {pair.top}
                                                    </div>
                                                    <div className="h-8 w-0.5 bg-red-400 opacity-50"></div>
                                                    <div className="bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded text-xs font-serif border border-red-200 dark:border-red-900 shadow-sm overflow-hidden text-center max-w-[200px] break-words dark:text-white">
                                                        {pair.bottom}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </foreignObject>
                                </g>
                            );
                        })}
                    </svg>

                    {/* Nodes */}
                    {board.nodes && board.nodes.map((node) => {
                        if (node.type === 'exposed') {
                            return (
                                <div
                                    key={node.id}
                                    style={{ position: 'absolute', left: node.x, top: node.y }}
                                    onMouseDown={(e) => handleMouseDownNode(e, node)}
                                    className="cursor-move"
                                >
                                    <ExposedCard node={node} />
                                    <div
                                        className="absolute top-2 right-2 cursor-pointer p-1 hover:bg-gray-100 rounded bg-white/50 dark:bg-gray-800/50 dark:hover:bg-gray-700"
                                        onClick={(e) => handleMenuClick(e, node)}
                                    >
                                        <svg width="24" height="6" viewBox="0 0 24 6" fill="none">
                                            <circle cx="3" cy="3" r="3" fill="black" className="dark:fill-white" />
                                            <circle cx="12" cy="3" r="3" fill="black" className="dark:fill-white" />
                                            <circle cx="21" cy="3" r="3" fill="black" className="dark:fill-white" />
                                        </svg>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={node.id}
                                onMouseDown={(e) => handleMouseDownNode(e, node)}
                                onClick={() => handleDeckClick(node)}
                                style={{
                                    position: 'absolute',
                                    left: node.x,
                                    top: node.y,
                                    cursor: mode === 'edit' ? 'move' : 'pointer'
                                }}
                                className="group"
                            >
                                <MiniDeck
                                    node={node}
                                    isEditable={mode === 'edit'}
                                    isSelected={editingDeckId === node.id && mode === 'edit'}
                                    isScaleExpanded={activeDeckId === node.id && mode === 'play'}
                                    onUpdateContent={(newContent) => handleUpdateNodeContent(node.id, newContent)}
                                    onUpdateCard={(cardId, field, value) => handleUpdateCard(node.id, cardId, field, value)}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Fixed UI Layers */}





                {/* Deck Sidebar */}
                {mode === 'edit' && editingDeckId && !isReadOnly && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <DeckSidebar
                            deck={board.nodes.find(n => n.id === editingDeckId)}
                            allDecks={board.nodes.filter(n => n.type === 'deck')}
                            onClose={() => setEditingDeckId(null)}
                            onUpdateCard={handleUpdateCard}
                            onAddCard={handleAddCardToDeck}
                            onDeleteCard={handleDeleteCard}
                            onAddLink={handleAddLink}
                            cardLinks={board.cardLinks || []}
                            onDeleteLink={(linkId) => {
                                const updatedLinks = (board.cardLinks || []).filter(l => l.id !== linkId);
                                const updatedBoard = { ...board, cardLinks: updatedLinks };
                                setBoard(updatedBoard);
                                setBoards(boards.map(b => b.id === board.id ? updatedBoard : b));
                            }}
                            onDeleteDeck={handleDeleteNode}
                        />
                    </div>
                )}
            </div>

            {/* Mode Toggle (Bottom Left) */}
            {!isReadOnly && (
                <div className="absolute bottom-8 left-8 z-40">
                    <div className="bg-white dark:bg-gray-800 border border-black dark:border-white rounded-full p-1 flex shadow-lg">
                        <button
                            onClick={() => setMode('edit')}
                            className={`px-4 py-1 rounded-full font-serif text-sm transition-colors ${mode === 'edit' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white'}`}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => setMode('play')}
                            className={`px-4 py-1 rounded-full font-serif text-sm transition-colors ${mode === 'play' ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white'}`}
                        >
                            Play
                        </button>
                    </div>
                </div>
            )}

            {/* Toolbar / FABs */}
            {mode === 'edit' && (
                <div
                    className={`fixed bottom-8 flex flex-col gap-4 transition-all duration-300 ease-in-out`}
                    style={{ right: editingDeckId ? '28rem' : '2rem' }} // Shift to the left of the 420px + padding sidebar
                >
                    {/* Add Deck Button */}
                    <button
                        onClick={handleAddNode}
                        className="w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform hover:scale-105"
                        title="Add Deck"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dark:stroke-black">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default BoardView;

