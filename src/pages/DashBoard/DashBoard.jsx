import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import { useForm } from 'react-hook-form';
import { saveTasks } from '../../hooks/auth';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useTasks from '../../hooks/useTasks';
import Section from './Todo';
import { MdDashboardCustomize } from "react-icons/md";
import { CiLogout } from "react-icons/ci";



const DashBoard = () => {
    const { user, logOut } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tasks, refetch] = useTasks(user?.email)
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
    }, [tasks])

    const onSubmit = async (data) => {
        await saveTasks(user, data);
        await refetch();
        toast.success('successfully added!');
    }


    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("successfully logged out!")
            })
            .then(error => console.log(error))
    }

    return (
        <div className='bg-slate-200 min-h-screen pb-20'>
            <div className='flex justify-center mb-10'>

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
                                        type="date"
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
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="drawer-button"><MdDashboardCustomize className='text-3xl text-gray-900' /></label>
                        <h1 className='text-5xl font-thin text-center mb-10'>Your Dashboard</h1>
                    </div>
                    <div className="drawer-side opacity-100 z-1000">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 pt-10 w-80 min-h-full flex flex-col justify-between bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><button className="btn bg-slate-400 text-white border-none px-10 text-center pt-4" onClick={() => document.getElementById('my_modal_1').showModal()}>Add New Task</button></li>
                            <div>
                                <li><button onClick={handleLogout} className="btn bg-slate-400 text-white border-none px-10 text-center pt-4"><CiLogout className='text-xl'/>Log Out</button></li>
                                <div className='flex items-center gap-4 mt-4'>
                                    <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                                    <h1>{user?.displayName}</h1>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
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