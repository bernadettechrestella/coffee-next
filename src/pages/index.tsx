import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import FeaturedProducts from '../components/product'

interface Product {
    id: number
    name: string
    price: string
    image: string
}

const coffeeProducts = [
    {
        id: 101,
        name: 'Premium Coffee Beans',
        price: '15.99',
        image: '/images/product1.png',
    },
    {
        id: 102,
        name: 'Espresso Coffee',
        price: '12.99',
        image: '/images/product1.png',
    },
    {
        id: 103,
        name: 'Organic Coffee',
        price: '18.99',
        image: '/images/product1.png',
    },
    {
        id: 104,
        name: 'Colombian Coffee',
        price: '14.99',
        image: '/images/product1.png',
    },
    {
        id: 105,
        name: 'French Roast Coffee',
        price: '16.99',
        image: '/images/product1.png',
    },
    {
        id: 106,
        name: 'Italian Espresso',
        price: '13.99',
        image: '/images/product1.png',
    },
    {
        id: 107,
        name: 'Arabica Coffee',
        price: '17.99',
        image: '/images/product1.png',
    },
    {
        id: 108,
        name: 'Robusta Coffee',
        price: '11.99',
        image: '/images/product1.png',
    },
    {
        id: 109,
        name: 'Mocha Coffee',
        price: '19.99',
        image: '/images/product1.png',
    },
    {
        id: 110,
        name: 'Latte Coffee',
        price: '10.99',
        image: '/images/product1.png',
    },
]

export default function Home() {
    const router = useRouter()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        // Cek apakah pengguna sudah login
        const token = localStorage.getItem('token')
        const isLoggedIn = !!token // Mengubah token menjadi boolean

        // if (!isLoggedIn) {
        //     router.push('/login')
        // } else {
        // Set products with dummy coffee data
        setProducts(coffeeProducts)
        // }
    }, [router])

    return (
        <div className="homepage">
            <HeroBanner />
            <FeaturedProducts products={products} />
        </div>
    )
}
