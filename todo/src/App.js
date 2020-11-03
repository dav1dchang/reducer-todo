import React, { useState, useReducer } from 'react';
import reducer from './reducers';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import actions from './actions';
import {v4 as uuid} from 'uuid';
import './App.css';

const App = () => {
  const list = [
    {
      item: 'Take out the trash',
      id: 0,
      completed: false,
    }
  ]

  const [state, dispatch] = useReducer(reducer, list)

  const handleAddItem = (input) => {
    dispatch(actions.addItem(input))
  }

  const handleToggleItem = (toggle) => {
    dispatch(actions.toggleItem(toggle))
  }

  const handleClearItems = () => {
    dispatch(actions.clearItem())
  }
  
  return (
    <div className='App'>
      <h2>Welcome to your Todo App!</h2>
      <TodoForm handleAddItem={handleAddItem} handleClearItems={handleClearItems}/>
      <br></br>
      <TodoList handleToggleItem={handleToggleItem} list={state}/>
    </div>
  );
}


export default App;
