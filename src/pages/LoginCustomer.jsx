import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import Loader from "../components/Loader"

const API_URL = import.meta.env.VITE_API_URL;


const LoginCustomer = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)

        const customer = {
            email,
            password
        }

        try {
            const response = await axios.post(`${API_URL}/api/customer/login`,
                customer,
                { withCredentials: true }
            )
            toast.success(response.data.message)
            navigate('/customer/dashboard')

        } catch (error) {
            console.log('eRRoR in Customer Login', error)
            toast.error(error.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
            <div className="card w-full max-w-md">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <h1 className="page-title">
                        Welcome Back
                    </h1>

                    <p className="page-description">
                        Login to your Field Flow account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={submitForm} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="label">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input"
                            disabled={loading}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="input"
                            disabled={loading}
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {loading ? (
                            <>
                                <Loader size="sm" color="white" />
                                <span>Logging in...</span>
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>

                </form>

                {/* Register link */}
                <p className="mt-6 text-center text-sm text-slate-500">
                    Don't have an account?{" "}

                    <button
                        type="button"
                        onClick={() => navigate("/customer/register")}
                        className="font-medium text-orange-600 transition hover:text-orange-700"
                    >
                        Create Account
                    </button>
                </p>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Login as Admin{" "}

                    <button
                        type="button"
                        onClick={() => navigate("/admin/login")}
                        className="font-medium text-orange-600 transition hover:text-orange-700"
                    >
                        Login
                    </button>
                </p>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Login as technician{" "}

                    <button
                        type="button"
                        onClick={() => navigate("/technician/login")}
                        className="font-medium text-orange-600 transition hover:text-orange-700"
                    >
                        Login
                    </button>
                </p>

            </div>
        </div>
    )
}

export default LoginCustomer