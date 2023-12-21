import React from 'react';
import { deleteTask, updateTask } from '../../hooks/auth';
// import { useForm } from 'react-hook-form';
import { ImCross } from 'react-icons/im';
import toast from 'react-hot-toast';
import { MdEdit } from "react-icons/md";

const Todo = ({ task, refetch }) => {
    const { title, description, deadline, priority, _id } = task;
    // const { register, handleSubmit, formState: { errors } } = useForm();


    const handleDelete = async (id) => {
        console.log(id)
        await deleteTask(id)
        await refetch()
        toast.success("successfully deleted!")
    }
    // // const handleUpdate = async (e, title) => {
    // //     e.preventDefault();
    // //     // await updateTask(_id, data)
    // //     // await refetch()
    // //     // toast.success("successfully updated!")
    // //     console.log(title)
    // }

    return (
        <div key={task?._id} className="bg-base-100 shadow-xl rounded-md p-2 my-3">
            <div className="flex items-center text-left">
                <p>{title}</p>
                <p>{description}</p>
                <p>{deadline}</p>
                <p>{priority}</p>
                <ImCross onClick={() => handleDelete(_id)} className='text-sm' />        
            </div>
        </div>
    );
};

export default Todo;