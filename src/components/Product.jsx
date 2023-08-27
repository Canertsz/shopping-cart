import React, { useContext } from 'react'
import { ShopContext } from "../context/ShopContext.jsx";

export default function Product(props) {

    const {id, name, price, productImage} = props.data
    const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(ShopContext)

    return (
        <div className="flex flex-col items-center my-6">
            <img src={productImage} alt={name} width="400"/>
            <span className="font-bold">{name}</span>
            <span className="mt-2">${price}</span>
            <button onClick={() => addToCart(id)}
                className="mt-3 border p-1 rounded-full border-black w-24 text-sm hover:bg-black hover:text-white transition-all">
                add to cart
            </button>
        </div>
    )
}