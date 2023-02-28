import React from 'react'

export default function ({ task }) {
    return (
        <div>
            <div>
                <h1>{task.name}</h1>
                <p>{task.description}</p>
            </div>
        </div>
    )
}
