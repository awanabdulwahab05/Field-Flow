import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios";
import { toast } from "sonner";
import Loader from "../components/Loader"
const API_URL = import.meta.env.VITE_API_URL;


const RegisterComplaint = () => {
    const [problem, setProblem] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [street, setLatitude] = useState("")
    const [houseNumber, setLongitude] = useState("")
    const [urgency, setUrgency] = useState("normal")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()

        setLoading(true)
        const complaintData = {
            problem,
            location: {
                address,
                city,
                street,
                houseNumber
            },
            urgency
        }

        try {
            const response = await axios.post(`${API_URL}/api/complaint/create`,
                complaintData,
                {
                    withCredentials: true
                }
            )
            toast.success(response.data.message)
            navigate('/customer/dashboard')
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-10">
            <div className="mx-auto max-w-2xl">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="page-title">
                        Submit a Complaint
                    </h1>

                    <p className="page-description">
                        Tell us about your problem and provide the service location.
                    </p>
                </div>

                {/* Form */}
                <div className="card">
                    <form onSubmit={submitForm} className="space-y-6">

                        {/* Problem */}
                        <div>
                            <label className="label">
                                Problem
                            </label>

                            <textarea
                                value={problem}
                                onChange={(e) => setProblem(e.target.value)}
                                placeholder="Describe the problem you are experiencing..."
                                rows="5"
                                className="input resize-none"
                                disabled={loading}
                                required
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <h2 className="section-title mb-4">
                                Service Location
                            </h2>

                            <div className="space-y-5">

                                {/* Address */}
                                <div>
                                    <label className="label">
                                        Address
                                    </label>

                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Enter your complete address"
                                        className="input"
                                        disabled={loading}
                                        required
                                    />
                                </div>

                                {/* City */}
                                <div>
                                    <label className="label">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="Enter your city"
                                        className="input"
                                        disabled={loading}
                                        required
                                    />
                                </div>

                                {/* Latitude and Longitude */}
                                <div className="grid gap-5 sm:grid-cols-2">

                                    <div>
                                        <label className="label">
                                            Street
                                        </label>

                                        <input
                                            type="text"
                                            step="any"
                                            value={street}
                                            onChange={(e) => setLatitude(e.target.value)}
                                            placeholder="B-12"
                                            className="input"
                                            disabled={loading}
                                        />
                                    </div>

                                    <div>
                                        <label className="label">
                                            House Number
                                        </label>

                                        <input
                                            type="text"
                                            step="any"
                                            value={houseNumber}
                                            onChange={(e) => setLongitude(e.target.value)}
                                            placeholder="1223"
                                            className="input"
                                            disabled={loading}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Urgency */}
                        <div>
                            <label className="label">
                                Urgency
                            </label>

                            <select
                                value={urgency}
                                onChange={(e) => setUrgency(e.target.value)}
                                className="input"
                                disabled={loading}
                            >
                                <option value="normal">
                                    Normal
                                </option>

                                <option value="urgent">
                                    Urgent
                                </option>

                            </select>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? (
                                <>
                                    <Loader size="sm" color="white" />
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                "Submit Complaint"
                            )}
                        </button>

                    </form>
                </div>

                {/* Back */}
                <div className="mt-6 text-center">
                    <button
                        type="button"
                        onClick={() => navigate("/customer/dashboard")}
                        className="text-sm font-medium text-orange-600 hover:text-orange-700"
                    >
                        ← Back to Dashboard
                    </button>
                </div>

            </div>
        </div>
    )
}

export default RegisterComplaint