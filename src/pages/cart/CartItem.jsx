import React, { useContext } from 'react'
import { ShopContext } from "../../context/ShopContext.jsx";

export default function CartItem({ product }) {

    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)

    return (
        <div className="flex border rounded-md mt-8 first:mt-0 w-[700px] md:w-[300px] md:flex-col md:items-center">
            <div>
                <img className="max-w-none md:w-[250px]" src={product.productImage} alt={product.name} width="300"/>
            </div>
            <div className="flex flex-col ml-4 mr-20 justify-evenly md:items-center md:m-0 gap-y-2">
                <span className="text-4xl md:text-3xl font-semibold md:text-center">
                    {product.name}
                </span>
                <span className="text-2xl md:text-xl font-normal">
                    price: ${product.price}
                </span>
                <div className="md:mb-4">
                    <button className="bg-black text-white px-2 rounded-l-md" onClick={() => addToCart(product.id)}>
                        +
                    </button>
                    <span className="border-y-2 border-black px-4 py-[1px]">
                        {cartItems[product.id]}
                    </span>
                    <button className="bg-black text-white px-2 rounded-r-md" onClick={() => removeFromCart(product.id)}>
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}
