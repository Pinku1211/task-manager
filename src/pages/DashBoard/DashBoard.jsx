import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import { useForm } from 'react-hook-form';
import { saveTasks } from '../../hooks/auth';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useTasks from '../../hooks/useTasks';
import Section from './Todo';



const DashBoard = () => {
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tasks, refetch] = useTasks()
    const [todos, setTodos] = useState([])
    const [ongoing, setOngoing] = useState([])
    const [completed, setCompleted] = useState([])
    const statuses = ['todo', 'ongoing', 'completed']


    useEffect(() => {
      const fTodos = tasks.filter(task => task.status === "todo")
      const fOngoing = tasks.filter(task => task.status === "ongoing")
      const fCompleted = tasks.filter(task => task.status === "completed")
      setTodos(fTodos)
      setOngoing(fOngoing)
      setCompleted(fCompleted)
    },[tasks])

    const onSubmit = async (data) => {
        await saveTasks(user, data);
        await refetch();
        toast.success('successfully added!');
    }

    return (
        <div className='bg-slate-200 min-h-screen py-20'>
            <div className='flex justify-center mb-10'>
                <button className="btn btn-primary bg-slate-500 border-none px-10" onClick={() => document.getElementById('my_modal_1').showModal()}>Add New Task</button>
                <div className='flex justify-center'>
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
                                    <button className="btn btn-primary bg-slate-500 border-none w-fit">Add</button>
                                </div>
                            </form>

                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        statuses?.map((status, idx) => <Section 
                        key={idx} 
                        tasks={tasks} 
                        refetch={refetch} 
                        status={status}
                        todos={todos}
                        ongoing={ongoing}
                        completed={completed}
                        />)
                    }       
                </div>
            </Container>
        </div>
    );
};

export default DashBoard;