import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"
import { useMediaQuery } from 'react-responsive'

export default function Header() {

    const isDesktopOrTablet = useMediaQuery({
        query: '(min-width: 767px)'
    })

    return (
        <div className="bg-black text-white flex items-center justify-between h-20">
            <Link to="/" className="text-3xl font-bold ml-10 md:text-2xl">
                PhosphorShop
            </Link>
            <Link to="/cart">
                <ShoppingCart size={isDesktopOrTablet ? 32 : 24} weight="bold" className="mr-10" />
            </Link>
        </div>
    )
}