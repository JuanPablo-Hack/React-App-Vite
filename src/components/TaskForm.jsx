import { useState } from 'react';
export default function TaskForm({ createTask }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
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
        <div>
            <form onSubmit={handleSumbit}>
                <input type="text" placeholder='Escribe tu tarea' onChange={e => setName(e.target.value)} value={name} autoFocus />
                <textarea placeholder='Escribe una descripción' onChange={e => setDescription(e.target.value)} value={description}></textarea>
                <button>Guardar</button>
            </form>
        </div>
    )
}
