import React, { useContext } from 'react'
import { ShopContext } from "../context/ShopContext.jsx";
import { motion } from "framer-motion"

const item = {
    hidden: {
        opacity: 0,
        translateY: 20
    },
    visible: {
        opacity: 1,
        translateY: 0
    }
}

export default function Product(props) {

    const {id, name, price, productImage} = props.data
    const {cartItems, addToCart} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return (
        <motion.div className="flex flex-col items-center my-6" variants={item} initial="hidden" animate="visible">
            <img className="md:w-[300px]" src={productImage} alt={name} width="400"/>
            <span className="font-bold">
                {name}
            </span>
            <span className="mt-2">
                ${price}
            </span>
            <button onClick={() => addToCart(id)}
                className={`w-28 mt-3 border-2 p-1 rounded-full border-black text-sm 
                hover:bg-black hover:text-white transition-all`}>
                add to cart {cartItemAmount > 0 && (<>({cartItemAmount})</>)}
            </button>
        </motion.div>
    )
}