import { useNavigate } from "react-router"

const AdminDashboard = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="page-container">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="page-title">
                        Admin Dashboard
                    </h1>

                    <p className="page-description">
                        Manage complaints and oversee Field Flow services.
                    </p>
                </div>

                {/* Navigation Cards */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* All Complaints */}
                    <div className="card transition hover:border-orange-300 hover:shadow-md">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                                />
                            </svg>
                        </div>

                        <h2 className="section-title">
                            All Complaints
                        </h2>

                        <p className="mt-2 mb-6 text-sm leading-6 text-slate-500">
                            View customer complaints, review reported problems,
                            and manage incoming service requests.
                        </p>

                        <button
                            onClick={() => navigate("/admin/complaints")}
                            className="btn-primary w-full"
                        >
                            Get All Complaints
                        </button>
                    </div>

                    {/* Manage Technicians */}
                    <div className="card transition hover:border-orange-300 hover:shadow-md">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19.128a9.38 9.38 0 0 0 3.75.773A9.37 9.37 0 0 0 21 19.63v-.502a6 6 0 0 0-12 0v.502c.71.174 1.47.27 2.25.27 1.32 0 2.58-.27 3.75-.772ZM15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6 19.5H3v-.75a5.25 5.25 0 0 1 5.25-5.25"
                                />
                            </svg>
                        </div>

                        <h2 className="section-title">
                            Manage Technicians
                        </h2>

                        <p className="mt-2 mb-6 text-sm leading-6 text-slate-500">
                            View technician accounts and manage the technicians
                            who provide services to customers.
                        </p>

                        <button
                            onClick={() => navigate("/admin/technicians")}
                            className="btn-primary w-full"
                        >
                            View Technicians
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard