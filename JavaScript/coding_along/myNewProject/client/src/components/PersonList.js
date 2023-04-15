import React, {useState, useEffect} from 'react';
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
                return <p key={index}>{person.firstName} {person.lastName}</p>
                })
            }
        </div>
    )
}

export default PersonList;