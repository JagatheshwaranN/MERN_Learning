import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            ref={inputRef}
        />
        <button 
         type='submit'
         aria-label='Add Item'
         onClick={()=> inputRef.current.focus()} >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem