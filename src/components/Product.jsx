import React, { useContext } from 'react'
import { ShopContext } from "../context/ShopContext.jsx";

export default function Product(props) {

    const {id, name, price, productImage} = props.data
    const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return (
        <div className="flex flex-col items-center my-6">
            <img src={productImage} alt={name} width="400"/>
            <span className="font-bold">{name}</span>
            <span className="mt-2">${price}</span>
            <button onClick={() => addToCart(id)}
                className={`w-28 mt-3 border-2 p-1 rounded-full border-black text-sm hover:bg-black hover:text-white transition-all`}>
                add to cart {cartItemAmount > 0 && (<>({cartItemAmount})</>)}
            </button>
        </div>
    )
}