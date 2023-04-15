import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Details = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }, []);

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Details;