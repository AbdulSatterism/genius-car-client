import React, { useEffect, useState } from 'react';
import PopularProductCart from './PopularProductCart';

const PopularProduct = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center mb-5'>
                <p className="text-2xl font-bold text-orange-600">
                    Our Popular Products
                </p>
                <h2 className="text-5xl font-semibold my-5"> Browse Our Products</h2>
                <p className='w-1/2 mx-auto' >
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <PopularProductCart
                        key={product.id}
                        product={product}
                    ></PopularProductCart>)
                }
            </div>
        </div>
    );
};

export default PopularProduct;