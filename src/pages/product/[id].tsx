import { useRouter } from 'next/router'
import { getProductById } from '../../api/products'
import { useSession } from '../../hooks/useSession'
import { Product, CartItem } from '../../types'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { cartAtom } from '@/store/cart'

const ProductDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const [product, setProduct] = useState<Product | null>(null)
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useAtom<CartItem[]>(cartAtom)
    const { isLoggedIn } = useSession()

    useEffect(() => {
        if (id) {
            getProductById(Number(id)).then(setProduct)
        }
    }, [id])

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            router.push('/login')
            return
        }
        if (product) {
            const existingProductIndex = cart.findIndex(
                (item) => item.id === product.id
            )
            if (existingProductIndex >= 0) {
                const newCart = [...cart]
                newCart[existingProductIndex].quantity += quantity
                setCart(newCart)
            } else {
                setCart([...cart, { ...product, quantity }])
            }
        }
    }

    if (!product) return <div>Loading...</div>

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            <div className="mb-4">
                <label className="block mb-2">Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    className="border rounded p-2 w-16 text-center"
                />
            </div>
            <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductDetail
