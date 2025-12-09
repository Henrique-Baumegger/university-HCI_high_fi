import React, { useState } from 'react';

const CommentDialog = ({ isOpen, onClose, comments, onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(newComment);
            setNewComment('');
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 border border-black dark:border-white p-6 w-96 max-w-full shadow-lg" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4 border-b border-black dark:border-white pb-2">
                    <h3 className="font-serif text-xl dark:text-white">Comments</h3>
                    <button onClick={onClose} className="hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded dark:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="max-h-60 overflow-y-auto mb-4 space-y-2">
                    {comments && comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-2 border border-gray-200 dark:border-gray-600 rounded text-sm dark:text-white">
                                {comment}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400 text-sm italic">No comments yet.</p>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="flex-1 border border-black dark:border-white px-3 py-2 text-sm focus:outline-none dark:bg-gray-700 dark:text-white"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-serif hover:bg-gray-800 dark:hover:bg-gray-200"
                    >
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentDialog;
