import React, { useContext } from "react"
import { ShopContext } from "../../context/ShopContext.js"
import { PRODUCTS } from "../../products.js"
import { motion } from "framer-motion"
import CartItem from "./CartItem.jsx"
import { CartType, Product, ShopContextValue } from "../../../types.ts"

export default function Cart() {
  
const shopContext = useContext<ShopContextValue | null>(ShopContext)

if (!shopContext) {
  throw new Error("ShopContext is not available")
}

const { cartItems, getTotalAmount } = shopContext

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="grid place-items-center my-16 text-4xl font-bold">
        Your cart items
      </div>
      <div className="flex flex-col items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem product={product} />
          }
        })}
      </div>
      {getTotalAmount() > 0 ? (
        <div className="flex justify-center my-8 text-lg font-medium">
          subtotal: ${getTotalAmount()}
        </div>
      ) : (
        <div className="grid place-items-center mt-60 font-medium text-xl">
          you didn't add any product to your cart, go back and grab one!
        </div>
      )}
    </motion.div>
  )
}
