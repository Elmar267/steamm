import { useEffect, useState } from "react"
import { getData } from "./api"

function UseData() {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [footerData, setFooterData] = useState([])

    useEffect(() => {
        getData("products").then(res => setProduct(res))
        getData("category").then(res => setCategory(res))
        getData("footer").then(res => setFooterData(res))
    }, [])

    return { product, category, features, footerData }
}

export default UseData