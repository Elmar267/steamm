
import { useEffect, useState } from "react"

function UseWish() {
    const [wish, setWish] = useState(() => {
        const savedWish = localStorage.getItem("wishlist")
        return savedWish ? JSON.parse(savedWish) : []
    })
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wish))
    }, [wish])

    function addWish(id, title, oldPrice, newPrice, discount, platform, coverImage) {
        const alreadyExistsWish = wish.some(item => item.id === id)
        if (alreadyExistsWish) {
            return
        }

        setWish([...wish, { id, title, oldPrice, newPrice, discount, platform, coverImage }]) }

    function removeFromWishlist(id) { setWish(wish.filter(item => item.id !== id)) }

    return { wish, addWish, removeFromWishlist }
}

export default UseWish