import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


const Details = (props) => {
    const [person, setPerson] = useState({});
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        axios.get('http://localhost:8001/api/people/' + id)
            .then(res => {
                console.log(res.dada);
                setPerson(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <p>{person.firstName}</p>
            <p>{person.lastName}</p>
        </div>
    )
}

export default Details;