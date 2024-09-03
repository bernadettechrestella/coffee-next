import { ChangeEvent } from 'react'
import { useAtom } from 'jotai'
import { cartAtom } from '../store/cart'
import { useRouter } from 'next/router'
import { CartItem } from '../types'

const CartPage = () => {
    const [cart, setCart] = useAtom(cartAtom)
    const router = useRouter()

    const handleQuantityChange = (index: number, quantity: number) => {
        const newCart = cart.map((item, i) =>
            i === index ? { ...item, quantity } : item
        )
        setCart(newCart)
    }

    const handleRemoveItem = (index: number) => {
        const newCart = cart.filter((_, i) => i !== index)
        setCart(newCart)
    }

    const handleCheckout = () => {
        const token = localStorage.getItem('token')
        if (token) {
            router.push('/checkout')
        } else {
            localStorage.setItem('redirectTo', '/checkout')
            router.push('/login')
        }
    }

    const handleAddMore = () => {
        router.push('/')
    }

    const handleCancel = () => {
        router.push('/')
    }

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <div className="container h-screen mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Your Cart</h1>
                <button
                    onClick={handleAddMore}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add More
                </button>
            </div>
            {cart.length === 0 ? (
                <p className="text-xl text-center text-gray-600">
                    Your cart is empty.
                </p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li
                                key={item.id}
                                className="border p-4 rounded shadow flex items-center bg-white"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover mr-4"
                                />
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-600">
                                        ${item.price} x {item.quantity}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(
                                            e: ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleQuantityChange(
                                                index,
                                                parseInt(e.target.value)
                                            )
                                        }
                                        className="w-16 p-1 border rounded"
                                    />
                                    <button
                                        onClick={() => handleRemoveItem(index)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col items-end mt-6">
                        <p className="text-xl font-semibold mb-2">
                            Total: ${total.toFixed(2)}
                        </p>
                        <div className="flex space-x-4 w-full">
                            <button
                                onClick={handleCancel}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 w-full"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCheckout}
                                disabled={cart.length === 0}
                                className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartPage
