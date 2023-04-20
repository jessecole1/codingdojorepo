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
// import axios from 'axios';

const PersonForm = (props) => {
    // const {people, setPeople} = props; 
    // PART III - Codeblock 7
    const {initialFirstName, initialLastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </p>
            <p>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value) } />
            </p>
            <input type="submit"/>
        </form>
    )
}

export default PersonForm;