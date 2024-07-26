import React from 'react'
import { useState } from 'react'
import { addNewTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'

const TodoForm = () => {
const [text,setText] = useState("")

const dispatch = useDispatch()

const onFromSubmit =(e)=>{
e.preventDefault()

dispatch(addNewTodo(text))
setText("")
}

    const onInputChange =(e)=>{
setText(e.target.value)
    }

  return (
    
    <form onSubmit={onFromSubmit} className='flex'>
        <input
            placeholder='Enter new Todo'
            className='text-center w-full border-[3px] rounded-md text-[20px] my-5 p-3 outline-none border-[#eded72]'
            onChange={(e)=>onInputChange(e)}
            value={text}
            required
        />
        <button className='mx-5 border p-3 my-5 bg-red-600 rounded-md border-[black]' type="submit">
            Add
        </button>
    </form>
  )
}

export default TodoForm
