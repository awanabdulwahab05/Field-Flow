import React from "react";

const Navbar = () => {
    return (
        <nav className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div>
                    <h1 className="text-xl font-bold text-orange-600">
                        Field Flow
                    </h1>
                </div>

                {/* Navigation Links */}
                <div className="hidden items-center gap-7 md:flex">
                    <a
                        href="#"
                        className="font-medium text-orange-600"
                    >
                        Dashboard
                    </a>

                    <a
                        href="#"
                        className="font-medium text-slate-600 transition hover:text-orange-600"
                    >
                        Requests
                    </a>

                    <a
                        href="#"
                        className="font-medium text-slate-600 transition hover:text-orange-600"
                    >
                        Reports
                    </a>
                </div>

                {/* User */}
                <div className="flex items-center gap-3">
                    <div className="hidden text-right sm:block">
                        <p className="text-sm font-semibold text-slate-800">
                            Abdul Wahab
                        </p>

                        <p className="text-xs text-slate-500">
                            Customer
                        </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-600">
                        AW
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;