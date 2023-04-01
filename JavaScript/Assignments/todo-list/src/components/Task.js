import React, {useState} from 'react';

const Task = (props) => {

    const {todoList} = props

    return (
        <div>
            {
                todoList.map((item, index) => {
                    <div className="todoList">
                        
                    </div>
                })
            }
        </div>
    )
}

export default Task;