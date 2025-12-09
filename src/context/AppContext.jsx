import React, { createContext, useState, useContext } from 'react';
import { mockBoards, communityBoards as initialCommunityBoards } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Initialize state from localStorage or use mockData
    const [boards, setBoards] = useState(() => {
        const savedBoards = localStorage.getItem('boards');
        return savedBoards ? JSON.parse(savedBoards) : mockBoards;
    });

    const [communityBoards, setCommunityBoards] = useState(() => {
        const savedCommunityBoards = localStorage.getItem('communityBoards');
        return savedCommunityBoards ? JSON.parse(savedCommunityBoards) : initialCommunityBoards;
    });

    // Save to localStorage whenever state changes
    React.useEffect(() => {
        localStorage.setItem('boards', JSON.stringify(boards));
    }, [boards]);

    React.useEffect(() => {
        localStorage.setItem('communityBoards', JSON.stringify(communityBoards));
    }, [communityBoards]);

    const addBoard = (newBoard) => {
        setBoards(prevBoards => [...prevBoards, newBoard]);
    };

    const updateBoardTitle = (id, newTitle) => {
        setBoards(prevBoards => prevBoards.map(b => b.id === id ? { ...b, title: newTitle } : b));
    };

    const updateCommunityBoard = (id, updates) => {
        setCommunityBoards(prevBoards => prevBoards.map(b => b.id === id ? { ...b, ...updates } : b));
    };

    const addComment = (boardId, comment) => {
        setCommunityBoards(prevBoards => prevBoards.map(b => {
            if (b.id === boardId) {
                const currentComments = b.commentsArray || [];
                return { ...b, commentsArray: [...currentComments, comment], comments: (b.comments || 0) + 1 };
            }
            return b;
        }));
    };

    const [userUpvotes, setUserUpvotes] = useState(() => {
        const savedUpvotes = localStorage.getItem('userUpvotes');
        return savedUpvotes ? JSON.parse(savedUpvotes) : [];
    });

    React.useEffect(() => {
        localStorage.setItem('userUpvotes', JSON.stringify(userUpvotes));
    }, [userUpvotes]);

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [fontSize, setFontSize] = useState(() => localStorage.getItem('fontSize') || 'medium');

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    React.useEffect(() => {
        localStorage.setItem('fontSize', fontSize);
        // Apply font size to root
        const sizeMap = { small: '14px', medium: '16px', large: '20px' };
        document.documentElement.style.fontSize = sizeMap[fontSize];
    }, [fontSize]);

    // Categories State
    const [categories, setCategories] = useState(() => {
        const savedCategories = localStorage.getItem('categories');
        return savedCategories ? JSON.parse(savedCategories) : ['Systems Programming', 'Computer Networks', 'Parallel Programming'];
    });

    React.useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);

    const addCategory = (newCategory) => {
        if (!categories.includes(newCategory)) {
            setCategories(prev => [...prev, newCategory]);
        }
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const publishBoard = (board, tags = [], category = 'Systems Programming') => {
        // Ensure category exists
        if (category && !categories.includes(category)) {
            addCategory(category);
        }

        const newCommunityBoard = {
            id: board.id,
            title: board.title,
            author: 'You', // In a real app, this would be the user's name
            year: new Date().getFullYear(),
            description: 'Published from My Boards',
            course: category,
            tags: tags,
            upvotes: 0,
            comments: 0,
            commentsArray: [],
            nodes: board.nodes,
            edges: board.edges,
            cardLinks: board.cardLinks || []
        };
        setCommunityBoards(prev => [...prev, newCommunityBoard]);
    };

    const upvoteBoard = (boardId) => {
        if (userUpvotes.includes(boardId)) {
            // Remove upvote (toggle off)
            setCommunityBoards(prevBoards => prevBoards.map(b =>
                b.id === boardId ? { ...b, upvotes: Math.max(0, (b.upvotes || 0) - 1) } : b
            ));
            setUserUpvotes(prev => prev.filter(id => id !== boardId));
        } else {
            // Add upvote (toggle on)
            setCommunityBoards(prevBoards => prevBoards.map(b =>
                b.id === boardId ? { ...b, upvotes: (b.upvotes || 0) + 1 } : b
            ));
            setUserUpvotes(prev => [...prev, boardId]);
        }
    };

    return (
        <AppContext.Provider value={{
            boards,
            setBoards,
            addBoard,
            updateBoardTitle,
            communityBoards,
            updateCommunityBoard,
            addComment,
            upvoteBoard,
            publishBoard,
            userUpvotes,
            theme,
            toggleTheme,
            fontSize,
            setFontSize,
            categories,
            addCategory
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
