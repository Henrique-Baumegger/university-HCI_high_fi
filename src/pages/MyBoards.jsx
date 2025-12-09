import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAppContext } from '../context/AppContext';
import { mockBoards } from '../data/mockData';

import PublishDialog from '../components/PublishDialog';

const MyBoards = () => {
    const { boards, addBoard, setBoards, publishBoard, communityBoards } = useAppContext();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(null); // { id, x, y }
    const [publishDialogState, setPublishDialogState] = useState({ isOpen: false, boardId: null });

    const handleCreateBoard = () => {
        const newBoard = {
            id: `b-${Date.now()}`,
            title: 'Untitled Board',
            nodes: [],
            edges: []
        };
        addBoard(newBoard);
        navigate(`/board/${newBoard.id}`);
    };

    const handleMenuClick = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        setMenuOpen({ id, x: e.clientX, y: e.clientY });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this board?')) {
            setBoards(boards.filter(b => b.id !== id));
        }
        setMenuOpen(null);
    };

    const handlePublishClick = (id) => {
        const boardToPublish = boards.find(b => b.id === id);
        if (boardToPublish) {
            // Check if already published
            if (communityBoards.some(cb => cb.id === id)) {
                alert('This board is already published!');
            } else {
                setPublishDialogState({ isOpen: true, boardId: id });
            }
        }
        setMenuOpen(null);
    };

    const confirmPublish = (tags, category) => {
        const board = boards.find(b => b.id === publishDialogState.boardId);
        if (board) {
            publishBoard(board, tags, category);
            alert('Board published to Community!');
        }
        setPublishDialogState({ isOpen: false, boardId: null });
    };

    const isPublished = (id) => communityBoards.some(cb => cb.id === id);

    return (
        <div className="min-h-screen bg-[#F9F5FF] dark:bg-gray-900 p-8 transition-colors" onClick={() => setMenuOpen(null)}>
            <Header title="My Boards" />

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {/* Create New Board Card */}
                <div
                    onClick={handleCreateBoard}
                    className="border-2 border-dashed border-black dark:border-white rounded-lg flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 min-h-[200px] transition-colors group"
                >
                    <div className="w-12 h-12 rounded-full border border-black dark:border-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dark:text-white">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <span className="font-serif text-xl dark:text-white">Create</span>
                </div>

                {/* Board Cards */}
                {boards.map((board) => (
                    <div key={board.id} className="bg-white dark:bg-gray-800 border border-black dark:border-white rounded-lg p-6 relative group min-h-[200px] flex flex-col justify-between hover:shadow-lg transition-all">
                        <div
                            className="absolute top-4 right-4 cursor-pointer p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded z-10"
                            onClick={(e) => handleMenuClick(e, board.id)}
                        >
                            <svg width="24" height="6" viewBox="0 0 24 6" fill="none" className="text-black dark:text-white">
                                <circle cx="3" cy="3" r="3" fill="currentColor" />
                                <circle cx="12" cy="3" r="3" fill="currentColor" />
                                <circle cx="21" cy="3" r="3" fill="currentColor" />
                            </svg>
                        </div>

                        <div onClick={() => navigate(`/board/${board.id}`)} className="cursor-pointer flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-serif text-2xl font-bold truncate dark:text-white">{board.title}</h3>
                                {isPublished(board.id) && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" title="Published" className="dark:text-white">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                )}
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-serif">
                                {board.nodes ? board.nodes.filter(n => n.type === 'deck').length : 0} decks
                            </p>
                        </div>

                        {/* Context Menu */}
                        {menuOpen && menuOpen.id === board.id && (
                            <div
                                className="fixed bg-white dark:bg-gray-800 border border-black dark:border-white shadow-lg z-50 w-32 flex flex-col"
                                style={{ top: menuOpen.y, left: menuOpen.x }}
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); handlePublishClick(board.id); }}
                                    className="px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 font-serif border-b border-gray-100 dark:border-gray-700 dark:text-white"
                                >
                                    Publish
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleDelete(board.id); }}
                                    className="px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400 font-serif"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </main>

            <PublishDialog
                isOpen={publishDialogState.isOpen}
                onClose={() => setPublishDialogState({ ...publishDialogState, isOpen: false })}
                onPublish={confirmPublish}
            />
        </div>
    );
};

export default MyBoards;
