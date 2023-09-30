import React, { useContext } from "react"
import { ShopContext } from "../../context/ShopContext.js"
import { ProductType, ShopContextValue } from "../../types.ts"

type CartItemProps = {
  product: ProductType
}

export default function CartItem({ product }: CartItemProps) {
  const shopContext = useContext<ShopContextValue | null>(ShopContext)

  if (!shopContext) {
    throw new Error("ShopContext is not available")
  }

  const { cartItems, addToCart, removeFromCart } = shopContext

  return (
    <div className="mt-8 flex w-[700px] rounded-md border first:mt-0 md:w-[300px] md:flex-col md:items-center">
      <div>
        <img
          className="max-w-none md:w-[250px]"
          src={product.productImage}
          alt={product.name}
          width="300"
        />
      </div>
      <div className="ml-4 mr-20 flex flex-col justify-evenly gap-y-2 md:m-0 md:items-center">
        <span className="text-4xl font-semibold md:text-center md:text-3xl">
          {product.name}
        </span>
        <span className="text-2xl font-normal md:text-xl">
          price: ${product.price}
        </span>
        <div className="md:mb-4">
          <button
            className="rounded-l-md bg-black px-2 text-white"
            onClick={() => addToCart(product.id)}
          >
            +
          </button>
          <span className="border-y-2 border-black px-4 py-[1px]">
            {cartItems[product.id]}
          </span>
          <button
            className="rounded-r-md bg-black px-2 text-white"
            onClick={() => removeFromCart(product.id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}
