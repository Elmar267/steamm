import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"
import ScrollToTop from "./ScrollToTop"
import UseData from "../provider/UseData"
import UseWish from "../provider/UseWish"
import UseBasket from "../provider/UseBasket"
import { BASKET, DATA, WISH } from '../provider/Context'

function App() {
    const { product, category, features, footerData } = UseData()
    const { basket, addBasket, removeFromBasket, clearBasket } = UseBasket()
    const { wish, addWish, removeFromWishlist } = UseWish()

    return (
        <DATA value={{ product, category, features, footerData }}>
            <BASKET value={{ basket, addBasket, removeFromBasket, clearBasket }}>
                <WISH value={{ wish, addWish, removeFromWishlist }}>
                    <ScrollToTop />
                    <Header />
                    <Outlet />
                    <Footer />
                </WISH>
            </BASKET>
        </DATA>
    )
}

export default App