import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import MyBoards from './pages/MyBoards';
import BoardView from './pages/BoardView';
import Community from './pages/Community';

function App() {
    return (
        <AppProvider>
            <div className="min-h-screen text-black">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/my-boards" element={<MyBoards />} />
                    <Route path="/board/:id" element={<BoardView />} />
                    <Route path="/community" element={<Community />} />
                </Routes>
            </div>
        </AppProvider>
    );
}

export default App;
