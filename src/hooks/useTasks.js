
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useTasks = (email) => {
    const axiosPublic = useAxios()
    // use query
    const {refetch, data: tasks=[]} = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/tasks/${email}`)
            return response.data;
        }
    })

    return [tasks, refetch];
};

export default useTasks;