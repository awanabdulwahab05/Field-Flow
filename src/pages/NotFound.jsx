import { useNavigate } from 'react-router'
import { Home, ArrowLeft, SearchX } from 'lucide-react'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
            <div className="w-full max-w-lg text-center">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100">
                    <SearchX className="h-10 w-10 text-orange-600" />
                </div>

                <h1 className="text-8xl font-extrabold tracking-tight text-orange-600">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-3 max-w-sm leading-7 text-slate-500">
                    Oops! The page you're looking for doesn't exist,
                    may have been moved, or the URL is incorrect.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn-secondary inline-flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                        <Home size={18} />
                        Back to Home
                    </button>
                </div>

                <p className="mt-10 text-sm font-medium text-slate-400">
                    Field Flow · Home Services Made Easier
                </p>
            </div>
        </div>
    )
}

export default NotFound