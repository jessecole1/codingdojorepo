import React, {useState} from 'react';
import ProductList from '../components/ProductList';
import Form from '../components/Form';

const Main = (props) => {
    const [products, setProducts] = useState([]);



    return (
        <div>
            <Form products={products} setProducts={setProducts} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}

export default Main;