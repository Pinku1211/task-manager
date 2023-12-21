import React from 'react';
import Todo from './Todo';

const Completed = ({tasks}) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl text-center p-8">
            <h2 className="card-title">Completed</h2>
            <div className="card-body">
                <div className=''>
                    <Todo tasks={tasks} />
                    <Todo tasks={tasks} />
                </div>
            </div>
        </div>
    );
};

export default Completed;