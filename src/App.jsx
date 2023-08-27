import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Cart from "./pages/cart/Cart.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";

//TODO add amount badge to the shopping cart icon

function App() {
    return (
        <ShopContextProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Shop />}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
            </Router>
        </ShopContextProvider>
    )
}

export default App;