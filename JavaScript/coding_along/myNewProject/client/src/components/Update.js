import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const navigate = useNavigate();
    console.log("id...");
    console.log(id);
    console.log("id...");


    useEffect(() => {
        axios.get('http://localhost:8001/api/people/' + id )
        .then(res => {
            console.log("res.data......");
            console.log(res);
            console.log("res.data......");
            setFirstName( res.data.firstName );
            setLastName( res.data.lastName );
        })
        .catch(err => console.log(err))
    }, []);
    console.log('get method...');
    console.log(firstName);

    const updatePerson = (e) => {
        e.preventDefault();
        console.log("heya");
        axios.put('http://localhost:8001/api/people/' + id, {
            firstName: firstName,
            lastName: lastName
        })
            .then(res => {
                console.log('before nav');
                navigate('/people');
                console.log("after nav");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Update;