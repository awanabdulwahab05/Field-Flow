
import { Navigate, Outlet } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'

const API_URL = import.meta.env.VITE_API_URL

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get(
                    `${API_URL}/api/customer/me`,
                    { withCredentials: true }
                )

                setIsAuthenticated(true)
            } catch (error) {
                setIsAuthenticated(false)
            }
        }

        checkAuth()
    }, [])

    if (isAuthenticated === null) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loader size="lg" />
            </div>
        )
    }

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/customer/login" replace />
}

export default ProtectedRoute
