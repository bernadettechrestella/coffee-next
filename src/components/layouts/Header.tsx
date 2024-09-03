import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { cartAtom } from '../../store/cart'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [cart, setCart] = useAtom(cartAtom)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        setCart([])
        router.push('/')
    }

    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0)

    return (
        <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" passHref>
                    <span className="flex items-center text-lg font-bold cursor-pointer">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="h-8 mr-2"
                        />
                    </span>
                </Link>
                <div className="flex items-center">
                    <Link href="/cart" passHref>
                        <span className="relative flex items-center text-gray-700 hover:text-gray-900">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h11L17 13M7 13H5.4M17 13h2.6M9 21h6M9 21a2 2 0 11-4 0M15 21a2 2 0 11-4 0"
                                />
                            </svg>
                            {cartItemCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </span>
                    </Link>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-4"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="/login" passHref>
                            <span className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-600 ml-4">
                                Login
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header
