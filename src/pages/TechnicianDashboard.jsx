import { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import Loader from "../components/Loader"

const API_URL = import.meta.env.VITE_API_URL

const TechnicianDashboard = () => {
  const [complaints, setComplaints] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const getComplaints = async () => {
      setLoading(true)

      try {
        const response = await axios.get(
          `${API_URL}/api/technician/complaints`,
          { withCredentials: true }
        )
        console.log(response.data.Complaints)

        setComplaints(response.data.Complaints)
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
          "Something went wrong"
        )
      } finally {
        setLoading(false)
      }
    }

    getComplaints()
  }, [])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-PK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader size="lg" />
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="page-container">

        {/* Header */}
        <div className="mb-8">
          <h1 className="page-title">
            All Complaints
          </h1>

          <p className="page-description">
            Review customer complaints and approve service requests.
          </p>
        </div>

        {/* Complaint count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="section-title">
            Customer Complaints
          </h2>

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            {complaints.length} Total
          </span>
        </div>

        {/* Empty state */}
        {complaints.length === 0 ? (
          <div className="card py-12 text-center">
            <h3 className="text-lg font-semibold text-slate-800">
              No complaints found
            </h3>

            <p className="mt-2 text-slate-500">
              There are no customer complaints to review right now.
            </p>
          </div>
        ) : (

          /* Complaint cards */
          <div className="grid gap-6 lg:grid-cols-2">
            {complaints.map((complaint) => (
              <div
                key={complaint._id}
                className="card transition hover:shadow-md"
              >

                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Complaint ID
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-slate-700">
                      {complaint._id}
                    </p>
                  </div>

                  <span
                    className={
                      complaint.urgency === "emergency"
                        ? "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold capitalize text-red-700"
                        : complaint.urgency === "urgent"
                          ? "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold capitalize text-amber-700"
                          : "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold capitalize text-green-700"
                    }
                  >
                    {complaint.urgency}
                  </span>
                </div>

                {/* Customer */}
                <div className="mt-6 border-b border-slate-100 pb-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {complaint.customer?.name || "Unknown Customer"}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {complaint.customer?.email || "No email available"}
                  </p>
                </div>

                {/* Problem */}
                <div className="py-5">
                  <h4 className="mb-2 text-sm font-semibold text-slate-700">
                    Reported Problem
                  </h4>

                  <p className="text-sm leading-6 text-slate-600">
                    {complaint.problem}
                  </p>
                </div>

                {/* Location */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-slate-700">
                    Service Location
                  </h4>

                  <p className="text-sm text-slate-600">
                    {complaint.location?.address}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {complaint.location?.city}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    Coordinates:{" "}
                    {complaint.location?.latitude},{" "}
                    {complaint.location?.longitude}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs text-slate-400">
                      Submitted on
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {formatDate(complaint.createdAt)}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/technician/${complaint._id}`)
                    }
                    className="btn-primary w-full sm:w-auto"
                  >
                    Approve Complaint
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default TechnicianDashboard
