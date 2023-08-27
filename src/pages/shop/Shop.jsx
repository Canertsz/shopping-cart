import React from 'react'
import { PRODUCTS } from "../../products.js";
import Product from "../../components/Product.jsx";

export default function Shop() {
    return (
        <div>
            <div className="grid text-7xl font-black place-items-center my-20">Phosphor Shop</div>
            <div className="grid grid-cols-3 place-items-center">
                {PRODUCTS.map(product => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
}
