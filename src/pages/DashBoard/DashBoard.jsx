import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import { useForm } from 'react-hook-form';
import Ongoing from './Ongoing';
import Completed from './Completed';
import { saveTasks } from '../../hooks/auth';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useTasks from '../../hooks/useTasks';
import Todo from './Todo';


const DashBoard = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tasks, refetch] = useTasks()
    console.log(tasks)
    // useEffect(() => {
    //   axiosPublic.get("/tasks")
    //     .then(res => {
    //         setAllTasks(res.data)
    //     })
    // },[])

    const onSubmit = async (data) => {
        await saveTasks(user, data);
        await refetch();
        toast.success('successfully added!');
    }

    return (
        <div className='bg-slate-200 min-h-screen py-20'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="card w-full bg-base-100 shadow-xl pb-0">
                        <div className="card-body">
                        <h1 className='text-xl font-semibold text-center'>Todo</h1>
                            {
                                tasks?.map(task =>  <Todo key={task._id} task={task} refetch={refetch}/>)
                            }
                            {/* <Todos tasks={tasks} refetch={refetch}/> */}
                            <div className='flex justify-center'>
                                <button className="btn btn-primary mt-8" onClick={() => document.getElementById('my_modal_1').showModal()}>Add New</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="card-body">
                                            <div className="form-control">
                                                <input
                                                    {...register("title", { required: true })}
                                                    type="text"
                                                    placeholder="title"
                                                    className="input input-bordered" required />
                                                {errors.title && <span className='text-rose-500'>Please Provide Title</span>}
                                            </div>
                                            <div className="form-control">
                                                <input
                                                    {...register("description", { required: true })}
                                                    type="text"
                                                    placeholder="description"
                                                    className="input input-bordered" required />
                                                {errors.description && <span className='text-rose-500'>Please Provide Description</span>}
                                            </div>
                                            <div className="form-control">
                                                <input
                                                    {...register("deadline", { required: true })}
                                                    type="text"
                                                    placeholder="deadline"
                                                    className="input input-bordered" required />
                                                {errors.deadline && <span className='text-rose-500'>Please Provide deadlines</span>}
                                            </div>
                                            <div className="form-control">
                                                <select
                                                    {...register("priority", { required: true })}
                                                    className="select select-bordered w-full max-w-xs">
                                                    <option disabled selected>Pick the Priority</option>
                                                    <option >Low</option>
                                                    <option >Moderate</option>
                                                    <option >High</option>
                                                </select>
                                                {errors.priority && <span className='text-rose-500'>Please select proirity</span>}
                                            </div>
                                            <div className="form-control mt-6 flex justify-center items-center">
                                                <button className="btn btn-primary w-fit">Add</button>
                                            </div>
                                        </form>

                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Ongoing />
                    </div>
                    <div>
                        <Completed />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DashBoard;