import { useAtom } from 'jotai'
import { cartAtom } from '../store/cart'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { CartItem } from '../types'

const MiniCart = () => {
    const [cart] = useAtom<CartItem[]>(cartAtom)
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <div className="relative">
            <Link href="/cart">
                <span className="hover:text-gray-600">
                    <FaShoppingCart className="w-6 h-6" />
                    {itemCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                            {itemCount}
                        </span>
                    )}
                </span>
            </Link>
        </div>
    )
}

export default MiniCart
