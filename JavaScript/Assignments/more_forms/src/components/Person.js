import React, {useState} from 'react';

const Person = (props) => {
    
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: ''
    })

    const changeHandler = (e) => {
        setPerson({...person, [e.target.name]: e.target.value})
    }

    return (
        <div class='form'>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={changeHandler}></input>
            {
                person.firstName.length < 2?
                <p>First name must be more than 2 characters</p>:
                null
            }

            <label>Last Name</label>
            <input type="text" name="lastName" onChange={changeHandler}></input>
            {
                person.lastName.length < 2?
                <p>Last name must be more than 2 characters</p>:
                null
            }

            <label>Email</label>
            <input type="text" name="email" onChange={changeHandler}></input>
            {
                person.email.length < 5?
                <p>Email must be more than 5 characters</p>:
                null
            }

            <label>Password</label>
            <input type="password" name="password" onChange={changeHandler}></input>
            {
                person.password.length < 8?
                <p>Password must be at least 8 characters</p>:
                null
            }
            {
                person.password != person.confirm?
                <p>Passwords must match</p>:
                null
            }

            <label>Confirm</label>
            <input type="password" name="confirm" onChange={changeHandler}></input>
            {
                person.confirm.length < 8?
                <p>Password must be at least 8 characters</p>:
                null
            }
        </div>
)}

export default Person;