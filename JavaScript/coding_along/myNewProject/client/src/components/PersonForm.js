// Codeblock 4
// import {useEffect, useState} from 'react';
// import axios from 'axios';

// const PersonForm = () => {
//     const [message, setMessage] = useState('Loading...')
//     useEffect(() => {
//         axios.get('http://localhost:8001/api')
//             .then(res=>setMessage(res.data.message))
//             .catch(err=>console.log(err))
//     }, []);
//     return (
//         <div>
//             <h2>Message from backend: {message}</h2>
//         </div>
//     )
// }

// export default PersonForm;

// PART II - Codeblock 6

import React, {useState} from 'react';
import axios from 'axios';

const PersonForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8001/api/people', {
            firstName: firstName,
            lastName: lastname
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))

    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </p>
            <p>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value) } />
            </p>
            <input type="submit"/>
        </form>
    )
}

export default PersonForm;