import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"

export default function Header() {
    return (
        <div className="bg-black text-white flex items-center justify-between h-20">
            <Link to="/" className="text-3xl font-bold ml-10">
                Shop
            </Link>
            <Link to="/cart">
                <ShoppingCart size={32} weight="bold" className="mr-10" />
            </Link>
        </div>
    )
}