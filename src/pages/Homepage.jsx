import { Link } from 'react-router'

const Home = () => {
    const services = [
        {
            title: "AC Repair",
            description:
                "Professional AC inspection, repair, maintenance, and cooling solutions.",
            image: "/AC.png",
            price: "From Rs. 1,500",
        },
        {
            title: "Refrigerator Repair",
            description:
                "Fast refrigerator diagnosis and repair by experienced technicians.",
            image: "/Refrigerator.png",
            price: "From Rs. 1,200",
        },
        {
            title: "TV Repair",
            description:
                "Professional TV troubleshooting and repair for common display and hardware issues.",
            image: "Tv.png",
            price: "From Rs. 1,000",
        },
        {
            title: "Washing Machine",
            description:
                "Reliable washing machine repair and maintenance for all common problems.",
            image: "/WashingMechine.png",
            price: "From Rs. 1,300",
        },
    ];

    const steps = [
        {
            number: "01",
            title: "Submit a Request",
            description:
                "Tell us what problem you are facing and provide the required service details.",
        },
        {
            number: "02",
            title: "Request Review",
            description:
                "Our admin team reviews your request and identifies the right service.",
        },
        {
            number: "03",
            title: "Technician Assigned",
            description:
                "A suitable technician is assigned to handle your service request.",
        },
        {
            number: "04",
            title: "Service & Report",
            description:
                "The technician completes the work and provides a detailed service report.",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* ================= NAVBAR ================= */}

            <nav className="bg-orange-600 text-white">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    {/* Logo */}

                    <a href="/" className="text-2xl font-bold tracking-tight">
                        Field Flow
                    </a>

                    {/* Desktop Navigation */}

                    <div className="flex items-center gap-3">
                        <Link
                            to={"/customer/login"}
                            className="rounded-xl px-5 py-2.5 font-medium transition hover:bg-orange-700"
                        >
                            Login
                        </Link>

                        <Link
                            to={"/customer/register"}
                            className="rounded-xl bg-white px-5 py-2.5 font-semibold text-orange-600 transition hover:bg-orange-50"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ================= HERO ================= */}

            <section className="overflow-hidden bg-white">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
                    {/* Hero Text */}

                    <div>
                        <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                            Reliable Home & Appliance Services
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Professional Service,
                            <span className="block text-orange-600">
                                Right When You Need It.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Field Flow connects you with skilled technicians who can
                            diagnose, repair, and maintain your appliances with reliable
                            service and transparent pricing.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to={"/customer/register"}
                                className="rounded-xl bg-orange-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-orange-700"
                            >
                                Request a Service
                            </Link>

                            <a
                                href="#services"
                                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
                            >
                                Explore Services
                            </a>
                        </div>

                        {/* Small stats */}

                        <div className="mt-10 flex flex-wrap gap-8">
                            <div>
                                <p className="text-2xl font-bold text-slate-900">1,200+</p>
                                <p className="text-sm text-slate-500">Services Completed</p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-slate-900">25+</p>
                                <p className="text-sm text-slate-500">Skilled Technicians</p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-slate-900">4.8/5</p>
                                <p className="text-sm text-slate-500">Customer Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}

                    <div className="relative">
                        <div className="overflow-hidden rounded-3xl">
                            <img
                                src="/Hero.jpg"
                                alt="Technician working on a repair"
                                className="h-125 w-full object-cover"
                            />
                        </div>

                        {/* Floating card */}

                        <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-lg">
                                    ✓
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-900">
                                        Trusted Service
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        Skilled & verified technicians
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}

            <section id="services" className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-semibold text-orange-600">
                            Our Services
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                            We Take Care of Your Appliances
                        </h2>

                        <p className="mt-4 text-slate-600">
                            From quick repairs to complete maintenance, our technicians
                            are ready to solve your everyday appliance problems.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-48 w-full object-cover"
                                />

                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {service.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {service.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between">
                                        <span className="font-semibold text-orange-600">
                                            {service.price}
                                        </span>

                                        <a
                                            href="/register"
                                            className="text-sm font-semibold text-slate-700 transition hover:text-orange-600"
                                        >
                                            Get Service →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600">
                            View All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= WHY FIELD FLOW ================= */}

            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="font-semibold text-orange-600">
                                Why Field Flow?
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                                Service You Can Depend On
                            </h2>

                            <p className="mt-5 leading-7 text-slate-600">
                                We make appliance repair simple. From submitting your
                                request to receiving your final service report, everything
                                is organized through one platform.
                            </p>

                            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                <div className="rounded-xl bg-slate-50 p-5">
                                    <div className="text-2xl">🛠️</div>

                                    <h3 className="mt-3 font-bold text-slate-900">
                                        Skilled Technicians
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Experienced technicians with practical repair skills.
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-5">
                                    <div className="text-2xl">⚡</div>

                                    <h3 className="mt-3 font-bold text-slate-900">
                                        Quick Response
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Get your service request reviewed quickly.
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-5">
                                    <div className="text-2xl">💰</div>

                                    <h3 className="mt-3 font-bold text-slate-900">
                                        Transparent Pricing
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Clear service reports and pricing information.
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-5">
                                    <div className="text-2xl">⭐</div>

                                    <h3 className="mt-3 font-bold text-slate-900">
                                        Customer Satisfaction
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Quality service focused on customer satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                                alt="Professional technician"
                                className="h-130 w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATISTICS ================= */}

            <section className="bg-orange-600 py-16 text-white">
                <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="text-4xl font-bold">1,200+</p>
                        <p className="mt-2 text-orange-100">Services Completed</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold">25+</p>
                        <p className="mt-2 text-orange-100">Professional Technicians</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold">500+</p>
                        <p className="mt-2 text-orange-100">Happy Customers</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold">4.8/5</p>
                        <p className="mt-2 text-orange-100">Average Rating</p>
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}

            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-semibold text-orange-600">
                            How It Works
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Getting a Service Is Simple
                        </h2>

                        <p className="mt-4 text-slate-600">
                            From your first request to the final report, Field Flow
                            keeps everything organized.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div key={step.number} className="relative">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                                    {step.number}
                                </div>

                                <h3 className="text-lg font-bold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PRICING ================= */}

            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-semibold text-orange-600">
                            Popular Services
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Simple & Transparent Pricing
                        </h2>

                        <p className="mt-4 text-slate-600">
                            Starting prices for some of our most requested services.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 p-7">
                            <h3 className="text-xl font-bold text-slate-900">
                                AC Service
                            </h3>

                            <p className="mt-3 text-sm text-slate-500">
                                Inspection and basic AC repair.
                            </p>

                            <p className="mt-6 text-3xl font-bold text-orange-600">
                                Rs. 1,500+
                            </p>

                            <button className="mt-6 w-full rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700">
                                Request Service
                            </button>
                        </div>

                        <div className="rounded-2xl border-2 border-orange-500 p-7 shadow-lg">
                            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                                Popular
                            </span>

                            <h3 className="mt-4 text-xl font-bold text-slate-900">
                                Refrigerator Repair
                            </h3>

                            <p className="mt-3 text-sm text-slate-500">
                                Diagnosis and common refrigerator repairs.
                            </p>

                            <p className="mt-6 text-3xl font-bold text-orange-600">
                                Rs. 1,200+
                            </p>

                            <button className="mt-6 w-full rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700">
                                Request Service
                            </button>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-7">
                            <h3 className="text-xl font-bold text-slate-900">
                                TV Repair
                            </h3>

                            <p className="mt-3 text-sm text-slate-500">
                                TV diagnosis and basic hardware troubleshooting.
                            </p>

                            <p className="mt-6 text-3xl font-bold text-orange-600">
                                Rs. 1,000+
                            </p>

                            <button className="mt-6 w-full rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700">
                                Request Service
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}

            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-semibold text-orange-600">
                            Customer Reviews
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900">
                            What Our Customers Say
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                name: "Ahmed Khan",
                                review:
                                    "The technician arrived quickly and fixed my AC problem. The whole process was very smooth.",
                            },
                            {
                                name: "Sara Ali",
                                review:
                                    "I really liked being able to see the service report and complete cost after the repair.",
                            },
                            {
                                name: "Usman Raza",
                                review:
                                    "Professional service and very helpful technician. I would definitely use Field Flow again.",
                            },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <div className="text-lg text-orange-500">
                                    ★★★★★
                                </div>

                                <p className="mt-4 leading-7 text-slate-600">
                                    "{item.review}"
                                </p>

                                <p className="mt-5 font-semibold text-slate-900">
                                    {item.name}
                                </p>

                                <p className="text-sm text-slate-500">
                                    Verified Customer
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}

            <section className="bg-white py-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-orange-600 px-6 py-14 text-center text-white sm:px-12">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Have a Problem? Let Us Handle It.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-orange-100">
                        Submit your service request today and let our skilled
                        technicians take care of the rest.
                    </p>

                    <Link
                        to={"/customer/register"}
                        className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-orange-600 transition hover:bg-orange-50"
                    >
                        Request a Service
                    </Link>
                </div>
            </section>

            {/* ================= FOOTER ================= */}

            <footer className="bg-slate-950 text-slate-400">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Field Flow
                        </h2>

                        <p className="mt-4 text-sm leading-6">
                            Reliable appliance repair and maintenance services
                            connecting customers with skilled technicians.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white">
                            Services
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>AC Repair</li>
                            <li>Refrigerator Repair</li>
                            <li>TV Repair</li>
                            <li>Washing Machine Repair</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white">
                            Company
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>About Us</li>
                            <li>How It Works</li>
                            <li>Contact</li>
                            <li>Customer Reviews</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white">
                            Account
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>Login</li>
                            <li>Register</li>
                            <li>My Requests</li>
                            <li>Service Reports</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800">
                    <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm">
                        © 2026 Field Flow. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;