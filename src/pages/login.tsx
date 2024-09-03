import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { cartAtom } from '@/store/cart'

interface LoginFormInputs {
    username: string
    password: string
}

const LoginPage = () => {
    const { register, handleSubmit } = useForm<LoginFormInputs>()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [cart] = useAtom(cartAtom)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const redirectTo = localStorage.getItem('redirectTo') || '/'
            router.push(redirectTo)
        }
    }, [router])

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        if (result.token) {
            localStorage.setItem('token', result.token)
            const redirectTo = localStorage.getItem('redirectTo') || '/'
            if (cart.length === 0) {
                router.push('/')
            } else {
                router.push(redirectTo)
            }
        } else {
            setLoading(false)
            alert('Login failed')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-1 text-center">Login</h1>
                <h1 className="text-base mb-6 text-center">
                    <a
                        href="https://fakestoreapi.com/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://fakestoreapi.com/docs
                    </a>
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            {...register('username', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                        >
                            {loading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
