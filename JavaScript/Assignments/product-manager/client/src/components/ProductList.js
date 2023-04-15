import axios from "axios";
import { useEffect } from "react";
import {Link} from 'react-router-dom';


const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
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
                        <Link to={`/product/${product._id}`} key={index}>{product.title}</Link>
                    )
                })
            }
        </div>
    )
}
export default ProductList;