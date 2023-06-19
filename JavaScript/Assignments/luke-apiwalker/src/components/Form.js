import React, {useState} from 'react';
import {navigate} from '@gatsbyjs/reach-router';

const Form = (props) => {
    // const [category, setCategory] = useState("");
    // const [id, setId] = useState("");

    const {id, setId, category, setCategory} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(id);
        navigate(`/${category}/${id}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">-------</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>Id</label>
                <input type="text" onChange={(e) => setId(e.target.value)}/>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Form;