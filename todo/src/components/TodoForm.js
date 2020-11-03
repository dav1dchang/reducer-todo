import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const TodoForm = (props) => {
    const list = 
    {
      item: '',
      id: uuid(),
      completed: false,
    }
    const [input, setInput] = useState(list)

    const handleChanges = e => {
        const {name, value} = e.target
        setInput({...input, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleAddItem(input)
        setInput(list)
    }

    const handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        props.handleClearItems()
    }

      return (
        <form onSubmit={handleSubmit}>
             <input 
                value={input.item} 
                 onChange={handleChanges} 
                 type='text'
                 name='item'
            />
            <button>Add</button>
            <button onClick={handleClick} className='clear-button'>
                Clear
            </button>
          </form>
    )
}


export default TodoForm;