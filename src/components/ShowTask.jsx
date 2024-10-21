import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ShowTask = (props) => {

    const handleEdit = (id) => {
        const selectedTask = props.tasklist.find(todo => todo.id === id);
        props.setTask(selectedTask)
    }

    const handleDelete = (id) => {
        const updatedTaskList = props.tasklist.filter(todo => todo.id !== id);
        props.setTasklist(updatedTaskList)
    }


  return (
    <div className='max-w-[1200px] m-auto bg-slate-100 rounded-md mt-10 p-7'>
        <div className=' flex justify-between items-center px-5'>
            <div>
                <span className='font-bold text-xl'>Todo </span>
                <span className='text-xl'>{props.tasklist.length}</span>
            </div>
            <button onClick={() => props.setTasklist([])} className='px-5 border-[2px] h-[40px] border-gray-400 rounded-md text-gray-600 font-bold w-[110px]'>Clear All</button>
        </div>
        <hr className='my-4 border-gray-300 border-t-2'/>

        <div className='mt-5 flex flex-wrap gap-4 px-4 justify-center' > 
            { props.tasklist.map( (todo) => (
            <div className='flex flex-col border-[2px] border-gray-300 w-[350px] px-5 rounded-md h-[80px] justify-center '>
                <div key={todo.id} className='flex justify-between  items-center '>
                    <span>{todo.name}</span>
                    <div className='flex justify-center items-center gap-1'>
                        <FaEdit size={22} onClick={()=> handleEdit(todo.id)} className='text-blue-700'/>
                        <MdDelete size={22} onClick={() => handleDelete(todo.id)} className='text-red-700'/>
                    </div>
                </div>
                <div>
                    {todo.time}
                </div>
            </div>
            ))}
        </div>
        
    </div>
    
  )
}

export default ShowTask