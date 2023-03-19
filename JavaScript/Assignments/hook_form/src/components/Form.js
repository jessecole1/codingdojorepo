import React, {useState} from 'react';

const Form = (props) => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: ''
    })

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div class='form'>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={changeHandler}></input>
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={changeHandler}></input>
            <label>Email</label>
            <input type="text" name="email" onChange={changeHandler}></input>
            <label>Password</label>
            <input type="password" name="password" onChange={changeHandler}></input>
            <label>Confirm</label>
            <input type="password" name="confirm" onChange={changeHandler}></input>
            <tabel>
                <tbody>
                    <tr>
                        <td>First Name </td>
                        <td>{user.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name </td>
                        <td>{user.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email </td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Password </td>
                        <td>{user.password}</td>
                    </tr>
                    <tr>
                        <td>Confirm </td>
                        <td>{user.confirm}</td>
                    </tr>
                </tbody>
            </tabel>
        </div>
    )
}

export default Form;