import React, { useState } from 'react';
import Container from '../../components/Shared/Container';
import { useForm } from 'react-hook-form';
import Todo from './Todo';
import Ongoing from './Ongoing';
import Completed from './Completed';

const DashBoard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tasks, setTasks] = useState([]);


    const onSubmit = async (data) => {
        console.log(data)
        setTasks(...tasks, data)
    }

    return (
        <div className='bg-slate-200 min-h-screen py-20'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="card w-full bg-base-100 shadow-xl text-center p-8 pb-0">
                        <h2 className="card-title">Todo</h2>
                        <div className="card-body">
                            <div>
                                <Todo tasks={tasks} />
                                <Todo tasks={tasks} />
                            </div>
                            <div>
                                <button className="btn btn-primary mt-8" onClick={() => document.getElementById('my_modal_2').showModal()}>Add New</button>
                                <dialog id="my_modal_2" className="modal">
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
                                                    {...register("deadlines", { required: true })}
                                                    type="text"
                                                    placeholder="deadlines"
                                                    className="input input-bordered" required />
                                                {errors.deadlines && <span className='text-rose-500'>Please Provide deadlines</span>}
                                            </div>
                                            <div className="form-control">
                                                <select
                                                    {...register("priority", { required: true })}
                                                    className="select select-bordered w-full max-w-xs">
                                                    <option disabled selected>Pick the Priority</option>
                                                    <option >Han Solo</option>
                                                    <option >Greedo</option>
                                                    <option >Greedo</option>
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
                        <Ongoing tasks={tasks} />
                    </div>
                    <div>
                        <Completed tasks={tasks} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DashBoard;