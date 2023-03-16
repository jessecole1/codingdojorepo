import React, {useState} from 'react';


const Person = (props) => {

    const {firstName, lastName, age, hairColor} = props

    const [stateAge, setStateAge] = useState(age);

    return (
        <div>
            <h2>{ lastName }, { firstName }</h2>
            <p>{ stateAge }</p>
            <p>{ hairColor }</p>
            <button onClick = {() => setStateAge(stateAge + 1)}>Birthday button for {firstName} {lastName}</button>
        </div>
    )
}   

export default Person;