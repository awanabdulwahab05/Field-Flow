import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import {
    ClipboardPlus,
    FileText,
    ArrowUpRight,
    ShieldCheck,
    Wrench,
    Clock3,
} from 'lucide-react'
import { toast } from 'sonner'
import Loader from '../components/Loader'

const API_URL = import.meta.env.VITE_API_URL

const CustomerDashboard = () => {
    const [customer, setCustomer] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const getCustomer = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/api/customer/me`,
                    { withCredentials: true }
                )

                setCustomer(response.data.customer)
            } catch (error) {
                console.error(error)
                toast.error(
                    error.response?.data?.message ||
                    'Failed to load your dashboard'
                )
            } finally {
                setLoading(false)
            }
        }

        getCustomer()
    }, [])

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <Loader size="lg" />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <main className="page-container">

                {/* Welcome Section */}
                <section className="relative mb-10 overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-lg sm:px-10 sm:py-12">
                    <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 right-1/3 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-orange-200">
                                <span className="h-2 w-2 rounded-full bg-green-400" />
                                Customer Dashboard
                            </span>

                            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                                Hello, {customer?.name || 'Customer'}!
                            </h1>

                            <p className="mt-3 max-w-lg leading-7 text-slate-300">
                                Welcome back to Field Flow. Manage your
                                service complaints and keep track of your
                                repair reports in one place.
                            </p>

                            <button
                                onClick={() =>
                                    navigate('/customer/complaint')
                                }
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            >
                                <ClipboardPlus size={19} />
                                Register a Complaint
                                <ArrowUpRight size={17} />
                            </button>
                        </div>

                        <div className="hidden h-36 w-36 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 md:flex">
                            <Wrench
                                size={64}
                                strokeWidth={1.3}
                                className="text-orange-400"
                            />
                        </div>
                    </div>
                </section>

                {/* Section Heading */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold text-slate-900">
                        Quick Actions
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        What would you like to do today?
                    </p>
                </section>

                {/* Action Cards */}
                <section className="grid gap-5 md:grid-cols-2">

                    {/* Complaint Card */}
                    <button
                        onClick={() =>
                            navigate('/customer/complaint')
                        }
                        className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5 sm:p-8"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                                <ClipboardPlus size={27} />
                            </div>

                            <ArrowUpRight
                                size={21}
                                className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-600"
                            />
                        </div>

                        <h3 className="mt-6 text-lg font-bold text-slate-900">
                            Register a Complaint
                        </h3>

                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                            Having an appliance or equipment problem?
                            Submit your complaint and request a technician.
                        </p>

                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                            Create complaint
                            <span aria-hidden="true">→</span>
                        </span>
                    </button>

                    {/* Reports Card */}
                    <button
                        onClick={() => navigate('/report')}
                        className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5 sm:p-8"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                <FileText size={27} />
                            </div>

                            <ArrowUpRight
                                size={21}
                                className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-600"
                            />
                        </div>

                        <h3 className="mt-6 text-lg font-bold text-slate-900">
                            My Service Reports
                        </h3>

                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                            View completed repair details, technician
                            notes, replacement parts, and service costs.
                        </p>

                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                            View reports
                            <span aria-hidden="true">→</span>
                        </span>
                    </button>
                </section>

                {/* Information Section */}
                <section className="mt-10 grid gap-4 sm:grid-cols-3">

                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                            <ShieldCheck size={23} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">
                                Reliable Service
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-slate-500">
                                Your service requests are managed through
                                Field Flow.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                            <Wrench size={23} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">
                                Technician Assignment
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-slate-500">
                                Your complaint can be assigned to a
                                technician by the admin.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Clock3 size={23} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">
                                Track Your Service
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-slate-500">
                                Check your service progress and review
                                completed repair reports.
                            </p>
                        </div>
                    </div>

                </section>

                {/* Footer Note */}
                <div className="mt-10 border-t border-slate-200 pt-6 text-center">
                    <p className="text-sm text-slate-500">
                        Need help with a repair?{' '}
                        <button
                            onClick={() =>
                                navigate('/customer/complaint')
                            }
                            className="font-semibold text-orange-600 transition hover:text-orange-700"
                        >
                            Submit a complaint
                        </button>
                    </p>
                </div>

            </main>
        </div>
    )
}

export default CustomerDashboard