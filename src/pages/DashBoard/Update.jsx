import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Container from '../../components/Shared/Container';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { updateTask } from '../../hooks/auth';

const Update = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const task = useLoaderData();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data)
        await updateTask(task._id, data)
        toast.success('successfully edited!')
        navigate('/dashboard')
    }

    return (
        <div className='bg-slate-200 min-h-screen py-20'>
            <Container>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body w-1/2 mx-auto">
                    <div className="form-control">
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            defaultValue={task.title}
                            placeholder="title"
                            className="input input-bordered" required />
                        {errors.title && <span className='text-rose-500'>Please Provide Title</span>}
                    </div>
                    <div className="form-control">
                        <input
                            {...register("description", { required: true })}
                            type="text"
                            defaultValue={task.description}
                            placeholder="description"
                            className="input input-bordered" required />
                        {errors.description && <span className='text-rose-500'>Please Provide Description</span>}
                    </div>
                    <div className="form-control">
                        <input
                            {...register("deadline", { required: true })}
                            type="text"
                            defaultValue={task.deadline}
                            placeholder="deadline"
                            className="input input-bordered" required />
                        {errors.deadline && <span className='text-rose-500'>Please Provide deadlines</span>}
                    </div>
                    <div className="form-control">
                        <select
                            {...register("priority", { required: true })}
                            className="select select-bordered w-full max-w-xs">
                            defaultValue={task.priority}
                            <option >Low</option>
                            <option >Moderate</option>
                            <option >High</option>
                        </select>
                        {errors.priority && <span className='text-rose-500'>Please select proirity</span>}
                    </div>
                    <div className="form-control mt-6 flex justify-center items-center">
                        <button className="btn btn-primary bg-slate-500 border-none w-fit">Edit</button>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Update;