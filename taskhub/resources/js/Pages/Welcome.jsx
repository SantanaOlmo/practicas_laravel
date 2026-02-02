import { useState } from 'react';
import { Head } from '@inertiajs/react';
import TaskStats from '@/Components/TaskStats';
import TaskItem from '@/Components/TaskItem';

export default function Welcome() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const completedCount = tasks.filter(t => t.completed).length;

    const handleAddTask = () => {
        if (!inputValue.trim()) return;

        const newTask = {
            id: Date.now(),
            title: inputValue.trim(),
            completed: false
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const updateTaskTitle = (id, newTitle) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
        ));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    return (
        <>
            <Head title="Lista de Tareas" />
            <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans select-none">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                            Lista de tareas pendientes
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Organiza tu trabajo de manera eficiente
                        </p>
                    </div>

                    {/* Stats */}
                    <TaskStats total={tasks.length} completed={completedCount} />

                    {/* Add Task Input */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                        <div className="flex gap-4">
                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Añadir nueva tarea"
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pl-4 py-3 text-gray-900 placeholder-gray-400 text-lg transition-colors select-text"
                                />
                            </div>
                            <button
                                onClick={handleAddTask}
                                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-transform transform hover:scale-105 active:scale-95 duration-200"
                            >
                                Añadir
                            </button>
                        </div>
                    </div>

                    {/* Task List */}
                    <div className="space-y-4">
                        {tasks.length > 0 ? (
                            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
                                <div className="p-4 sm:p-6 bg-gray-50 border-b border-gray-200">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Tus Tareas
                                    </h3>
                                </div>
                                <div className="p-4 sm:p-6 space-y-1">
                                    {tasks.map(task => (
                                        <TaskItem
                                            key={task.id}
                                            task={task}
                                            onToggle={toggleTask}
                                            onUpdateTitle={updateTaskTitle}
                                        />
                                    ))}
                                </div>

                                <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200 flex justify-end">
                                    <button
                                        onClick={clearCompleted}
                                        disabled={completedCount === 0}
                                        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm 
                                            ${completedCount === 0
                                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                : 'text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200'}`}
                                    >
                                        <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Limpiar lista
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No hay tareas</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Empieza añadiendo una nueva tarea arriba.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
