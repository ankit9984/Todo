import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

function NewTask({onAddTask}) {
    const [title, setTitle] = useState('');

    const { mutate:createTask, isPending} = useMutation({
        mutationFn: async () => {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title })
            });

            const data = response.json();
            if(!response.ok) {
                throw new Error('Somethign went wrong')
            }
            return data
        },
        onSuccess: (data) => {
            // console.log('Task created:', data);
            setTitle('')
            onAddTask(data);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title)
    }
    return (
        <div className="flex  justify-center ">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-64">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="todo-input"
                    type="text"
                    name='title'
                    placeholder="Add a new todo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    id="add-todo"
                    type="button"
                    onClick={handleSubmit}
                >
                    {isPending ? 'Loading...' : 'Add Todo'}
                </button>
            </div>
        </div>

    )
}

export default NewTask
