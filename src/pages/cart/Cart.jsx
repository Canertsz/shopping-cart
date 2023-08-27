import React, { useContext } from 'react'
import { ShopContext } from "../../context/ShopContext.jsx";
import { PRODUCTS } from "../../products.js";
import CartItem from "./CartItem.jsx";

export default function Cart() {

    const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(ShopContext)

    return (
        <div>
            <div className="grid place-items-center my-16 text-4xl font-bold">Your cart items</div>
            <div className="flex flex-col items-center">{PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem product={product} />
                }
            })}</div>
            <div>subtotal: </div>
        </div>
    )
}
