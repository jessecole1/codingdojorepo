import React, {useState} from 'react';
import ProductList from '../components/ProductList';
import Form from '../components/Form';

const Main = (props) => {
    const [products, setProducts] = useState([]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    return (
        <div>
            <Form products={products} setProducts={setProducts} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;