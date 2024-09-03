import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const router = useRouter()
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const isLoginPage = router.pathname === '/login'

    const handleLogout = () => {
        localStorage.removeItem('token')
        router.push('/login')
    }

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible)
    }

    return (
        <div className="min-h-screen flex flex-col">
            {!isLoginPage && <Header />}
            <main className="flex-grow bg-gray-100">{children}</main>
            {!isLoginPage && <Footer />}
        </div>
    )
}

export default MainLayout
