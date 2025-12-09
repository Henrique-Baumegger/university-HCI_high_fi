import React from 'react';

const ExposedCard = ({ node, isHighlighted }) => {
    return (
        <div
            className="flex flex-col items-center"
        >
            <div
                className={`
          w-40 h-24 bg-white dark:bg-gray-800 flex items-center justify-center p-4 text-center rounded-[50%] border transition-colors
          ${isHighlighted ? 'border-red-600 border-2' : 'border-black dark:border-gray-600'}
        `}
            >
                <p className="font-serif text-sm leading-tight dark:text-white">{node.content}</p>
            </div>
        </div>
    );
};

export default ExposedCard;
