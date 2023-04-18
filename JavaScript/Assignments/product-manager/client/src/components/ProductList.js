import axios from "axios";
import { useEffect } from "react";
import {Link} from 'react-router-dom';


const ProductList = (props) => {

    const {removeFromDom, products, setProducts} = props;

    const removeProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/')
            .then((res) => {
                setProducts(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, []);

    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div>
                            <Link to={`/product/${product._id}`} key={index}>{product.title}</Link>
                            <br/>
                            <Link to={'/product/edit/' + product._id} key={index}>Edit</Link>
                            <br/>
                            <button onClick={(e) => {removeProduct(product._id)}}>Delete</button>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;