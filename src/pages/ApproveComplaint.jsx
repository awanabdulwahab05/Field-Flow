import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'sonner'
import Loader from '../components/Loader'

const API_URL = import.meta.env.VITE_API_URL

const ApproveComplaint = () => {
    const { complaintId } = useParams()
    const navigate = useNavigate()

    const [technicians, setTechnicians] = useState([])
    const [techniciansId, setTechniciansId] = useState('')
    const [loading, setLoading] = useState(false)
    const [fetchingTechnicians, setFetchingTechnicians] = useState(true)

    // Get Technicians
    useEffect(() => {
        const getTechnicians = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/api/admin/get-technicians`,
                    { withCredentials: true }
                )

                setTechnicians(response.data.technicians)
            } catch (error) {
                toast.error(
                    error.response?.data?.message ||
                    'Failed to fetch technicians'
                )
            } finally {
                setFetchingTechnicians(false)
            }
        }

        getTechnicians()
    }, [])

    const submitForm = async (e) => {
        e.preventDefault()

        if (!techniciansId) {
            toast.error('Please select a technician')
            return
        }

        setLoading(true)

        try {
            const response = await axios.patch(
                `${API_URL}/api/admin/${complaintId}/approve`,
                { technicianId: techniciansId },
                { withCredentials: true }
            )

            toast.success(
                response.data.message || 'Complaint approved successfully'
            )

            navigate('/admin/complaints')
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                'Failed to approve complaint'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="page-container max-w-2xl">
            <div className="mb-8">
                <h1 className="page-title">Approve Complaint</h1>
                <p className="page-description">
                    Select a technician to assign to this complaint.
                </p>
            </div>

            <form onSubmit={submitForm} className="card space-y-6">
                <div>
                    <label className="label">
                        Complaint ID
                    </label>

                    <input
                        type="text"
                        value={complaintId || ''}
                        readOnly
                        className="input bg-slate-50"
                    />
                </div>

                <div>
                    <label htmlFor="technician" className="label">
                        Select Technician
                    </label>

                    {fetchingTechnicians ? (
                        <div className="flex items-center gap-3 py-3">
                            <Loader />
                            <span className="text-sm text-slate-500">
                                Loading technicians...
                            </span>
                        </div>
                    ) : technicians.length === 0 ? (
                        <p className="text-sm text-red-600">
                            No technicians available.
                        </p>
                    ) : (
                        <select
                            id="technician"
                            value={techniciansId}
                            onChange={(e) =>
                                setTechniciansId(e.target.value)
                            }
                            className="input"
                            required
                        >
                            <option value="">
                                Choose a technician
                            </option>

                            {technicians.map((technician) => (
                                <option
                                    key={technician._id}
                                    value={technician._id}
                                >
                                    {technician.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                        type="submit"
                        disabled={
                            loading ||
                            fetchingTechnicians ||
                            technicians.length === 0
                        }
                        className="btn-primary flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? (
                            <>
                                <Loader color="white" size="sm" />
                                Approving...
                            </>
                        ) : (
                            'Approve Complaint'
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/admin/complaints')}
                        className="btn-secondary"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ApproveComplaint
