import {useState, useEffect} from 'react';
import axios from 'axios';

const Form = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title: title,
            price: price,
            description: description
        })
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            });
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}}/>
            <label>Price</label>
            <input type="number" onChange={(e) => {setPrice(e.target.value)}}/>
            <label>Description</label>
            <textarea onChange={(e) => {setDescription(e.target.value)}}></textarea>
            <input type="submit"/>
        </form>
    )
}

export default Form;