import { useAtom } from 'jotai'
import { cartAtom } from '../store/cart'
import { useState } from 'react'
import { useRouter } from 'next/router'

const CheckoutPage = () => {
    const [cart, setCart] = useAtom(cartAtom)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const router = useRouter()

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    const handleConfirmPurchase = () => {
        setShowSuccessModal(true)
    }

    const handleCloseModal = () => {
        setShowSuccessModal(false)
        setCart([])
        router.push('/')
    }

    const handleCancel = () => {
        router.push('/cart')
    }

    return (
        <div className="h-auto my-4 flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Checkout
                </h1>
                <ul className="space-y-4 mb-6">
                    {cart.map((item) => (
                        <li
                            key={item.id}
                            className="border p-4 rounded shadow flex"
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
                        </li>
                    ))}
                </ul>
                <p className="text-xl font-semibold mb-6 text-right">
                    Total: ${total.toFixed(2)}
                </p>
                <button
                    onClick={handleConfirmPurchase}
                    className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-950 w-full"
                >
                    Confirm Purchase
                </button>
                <button
                    onClick={handleCancel}
                    className="bg-gray-500 text-white px-4 py-2 mt-1 rounded hover:bg-gray-700 w-full"
                >
                    Cancel
                </button>
            </div>

            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-2xl font-bold mb-4 text-center">
                            Thank You for Your Purchase!
                        </h1>
                        <h1 className="text-xl mb-4 text-center">
                            Please pick up your orders at the counter.
                        </h1>
                        <h1 className="text-xl mb-4 text-center">
                            Enjoy your drink!
                        </h1>
                        <button
                            onClick={handleCloseModal}
                            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CheckoutPage
