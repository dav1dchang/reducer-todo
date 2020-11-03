import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.item.id)
    }

    return (
        <div onClick={handleClick} className={`todo item ${props.item.completed ? 'completed' : ''}`}>
            <p>{props.item.item}</p>
        </div>
    )
}

export default Todo;