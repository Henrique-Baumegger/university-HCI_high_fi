
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CommentDialog from '../components/CommentDialog';
import BoardThumbnail from '../components/BoardThumbnail';
import { useAppContext } from '../context/AppContext';

const Community = () => {
    const { communityBoards, upvoteBoard, addComment, deleteComment, addBoard, userUpvotes, categories } = useAppContext();
    const navigate = useNavigate();

    const [selectedCourse, setSelectedCourse] = useState('Systems Programming');
    const [expandedMenuId, setExpandedMenuId] = useState(null);
    const [commentDialogState, setCommentDialogState] = useState({ isOpen: false, boardId: null });

    const toggleMenu = (id) => {
        setExpandedMenuId(expandedMenuId === id ? null : id);
    };

    const handleUpvote = (id) => {
        upvoteBoard(id);
    };

    const openComments = (id) => {
        setCommentDialogState({ isOpen: true, boardId: id });
        setExpandedMenuId(null); // Close menu
    };

    const handleAddComment = (comment) => {
        if (commentDialogState.boardId) {
            addComment(commentDialogState.boardId, comment);
        }
    };

    const handleAddToMyBoards = (board) => {
        // Create a copy of the board for the user
        const newBoard = {
            id: `imported-${board.id}-${Date.now()}`,
            title: board.title,
            nodes: board.nodes || [],
            edges: board.edges || []
        };
        addBoard(newBoard);
        alert(`Added "${board.title}" to My Boards!`);
    };

    const handlePlay = (board) => {
        // Navigate to board view in play mode
        navigate(`/board/c-${board.id}`);
    };

    const currentBoardComments = commentDialogState.boardId
        ? communityBoards.find(b => b.id === commentDialogState.boardId)?.commentsArray
        : [];

    return (
        <div className="min-h-screen bg-[#F9F5FF] dark:bg-gray-900 transition-colors">
            <Header title="Community" />

            <div className="flex justify-center mb-8">
                <div className="relative inline-block text-left w-64">
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="block w-full bg-white dark:bg-gray-800 border border-black dark:border-white px-4 py-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-gray-500 font-serif text-lg appearance-none dark:text-white transition-colors"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {communityBoards.filter(b => b.course === selectedCourse).map((board) => (
                    // Removed overflow-hidden to allow menu to extend
                    <div key={board.id} className="bg-white dark:bg-gray-800 border border-black dark:border-white flex flex-col relative h-[250px] transition-all rounded-lg hover:shadow-lg group">
                        {/* Header: Title and Menu */}
                        <div className="p-3 flex justify-between items-start border-b border-black dark:border-white h-14 bg-gray-50/50 dark:bg-gray-700/30 rounded-t-lg">
                            <h3 className="font-serif text-lg font-bold truncate pr-2 dark:text-white">{board.title}</h3>
                            <button onClick={() => toggleMenu(board.id)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded shrink-0">
                                <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
                                    <circle cx="3" cy="3" r="3" fill="currentColor" />
                                    <circle cx="12" cy="3" r="3" fill="currentColor" />
                                    <circle cx="21" cy="3" r="3" fill="currentColor" />
                                </svg>
                            </button>
                        </div>

                        {/* Expanded Context Menu (Overlay) */}
                        {expandedMenuId === board.id && (
                            <div className="absolute top-12 right-0 w-64 bg-white dark:bg-gray-800 border border-black dark:border-white shadow-lg z-50 p-4 flex flex-col gap-2 rounded-lg">
                                <div className="text-sm text-gray-500 dark:text-gray-400">Published in {board.year} by {board.author}</div>
                                <div className="text-sm border-t border-gray-200 dark:border-gray-600 pt-2 dark:text-gray-300 max-h-40 overflow-y-auto w-full break-words">{board.description}</div>
                                <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                                    <button
                                        onClick={() => openComments(board.id)}
                                        className="flex items-center gap-1 hover:bg-gray-50 dark:hover:bg-gray-700 p-1 rounded dark:text-white"
                                    >
                                        <span className="text-xs">Comment</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleUpvote(board.id)}
                                        className={`flex items-center gap-1 p-1 rounded dark:text-white ${userUpvotes.includes(board.id) ? 'bg-gray-200 dark:bg-gray-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                                    >
                                        <span className="text-xs">Upvote</span>
                                        <div className="flex flex-col items-center">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill={userUpvotes.includes(board.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                                                <path d="M12 19V5M5 12l7-7 7 7" />
                                            </svg>
                                            <span className="text-[10px] leading-none">{board.upvotes}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Content: Image Left, Actions Right */}
                        <div className="flex flex-1 overflow-hidden rounded-b-lg">
                            {/* Left: Image/Preview */}
                            <div className="w-2/3 border-r border-black dark:border-white p-2 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50">
                                <BoardThumbnail nodes={board.nodes} edges={board.edges} />
                            </div>

                            {/* Right: Actions Column */}
                            <div className="w-1/3 flex flex-col">
                                <button
                                    onClick={() => handleAddToMyBoards(board)}
                                    className="flex-1 flex flex-col items-center justify-center border-b border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-700 p-2 text-center dark:text-white"
                                    title="Add to my boards"
                                >
                                    <div className="rounded-full border border-black dark:border-white w-6 h-6 flex items-center justify-center mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </div>
                                    <span className="font-serif text-[10px] leading-tight">Add</span>
                                </button>

                                <button
                                    onClick={() => handlePlay(board)}
                                    className="flex-1 flex flex-col items-center justify-center border-b border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-700 p-2 text-center dark:text-white"
                                    title="Play"
                                >
                                    <div className="border border-black dark:border-white w-6 h-6 flex items-center justify-center mb-1">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                            <path d="M0 0 L10 5 L0 10 Z" />
                                        </svg>
                                    </div>
                                    <span className="font-serif text-[10px] leading-tight">Play</span>
                                </button>

                                <div className="flex-1 flex flex-col items-center justify-center p-2 text-center bg-gray-50 dark:bg-gray-700 overflow-hidden">
                                    <div className="flex flex-wrap justify-center gap-1">
                                        {(board.tags && board.tags.length > 0 ? board.tags : ['study', 'exam']).slice(0, 3).map((tag, idx) => (
                                            <span key={idx} className="text-[9px] bg-gray-200 dark:bg-gray-600 px-1 rounded font-serif text-gray-600 dark:text-gray-200">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            <CommentDialog
                isOpen={commentDialogState.isOpen}
                onClose={() => setCommentDialogState({ ...commentDialogState, isOpen: false })}
                comments={currentBoardComments}
                onAddComment={handleAddComment}
                onDeleteComment={(index) => deleteComment(commentDialogState.boardId, index)}
            />
        </div>
    );
};

export default Community;
