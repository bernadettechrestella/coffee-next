import { useState, useEffect } from 'react'

export const useSession = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token)
    }, [])

    return { isLoggedIn }
}
