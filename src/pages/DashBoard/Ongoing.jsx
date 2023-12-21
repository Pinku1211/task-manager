import React from 'react';
import Todo from './Todo';

const Ongoing = ({tasks}) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl text-center p-8">
            <h2 className="card-title">Ongoing</h2>
            <div className="card-body">
                <div className=''>
                    <Todo tasks={tasks} />
                    <Todo tasks={tasks} />
                </div>
            </div>
        </div>
    );
};

export default Ongoing;