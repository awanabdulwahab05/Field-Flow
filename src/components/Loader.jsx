const Loader = ({ size = "md", color = "orange" }) => {
    const sizes = {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-3",
        lg: "h-10 w-10 border-4",
    }

    const colors = {
        orange: "border-slate-200 border-t-orange-600",
        white: "border-white/40 border-t-white",
    }

    return (
        <div
            className={`${sizes[size]} ${colors[color]} animate-spin rounded-full`}
        />
    )
}

export default Loader