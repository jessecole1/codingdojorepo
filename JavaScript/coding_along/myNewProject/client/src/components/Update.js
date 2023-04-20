import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const {id} = useParams();
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    const [person, setPerson] = useState({});
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    console.log("id...");
    console.log(id);
    console.log("id...");


    useEffect(() => {
        axios.get('http://localhost:8001/api/people/' + id )
        .then(res => {
            console.log("res.data......");
            console.log(res);
            console.log("res.data......");
            // setFirstName( res.data.firstName );
            // setLastName( res.data.lastName );
            setPerson(res.data);
            setLoaded(true);
        })
        // .catch(err => console.log(err))
    }, []);
    // console.log('get method...');
    // console.log(firstName);

    const updatePerson = personParam => {
        // e.preventDefault();
        console.log("heya");
        axios.put('http://localhost:8001/api/people/' + id, personParam)
            .then(res => 
                console.log(res),
                navigate('/people')
            );
            // .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update Person</h1>
            {
                loaded && (
                <>
                <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName} />
                <DeleteButton personId={person._id} successCallBack={() => navigate('/people')} />
                </>
            )}
        </div>
    )
}

export default Update;