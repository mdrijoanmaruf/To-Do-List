import React from 'react'

const AddTask = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.task.id) {
            const date = new Date();
            const updatedTaskList = props.tasklist.map((todo) => (
                todo.id === props.task.id ? 
                { id: props.task.id, name: props.task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } 
                : todo
            ));
            props.setTasklist(updatedTaskList);
            props.setTask({});  
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            };
            props.setTasklist([...props.tasklist, newTask]);
            props.setTask({});
        }
    };

    return (
        <div className='max-w-[1200px] mx-auto flex justify-center items-center mt-[40px]'>
            <form className='p-2 border-gray-600 border-[2px] flex gap-5 rounded-md' onSubmit={handleSubmit}>
                <input 
                    value={props.task.name || ''}  // Ensure value is not undefined
                    type="text" 
                    name='task' 
                    autoComplete='off' 
                    placeholder='Add Task' 
                    maxLength={25} 
                    className='p-2 focus:outline-none focus:border-none'
                    onChange={e => props.setTask({ ...props.task, name: e.target.value })}
                />
                <button type='submit' className='border-[2px] px-5 rounded-md bg-green-600 text-white'>{props.task.id ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default AddTask;
