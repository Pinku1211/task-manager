import React from 'react';

const Todo = ({tasks}) => {

    const {title, description, deadlines, priority} = tasks;
    return (
        <div className="bg-base-100 shadow-xl rounded-md p-2 my-3">
            <div className="flex justify-evenly items-center">
                <p>We are using cookies for no reason.</p>
                <p>We are using cookies for no reason.</p>
                <p>We are using cookies for no reason.</p>
                <p>We are using cookies for no reason.</p>
            </div>
        </div>
    );
};

export default Todo;