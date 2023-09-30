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
    <div className="flex h-20 items-center justify-between bg-black text-white">
      <Link to="/" className="ml-10 text-3xl font-bold md:text-2xl">
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
              <div className="absolute right-8 top-0 h-4 w-4 rounded-full bg-[#ff2921] text-center text-[11px]">
                {getTotalItemAmount()}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}
