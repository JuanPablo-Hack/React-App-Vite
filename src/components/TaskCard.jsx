import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export default function ({ task }) {
    const { deleteTask } = useContext(TaskContext)
    return (
        <div>
            <div className='bg-gray-800 text-white p-4 rounded-md'>
                <h1 className='text-xl font-bold capitalize'>{task.name}</h1>
                <p className='text-sm text-gray-500'>{task.description}</p>
                <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}>
                    Eliminar Tarea
                </button>
            </div>
        </div>
    )
}
