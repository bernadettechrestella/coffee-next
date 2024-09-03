// src/components/HeroBanner/HeroBanner.tsx
import React from 'react'

const HeroBanner = () => (
    <div className="hero-banner relative bg-gray-200 h-64 md:h-96">
        <img
            src="/images/hero-banner2.jpg"
            alt="Hero Banner"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
                Welcome to Coffee Shop
            </h1>
            <p className="mt-4 text-lg md:text-2xl">
                Discover our delicious coffee products
            </p>
        </div>
    </div>
)

export default HeroBanner
