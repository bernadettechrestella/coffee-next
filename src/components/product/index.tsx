import React from 'react'
import { useSetAtom } from 'jotai'
import { addToCartAtom } from '../../store/cart'
import { CartItem } from '../../types'

interface Product {
    id: number
    name: string
    price: string
    image: string
}

interface FeaturedProductsProps {
    products: Product[]
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
    const addToCart = useSetAtom(addToCartAtom)

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="border p-4 rounded shadow flex flex-col items-center"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover mb-4"
                        />
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-gray-600 mb-4">${product.price}</p>
                        <button
                            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-600"
                            onClick={() =>
                                addToCart({
                                    id: product.id,
                                    name: product.name,
                                    price: parseFloat(product.price), // Ensure price is converted to a number
                                    quantity: 1,
                                    image: product.image, // Ensure image is included
                                } as CartItem)
                            }
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturedProducts
