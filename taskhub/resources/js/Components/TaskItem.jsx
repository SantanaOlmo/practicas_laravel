import { useState, useRef, useEffect } from 'react';

export default function TaskItem({ task, onToggle, onUpdateTitle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(task.title);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            finishEditing();
        }
    };

    const finishEditing = () => {
        setIsEditing(false);
        if (editValue.trim()) {
            onUpdateTitle(task.id, editValue);
        } else {
            setEditValue(task.title); // Revert if empty
        }
    };

    return (
        <div className={`group flex items-center p-3 mb-2 bg-white rounded-lg border transition-all duration-200 
            ${task.completed ? 'border-gray-200 bg-gray-50' : 'border-gray-300 hover:border-blue-400 hover:shadow-md'}`}>

            <div className="flex items-center h-5">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
            </div>

            <div className="ml-3 flex-1 min-w-0">
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={finishEditing}
                        onKeyDown={handleKeyDown}
                        className="block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-blue-500 focus:ring-0 focus:border-blue-500 px-0 py-1"
                    />
                ) : (
                    <span
                        onClick={() => !task.completed && setIsEditing(true)}
                        className={`block text-sm font-medium truncate cursor-pointer select-none transition-colors duration-200
                            ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800 hover:text-blue-600'}`}
                        title="Click to edit"
                    >
                        {task.title}
                    </span>
                )}
            </div>
        </div>
    );
}
