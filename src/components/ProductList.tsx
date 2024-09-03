import { FC } from 'react'
import { Product } from '../types'
import ProductCard from './ProductCard'

interface ProductListProps {
    products: Product[]
}

const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList
