import { useEffect, useState } from 'react'
import { getProductList } from '../api/products'
import ProductList from '../components/ProductList'

const ProductListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductList().then(setProducts)
    }, [])

    return <ProductList products={products} />
}

export default ProductListContainer
