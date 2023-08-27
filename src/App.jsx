import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Cart from "./pages/cart/Cart.jsx";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Shop />}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
