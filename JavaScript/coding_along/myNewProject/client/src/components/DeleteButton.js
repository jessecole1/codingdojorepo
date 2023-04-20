import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

    const { personId, successCallBack} = props;

    const deletePerson = (e) => {
        axios.delete('http://localhost:8001/api/people/' + personId)
            .then(res => {successCallBack()});
    }

    return (
        <div>
            <button onClick={deletePerson}>
                Delete
            </button>
        </div>
    )
}

export default DeleteButton;