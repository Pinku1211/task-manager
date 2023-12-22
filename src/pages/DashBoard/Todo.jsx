import React from 'react';
import { deleteTask, updateStatus } from '../../hooks/auth';
import { ImCross } from 'react-icons/im';
import toast from 'react-hot-toast';
import { MdEdit } from "react-icons/md";
import { useDrag, useDrop } from 'react-dnd'
import { Link } from 'react-router-dom';


const Section = ({ refetch, status, todos, ongoing, completed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })

    }))

    const addItemToSection = async id => {
        await updateStatus(id, { status })
        await refetch()
        if (status !== "todo") {
            toast.success('updated successfully!')
        }
    }


    let text = "Todo"
    let bg = "bg-[#265073]"
    let tasksToMap = todos

    if (status === "ongoing") {
        text = "Ongoing"
        bg = "bg-[#163020]"
        tasksToMap = ongoing
    }
    if (status === "completed") {
        text = "Completed"
        bg = "bg-[#607274]"
        tasksToMap = completed
    }

    return (
        <div ref={drop} className={`w-full rounded-md p-2 ${isOver ? "bg-slate-100" : ""}`}>
            <Header text={text} bg={bg} count={tasksToMap.length} />
            {
                tasksToMap?.map(task => <Task key={task._id} task={task} refetch={refetch}></Task>)
            }
        </div>
    );
};

export default Section;

const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} text-white flex items-center justify-between h-12 pl-4 rounded-md`}>
            {text}
            <div className='rounded-full text-black mr-4 w-4 h-4 p-4 flex items-center justify-center bg-slate-200'>
                {count}
            </div>
        </div>
    )
}
const Task = ({ task, refetch }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleDelete = async (id) => {
        console.log(id)
        await deleteTask(id)
        await refetch()
        toast.success("successfully deleted!")
    }


    return <div ref={drag} key={task._id} className={`bg-base-100 shadow-xl rounded-md ${isDragging ? "opacity-25" : ""} p-2 my-3 cursor-pointer`}>
        <div className="flex items-center justify-between text-left">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th><ImCross onClick={() => handleDelete(task._id)} className='text-md text-black hover:scale-125' /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.deadline}</td>
                            <td><div className="badge badge-accent">{task.priority}</div></td>
                            <td><Link to={`/dashboard/update/${task._id}`}><MdEdit className='text-lg hover:scale-125'/></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>

    </div>
}
