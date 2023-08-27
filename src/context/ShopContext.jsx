import React, { createContext, useState } from 'react'
import { PRODUCTS } from "../products.js";

export const ShopContext = createContext(null)

/**
 returns the cart object, which shows the amounts of products. (1, 2, 3 represents the productId's).
 for example,
 cart = {
      1: 0,
      2: 0,
      3: 0
}
 **/
function getDefaultCart() {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export default function ShopContextProvider({ children }) {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    function addToCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    function removeFromCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    function updateCartItemCount(newAmount, itemId){
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    function getTotalAmount() {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const contextValue = {cartItems, setCartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount}

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}