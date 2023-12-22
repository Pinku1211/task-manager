import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <div className='min-h-[70vh] flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Private;