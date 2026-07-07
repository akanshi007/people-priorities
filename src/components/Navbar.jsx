import { Link, NavLink } from "react-router-dom";
import { Home, Users, BarChart3 } from "lucide-react";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}

                <Link
                    to="/"
                    className="flex items-center gap-3"
                >

                    <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">

                        PP

                    </div>

                    <div>

                        <h1 className="text-xl font-bold text-slate-900">
                            People's Priorities
                        </h1>

                        <p className="text-sm text-slate-500">
                            AI-Powered Citizen Complaint Portal
                        </p>

                    </div>

                </Link>

                {/* Navigation */}

                <div className="flex items-center gap-8">

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-medium transition-all duration-300 ${
                                isActive
                                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                    : "text-slate-700 hover:text-blue-700"
                            }`
                        }
                    >
                        <Home size={18} />
                        Home
                    </NavLink>

                    <NavLink
                        to="/citizen"
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-medium transition-all duration-300 ${
                                isActive
                                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                    : "text-slate-700 hover:text-blue-700"
                            }`
                        }
                    >
                        <Users size={18} />
                        Citizen Portal
                    </NavLink>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-medium transition-all duration-300 ${
                                isActive
                                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                                    : "text-slate-700 hover:text-blue-700"
                            }`
                        }
                    >
                        <BarChart3 size={18} />
                        Dashboard
                    </NavLink>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;