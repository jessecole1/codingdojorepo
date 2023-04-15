import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// PART III - Codeblock 6

import axios from 'axios';

const PersonList = (props) => {
    // console.log("------------");
    // console.log(props);
    // console.log("------------");
    // console.log(props.people);

    const {people, setPeople} = props;
    

    useEffect(() => {
        axios.get('http://localhost:8001/api/people')
            .then((res) => {
                // console.log("===========");
                // console.log(res.data);
                // console.log("------------");
                setPeople(res.data);
                // console.log(people);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    console.log(people);

    return (
        <div>
            {
                people.map((person, index)=>{
                return (
                    <div>
                        <p key={index}>{person.firstName}</p>
                        <p key={index}>{person.lastName}</p>
                        <Link to={`/people/${person._id}`}>{person.firstName}'s Page!</Link>
                    </div>
                )
                })
            }
        </div>
    )
}

export default PersonList;