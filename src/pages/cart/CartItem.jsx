import React, { useContext } from 'react'
import {ShopContext} from "../../context/ShopContext.jsx";

export default function CartItem({ product }) {

    const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(ShopContext)

    return (
        <div className="flex border rounded-md mt-8 first:mt-0 w-[700px]">
            <div>
                <img src={product.productImage} alt={product.name} width="300"/>
            </div>
            <div className="flex flex-col ml-4 mr-20 justify-evenly">
                <span className="text-4xl font-semibold">{product.name}</span>
                <span className="text-2xl font-normal">price: ${product.price}</span>
                <div>
                    <button className="bg-black text-white px-2 rounded-l-md" onClick={() => addToCart(product.id)}>+</button>
                    <span className="border-y-2 border-black px-4 py-[1px]">{cartItems[product.id]}</span>
                    <button className="bg-black text-white px-2 rounded-r-md" onClick={() => removeFromCart(product.id)}>-</button>
                </div>
            </div>
        </div>
    )
}
