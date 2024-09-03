import React from 'react'
import { Product } from '../../types/products'

interface FeaturedProductsProps {
    products: Product[]
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
    return (
        <div className="featured-products">
            <h2>Featured Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturedProducts
