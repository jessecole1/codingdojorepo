import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch( err => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                navigate('/product')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>
                <form onSubmit={submitHandler}>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                    <br/>
                    <label>Price: </label>
                    <input type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                    <br/>
                    <label>Description: </label>
                    <textarea name="description" value={description} onChange={(e) => {setDescription(e.target.value)}} />
                    <input type="submit"/>
                </form>
            </p>

        </div>
    )
}

export default Update;