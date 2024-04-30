import React from 'react';

function List({ tasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2 px-4">
          <span className="text-lg">{task.title}</span>
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
