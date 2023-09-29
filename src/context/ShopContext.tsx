import React, { createContext, useState, ReactNode } from "react"
import { PRODUCTS } from "../products.js"
import {
  CartType,
  Product,
  ShopContextValue,
  ShopContextProviderProps,
} from "../../types.ts"

export const ShopContext = createContext<ShopContextValue | null>(null)

/**
 returns the cart object, which shows the amounts of products. (1, 2, 3 represents the productId's).
 for example,
 cart = {
      1: 0,
      2: 0,
      3: 0
}
 **/
function getDefaultCart(): CartType {
  let cart: CartType = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export default function ShopContextProvider({
  children,
}: ShopContextProviderProps): JSX.Element {
  const [cartItems, setCartItems] = useState<CartType>(getDefaultCart())

  function addToCart(itemId: number) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  function removeFromCart(itemId: number) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  function updateCartItemCount(newAmount: number, itemId: number) {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  function getTotalItemAmount(): number {
    let totalItemAmount = 0
    for (const item in cartItems) {
      totalItemAmount += cartItems[item]
    }
    return totalItemAmount
  }

  function getTotalAmount(): number {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo: Product | undefined = PRODUCTS.find(
          (product) => product.id === Number(item),
        )
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price
        }
      }
    }
    return totalAmount
  }

  const contextValue: ShopContextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalAmount,
    getTotalItemAmount,
  }

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  )
}
