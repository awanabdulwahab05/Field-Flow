import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import Loader from '../components/Loader'

const API_URL = import.meta.env.VITE_API_URL

const Report = () => {
    const [reports, setReports] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getReport = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/api/customer/report`,
                    { withCredentials: true }
                )

                setReports(response.data.reports || [])
            } catch (error) {
                console.log(error)
                toast.error(
                    error.response?.data?.message ||
                    'Failed to fetch service reports'
                )
            } finally {
                setLoading(false)
            }
        }

        getReport()
    }, [])

    if (loading) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <Loader size="lg" />
            </div>
        )
    }

    if (reports.length === 0) {
        return (
            <div className="page-container">
                <h1 className="page-title">My Service Reports</h1>
                <div className="card mt-8 py-12 text-center">
                    <div className="mb-4 text-4xl">📋</div>
                    <h2 className="section-title">No Reports Yet</h2>
                    <p className="mt-2 text-slate-500">
                        Your completed service reports will appear here.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="page-container">
            <div className="mb-8">
                <h1 className="page-title">My Service Reports</h1>
                <p className="page-description">
                    View your completed services, repair details, and costs.
                </p>
            </div>

            <div className="space-y-8">
                {reports.map((report) => (
                    <div key={report._id} className="card">
                        {/* Report Header */}
                        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
                            <div>
                                <p className="text-sm text-slate-500">
                                    Service Report ID
                                </p>
                                <p className="mt-1 break-all font-mono text-sm font-medium text-slate-700">
                                    {report._id}
                                </p>
                            </div>

                            <span className="status-completed w-fit">
                                {report.status || 'completed'}
                            </span>
                        </div>

                        {/* Problem and Location */}
                        <div className="mt-6 grid gap-6 sm:grid-cols-2">
                            <div>
                                <p className="text-sm text-slate-500">
                                    Reported Problem
                                </p>
                                <h2 className="mt-1 text-lg font-semibold text-slate-900">
                                    {report.problem || 'Not specified'}
                                </h2>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Service Location
                                </p>
                                <p className="mt-1 font-medium text-slate-800">
                                    {report.location?.address || 'N/A'}
                                </p>
                                <p className="text-sm text-slate-500">
                                    {report.location?.city || ''}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Urgency
                                </p>
                                <span
                                    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${report.urgency === 'emergency'
                                            ? 'bg-red-100 text-red-700'
                                            : report.urgency === 'urgent'
                                                ? 'bg-amber-100 text-amber-700'
                                                : 'bg-green-100 text-green-700'
                                        }`}
                                >
                                    {report.urgency || 'normal'}
                                </span>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Service Date
                                </p>
                                <p className="mt-1 font-medium text-slate-800">
                                    {report.updatedAt
                                        ? new Date(
                                            report.updatedAt
                                        ).toLocaleDateString('en-PK', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })
                                        : 'N/A'}
                                </p>
                            </div>
                        </div>

                        {/* Technician Report */}
                        <div className="mt-8">
                            <h2 className="section-title">
                                Technician's Report
                            </h2>

                            <div className="mt-4 space-y-5">
                                <div className="rounded-xl bg-slate-50 p-4">
                                    <p className="text-sm font-semibold text-slate-500">
                                        Diagnosis
                                    </p>
                                    <p className="mt-2 leading-7 text-slate-800">
                                        {report.diagnosis || 'Not provided'}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-4">
                                    <p className="text-sm font-semibold text-slate-500">
                                        Work Performed
                                    </p>
                                    <p className="mt-2 leading-7 text-slate-800">
                                        {report.workDescription || 'Not provided'}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-4">
                                    <p className="text-sm font-semibold text-slate-500">
                                        Technician Notes
                                    </p>
                                    <p className="mt-2 leading-7 text-slate-800">
                                        {report.technicianNotes || 'No additional notes'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Parts Used */}
                        <div className="mt-8">
                            <h2 className="section-title">Parts Used</h2>

                            {report.partsUsed?.length > 0 ? (
                                <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                                    <table className="w-full min-w-[420px] text-left text-sm">
                                        <thead className="bg-slate-50 text-slate-600">
                                            <tr>
                                                <th className="px-4 py-3 font-semibold">
                                                    Part
                                                </th>
                                                <th className="px-4 py-3 font-semibold">
                                                    Quantity
                                                </th>
                                                <th className="px-4 py-3 text-right font-semibold">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-slate-200">
                                            {report.partsUsed.map((part) => (
                                                <tr key={part._id}>
                                                    <td className="px-4 py-3 text-slate-800">
                                                        {part.name}
                                                    </td>
                                                    <td className="px-4 py-3 text-slate-600">
                                                        {part.quantity}
                                                    </td>
                                                    <td className="px-4 py-3 text-right font-medium text-slate-800">
                                                        Rs. {Number(part.price || 0).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p className="mt-3 text-sm text-slate-500">
                                    No replacement parts were recorded.
                                </p>
                            )}
                        </div>

                        {/* Cost Summary */}
                        <div className="mt-8 rounded-xl border border-orange-100 bg-orange-50 p-5">
                            <h2 className="section-title">
                                Cost Summary
                            </h2>

                            <div className="mt-4 space-y-3">
                                <div className="flex items-center justify-between gap-4 text-slate-600">
                                    <span>Parts Cost</span>
                                    <span className="font-medium text-slate-800">
                                        Rs. {Number(
                                            report.partsUsed?.reduce(
                                                (total, part) =>
                                                    total +
                                                    Number(part.price || 0),
                                                0
                                            ) || 0
                                        ).toLocaleString()}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 text-slate-600">
                                    <span>Labor Cost</span>
                                    <span className="font-medium text-slate-800">
                                        Rs. {Number(
                                            report.laborCost || 0
                                        ).toLocaleString()}
                                    </span>
                                </div>

                                <div className="border-t border-orange-200 pt-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-bold text-slate-900">
                                            Total Cost
                                        </span>
                                        <span className="text-2xl font-bold text-orange-600">
                                            Rs. {Number(
                                                report.totalCost || 0
                                            ).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Report