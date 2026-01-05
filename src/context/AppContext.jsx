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
        const savedCommunityBoards = localStorage.getItem('communityBoards_v5');
        return savedCommunityBoards ? JSON.parse(savedCommunityBoards) : initialCommunityBoards;
    });

    // Save to localStorage whenever state changes
    React.useEffect(() => {
        localStorage.setItem('boards', JSON.stringify(boards));
    }, [boards]);

    React.useEffect(() => {
        localStorage.setItem('communityBoards_v5', JSON.stringify(communityBoards));
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

    const deleteComment = (boardId, commentIndex) => {
        setCommunityBoards(prevBoards => prevBoards.map(b => {
            if (b.id === boardId) {
                const currentComments = [...(b.commentsArray || [])];
                currentComments.splice(commentIndex, 1);
                return { ...b, commentsArray: currentComments, comments: Math.max(0, (b.comments || 0) - 1) };
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
    const [fontSize, setFontSize] = useState(() => {
        const saved = localStorage.getItem('fontSize');
        return (saved && ['small', 'medium', 'large'].includes(saved)) ? saved : 'small';
    });

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    React.useEffect(() => {
        localStorage.setItem('fontSize', fontSize);
        // Apply font size to root
        // User requested: Small=16px, Medium=20px, Large=24px
        const sizeMap = { small: '16px', medium: '20px', large: '24px' };
        document.documentElement.style.fontSize = sizeMap[fontSize] || '16px';
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

    const publishBoard = (board, tags = [], category = 'Systems Programming', description = '') => {
        // Ensure category exists
        if (category && !categories.includes(category)) {
            addCategory(category);
        }

        const newCommunityBoard = {
            id: board.id,
            title: board.title,
            author: 'You', // In a real app, this would be the user's name
            year: new Date().getFullYear(),
            description: description || 'Published from My Boards',
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

    const unpublishBoard = (boardId) => {
        setCommunityBoards(prev => prev.filter(b => b.id !== boardId));
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

    const exportData = () => {
        const dataToExport = {
            boards,
            communityBoards,
            userUpvotes,
            categories,
            theme,
            fontSize,
            exportDate: new Date().toISOString()
        };
        const jsonString = JSON.stringify(dataToExport, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `my-boards-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    const importData = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.boards) setBoards(data.boards);
                if (data.communityBoards) setCommunityBoards(data.communityBoards);
                if (data.userUpvotes) setUserUpvotes(data.userUpvotes);
                if (data.categories) setCategories(data.categories);
                if (data.theme) setTheme(data.theme);
                if (data.fontSize) setFontSize(data.fontSize);
                alert('Data imported successfully!');
            } catch (error) {
                alert('Error importing data. Please check the file format.');
                console.error(error);
            }
        };
        reader.readAsText(file);
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
            deleteComment,
            upvoteBoard,
            publishBoard,
            unpublishBoard,
            userUpvotes,
            theme,
            toggleTheme,
            fontSize,
            setFontSize,
            categories,
            addCategory,
            exportData,
            importData
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
