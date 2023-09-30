import React from "react"
import { PRODUCTS } from "../../products.js"
import Product from "../../components/Product.js"
import { motion } from "framer-motion"

export default function Shop() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="my-20 grid place-items-center text-center text-7xl font-black md:mx-10 md:my-10 md:text-5xl">
        Phosphor Shop
      </div>
      <div className="grid grid-cols-3 place-items-center md:grid-cols-1">
        {PRODUCTS.map((product, idx) => (
          <Product data={product} key={idx} />
        ))}
      </div>
    </motion.div>
  )
}
