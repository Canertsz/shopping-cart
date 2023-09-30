import { ReactNode } from "react"

export type CartType = Record<number, number>

export type ProductType = {
  id: number
  name: string
  price: number
  productImage: string
}

export type ShopContextProviderProps = {
  children: ReactNode
}

export type ShopContextValue = {
  cartItems: CartType
  setCartItems: React.Dispatch<React.SetStateAction<CartType>>
  addToCart: (itemId: number) => void
  removeFromCart: (itemId: number) => void
  updateCartItemCount: (newAmount: number, itemId: number) => void
  getTotalAmount: () => number
  getTotalItemAmount: () => number
}
