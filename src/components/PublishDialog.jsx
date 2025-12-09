import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const PublishDialog = ({ isOpen, onClose, onPublish }) => {
    const { categories } = useAppContext();
    const [tags, setTags] = useState('');
    const [category, setCategory] = useState(categories[0] || 'Systems Programming');
    const [newCategory, setNewCategory] = useState('');
    const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);

    if (!isOpen) return null;

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (value === 'new') {
            setIsAddingNewCategory(true);
            setCategory('');
        } else {
            setIsAddingNewCategory(false);
            setCategory(value);
        }
    };

    const handleSubmit = () => {
        const finalCategory = isAddingNewCategory ? newCategory : category;
        const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
        onPublish(tagsArray, finalCategory);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-black dark:border-white max-w-md w-full shadow-xl" onClick={e => e.stopPropagation()}>
                <h3 className="font-serif text-xl mb-4 border-b border-black dark:border-white pb-2 dark:text-white">Publish Board</h3>

                <div className="mb-4">
                    <label className="block font-serif text-sm font-bold mb-2 dark:text-white">Category</label>
                    {!isAddingNewCategory ? (
                        <select
                            value={category}
                            onChange={handleCategoryChange}
                            className="w-full border border-black dark:border-white rounded p-2 font-serif dark:bg-gray-700 dark:text-white"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                            <option value="new">+ Add New Category</option>
                        </select>
                    ) : (
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                placeholder="Enter new category name"
                                className="flex-1 border border-black dark:border-white rounded p-2 font-serif dark:bg-gray-700 dark:text-white"
                                autoFocus
                            />
                            <button
                                onClick={() => setIsAddingNewCategory(false)}
                                className="px-3 py-2 border border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>

                <div className="mb-6">
                    <label className="block font-serif text-sm font-bold mb-2 dark:text-white">Tags (comma separated)</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="e.g. exam-prep, difficult, 2024"
                        className="w-full border border-black dark:border-white rounded p-2 font-serif dark:bg-gray-700 dark:text-white"
                    />
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 font-serif dark:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 font-serif"
                        disabled={isAddingNewCategory && !newCategory.trim()}
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PublishDialog;
