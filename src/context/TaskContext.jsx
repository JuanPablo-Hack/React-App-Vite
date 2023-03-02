import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTask] = useState([])

    const createTask = (task) => {
        setTask([...tasks, {
            name: task.name,
            id: tasks.length,
            description: task.description
        }]);
    }
    const deleteTask = (taskID) => {
        setTask(tasks.filter(task => task.id !== taskID));
    };
    useEffect(() => {
        setTask(data)
    }, [])
    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}


