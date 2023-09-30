import React, { useContext } from "react"
import { ShopContext } from "../context/ShopContext.jsx"
import { motion } from "framer-motion"
import { ProductType } from "../types.js"

type ProductProps = {
  data: ProductType
  key: number
}

const item = {
  hidden: {
    opacity: 0,
    translateY: 20,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
}

export default function Product(props: ProductProps): JSX.Element {
  const { id, name, price, productImage } = props.data

  const shopContext = useContext(ShopContext)

  if (!shopContext) {
    throw new Error("ShopContext is not available")
  }

  const { cartItems, addToCart } = shopContext

  const cartItemAmount = cartItems[id]

  return (
    <motion.div
      className="my-6 flex flex-col items-center"
      variants={item}
      initial="hidden"
      animate="visible"
    >
      <img className="md:w-[300px]" src={productImage} alt={name} width="400" />
      <span className="font-bold">{name}</span>
      <span className="mt-2">${price}</span>
      <button
        onClick={() => addToCart(id)}
        className={`mt-3 w-28 rounded-full border-2 border-black p-1 text-sm 
                transition-all hover:bg-black hover:text-white`}
      >
        add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </motion.div>
  )
}
