
import React, { useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { toast } from 'sonner'
const API_URL = import.meta.env.VITE_API_URL


const UpdateComplaints = () => {
    const [formData, setFormData] = useState({
        diagnosis: '',
        workDescription: '',
        partsUsed: [
            {
                name: '',
                quantity: 1,
                price: 0
            }
        ],
        laborCost: '',
        technicianNotes: '',
        status: 'assigned'
    })

    const [loading, setLoading] = useState(false)

    const { complaintId } = useParams()

    // Calculate total cost of all parts
    const partsCost = formData.partsUsed.reduce(
        (total, part) =>
            total +
            (Number(part.quantity) || 0) *
            (Number(part.price) || 0),
        0
    )

    const totalCost = partsCost + (Number(formData.laborCost) || 0)

    // Handle text inputs and dropdown
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Handle parts inputs
    const handlePartChange = (index, field, value) => {
        setFormData((prev) => ({
            ...prev,
            partsUsed: prev.partsUsed.map((part, i) =>
                i === index
                    ? { ...part, [field]: value }
                    : part
            )
        }))
    }

    // Add another part
    const addPart = () => {
        setFormData((prev) => ({
            ...prev,
            partsUsed: [
                ...prev.partsUsed,
                { name: '', quantity: 1, price: 0 }
            ]
        }))
    }

    // Remove a part
    const removePart = (index) => {
        setFormData((prev) => ({
            ...prev,
            partsUsed: prev.partsUsed.filter(
                (_, i) => i !== index
            )
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        try {
            const response = await axios.patch(
                `${API_URL}/api/technician/${complaintId}`,
                {
                    ...formData,
                    partsUsed: formData.partsUsed.map((part) => ({
                        ...part,
                        quantity: Number(part.quantity),
                        price: Number(part.price)
                    })),
                    laborCost: Number(formData.laborCost),
                    totalCost
                },
                { withCredentials: true }
            )
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }

        console.log({
            ...formData,
            laborCost: Number(formData.laborCost),
            totalCost
        })
    }

    const inputClass =
        'w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'

    const labelClass =
        'mb-2 block text-sm font-medium text-slate-300'

    return (
        <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">

                {/* Page heading */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-400">
                        Field Flow / Technician
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Service Report
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        Record your diagnosis, repair work, parts,
                        and final service cost.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Diagnosis */}
                    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7">
                        <h2 className="mb-5 text-lg font-semibold">
                            <span className="mr-2 text-orange-400">01.</span>
                            Diagnosis & Repair
                        </h2>

                        <div className="space-y-5">
                            <div>
                                <label className={labelClass}>
                                    Diagnosis
                                </label>

                                <textarea
                                    name="diagnosis"
                                    value={formData.diagnosis}
                                    onChange={handleChange}
                                    placeholder="Describe the issue you identified..."
                                    rows={3}
                                    required
                                    className={inputClass + ' resize-y'}
                                />
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Work Description
                                </label>

                                <textarea
                                    name="workDescription"
                                    value={formData.workDescription}
                                    onChange={handleChange}
                                    placeholder="Describe the repair work you completed..."
                                    rows={4}
                                    required
                                    className={inputClass + ' resize-y'}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Parts used */}
                    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7">
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <h2 className="text-lg font-semibold">
                                <span className="mr-2 text-orange-400">02.</span>
                                Parts Used
                            </h2>

                            <button
                                type="button"
                                onClick={addPart}
                                className="rounded-lg border border-orange-500/30 px-3 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-500/10"
                            >
                                + Add Part
                            </button>
                        </div>

                        <div className="space-y-4">
                            {formData.partsUsed.map((part, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-300">
                                            Part {index + 1}
                                        </span>

                                        {formData.partsUsed.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removePart(index)}
                                                className="text-xs text-red-400 hover:text-red-300"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-3">
                                        <div className="sm:col-span-3">
                                            <label className={labelClass}>
                                                Part Name
                                            </label>

                                            <input
                                                type="text"
                                                value={part.name}
                                                onChange={(e) =>
                                                    handlePartChange(
                                                        index,
                                                        'name',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g. AC capacitor"
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>
                                                Quantity
                                            </label>

                                            <input
                                                type="number"
                                                min="1"
                                                step="1"
                                                value={part.quantity}
                                                onChange={(e) =>
                                                    handlePartChange(
                                                        index,
                                                        'quantity',
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>
                                                Price per unit (PKR)
                                            </label>

                                            <input
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={part.price}
                                                onChange={(e) =>
                                                    handlePartChange(
                                                        index,
                                                        'price',
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className={inputClass}
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>
                                                Part Total
                                            </label>

                                            <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-orange-400">
                                                PKR {((
                                                    Number(part.quantity) || 0
                                                ) * (
                                                        Number(part.price) || 0
                                                    )).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Cost and status */}
                    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7">
                        <h2 className="mb-5 text-lg font-semibold">
                            <span className="mr-2 text-orange-400">03.</span>
                            Cost & Status
                        </h2>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label className={labelClass}>
                                    Labor Cost (PKR)
                                </label>

                                <input
                                    type="number"
                                    name="laborCost"
                                    min="0"
                                    step="0.01"
                                    value={formData.laborCost}
                                    onChange={handleChange}
                                    placeholder="0"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Service Status
                                </label>

                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                >
                                    <option value="assigned">
                                        Assigned
                                    </option>
                                    <option value="rejected">
                                        Rejected
                                    </option>
                                    <option value="working">
                                        Working
                                    </option>
                                    <option value="completed">
                                        Completed
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Total cost preview */}
                        <div className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
                            <p className="text-sm text-slate-400">
                                Estimated Total Cost
                            </p>

                            <p className="mt-2 text-3xl font-bold text-orange-400">
                                PKR {totalCost.toLocaleString()}
                            </p>

                            <p className="mt-2 text-xs text-slate-500">
                                Parts: PKR {partsCost.toLocaleString()}
                                {' + '}
                                Labor: PKR {(
                                    Number(formData.laborCost) || 0
                                ).toLocaleString()}
                            </p>
                        </div>
                    </section>

                    {/* Technician notes */}
                    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7">
                        <h2 className="mb-5 text-lg font-semibold">
                            <span className="mr-2 text-orange-400">04.</span>
                            Additional Notes
                        </h2>

                        <label className={labelClass}>
                            Technician Notes
                        </label>

                        <textarea
                            name="technicianNotes"
                            value={formData.technicianNotes}
                            onChange={handleChange}
                            placeholder="Add recommendations or notes for the customer..."
                            rows={4}
                            className={inputClass + ' resize-y'}
                        />
                    </section>

                    {/* Submit */}
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-900"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? 'Saving Report...' : 'Save Service Report'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateComplaints
