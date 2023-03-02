import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext'
export default function TaskForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);
    const handleSumbit = (e) => {
        e.preventDefault();
        createTask({
            name,
            description
        })
        setName("");
        setDescription("");
    }
    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSumbit} className="bg-slate-900 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input
                    type="text"
                    placeholder='Escribe tu tarea'
                    onChange={e => setName(e.target.value)}
                    value={name}
                    className="bg-slate-300 p-3 w-full mb-2 "
                    autoFocus />
                <textarea
                    placeholder='Escribe una descripción'
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2"
                ></textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
            </form>
        </div>
    )
}
