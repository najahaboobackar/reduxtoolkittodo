import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input ,setInput]=useState(' ')
    const dispatch=useDispatch()
    const addTodoHandler= (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput(' ')
    }
  return (
    <form onSubmit={addTodoHandler}  className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        
        value={input}
        onChange={(e) => setInput(e.target.value)}
    />
    <button type="submit" >
        Add
    </button>
</form>
  )
}

export default AddTodo
