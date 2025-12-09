import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#F9F5FF] dark:bg-gray-900 transition-colors">
            <Header title="Home" />

            <main className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 mt-10">
                {/* My Boards Card */}
                <Link to="/my-boards" className="group">
                    <div className="w-64 h-48 bg-white dark:bg-gray-800 border border-black dark:border-white rounded-lg flex flex-col overflow-hidden transition-transform transform hover:scale-105">
                        <div className="bg-[#EEEEEE] dark:bg-gray-700 p-2 text-center border-b border-black dark:border-white font-serif text-lg dark:text-white">
                            My Boards
                        </div>
                        <div className="flex-1 flex items-center justify-center p-4">
                            {/* Simple SVG illustration for connected nodes */}
                            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:text-white">
                                <rect x="10" y="40" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                <line x1="15" y1="45" x2="35" y2="45" stroke="currentColor" strokeWidth="2" />
                                <line x1="15" y1="55" x2="35" y2="55" stroke="currentColor" strokeWidth="2" />

                                <rect x="80" y="20" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                <line x1="85" y1="25" x2="105" y2="25" stroke="currentColor" strokeWidth="2" />
                                <line x1="85" y1="35" x2="105" y2="35" stroke="currentColor" strokeWidth="2" />

                                <path d="M25 40 Q 60 10 95 20" stroke="#8B0000" className="dark:stroke-red-400" strokeWidth="1.5" fill="none" />
                            </svg>
                        </div>
                    </div>
                </Link>

                {/* Community Card */}
                <Link to="/community" className="group">
                    <div className="w-64 h-48 bg-white dark:bg-gray-800 border border-black dark:border-white rounded-lg flex flex-col overflow-hidden transition-transform transform hover:scale-105">
                        <div className="bg-[#EEEEEE] dark:bg-gray-700 p-2 text-center border-b border-black dark:border-white font-serif text-lg dark:text-white">
                            Community
                        </div>
                        <div className="flex-1 flex items-center justify-center p-4 gap-4">
                            {/* Simple SVG illustration for community */}
                            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:text-white">
                                <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="3" />
                                <path d="M10 60 C 10 50, 50 50, 50 60" stroke="currentColor" strokeWidth="3" fill="none" />

                                <circle cx="90" cy="30" r="10" stroke="currentColor" strokeWidth="3" />
                                <path d="M70 60 C 70 50, 110 50, 110 60" stroke="currentColor" strokeWidth="3" fill="none" />

                                <line x1="45" y1="25" x2="55" y2="20" stroke="currentColor" strokeWidth="2" />
                                <line x1="45" y1="35" x2="55" y2="40" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </Link>
            </main>
        </div>
    );
};

export default Home;
