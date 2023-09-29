import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import { useMediaQuery } from "react-responsive"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import React from "react"

export default function Header() {
  const { getTotalItemAmount } = useContext(ShopContext) ?? {
    getTotalItemAmount: () => 0,
  }

  const isDesktopOrTablet = useMediaQuery({
    query: "(min-width: 767px)",
  })

  return (
    <div className="bg-black text-white flex items-center justify-between h-20">
      <Link to="/" className="text-3xl font-bold ml-10 md:text-2xl">
        PhosphorShop
      </Link>
      <div className="relative">
        <Link to="/cart">
          <div className="relative">
            <ShoppingCart
              size={isDesktopOrTablet ? 32 : 24}
              weight="bold"
              className="mr-10"
            />
            {getTotalItemAmount() !== 0 && (
              <div className="absolute w-4 h-4 rounded-full bg-[#ff2921] text-[11px] text-center top-0 right-8">
                {getTotalItemAmount()}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}
