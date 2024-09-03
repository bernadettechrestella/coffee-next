import { FC } from 'react'
import { Product } from '../types'
import Link from 'next/link'

interface ProductCardProps {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border p-4 rounded">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link
                href={`/products/${product.id}`}
                className="text-blue-500 hover:underline"
            >
                View Details
            </Link>
        </div>
    )
}

export default ProductCard
