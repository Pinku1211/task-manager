import useAxios from "./useAxios";


const axiosPublic = useAxios()
export const saveTasks = async (user, task) =>{   
    const newTask = {
        user_email: user?.email,
        title: task?.title,
        description: task?.description,
        deadline: task?.deadline,
        priority: task?.priority,
        status: "todo"
    }
    const {data} = await axiosPublic.post('/tasks', newTask)
    return data;
}

// delete a task
export const deleteTask = async id => {
    const {data} = await axiosPublic.delete(`/tasks/${id}`)
    return data;
}

// update a task
export const updateTask = async (id, newTask) => {
    const {data} = await axiosPublic.put(`tasks/${id}`, newTask)
    return data;
}
// 
export const updateStatus = async (id, status) => {
    console.log(status)
    const {data} = await axiosPublic.put(`task/${id}`, status)
    return data;
}

