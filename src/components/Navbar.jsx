import { Link } from "react-router-dom";
import { Home, Users, BarChart3 } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">

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

          <Link
            to="/"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-700 font-medium transition"
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            to="/citizen"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-700 font-medium transition"
          >
            <Users size={18} />
            Citizen Portal
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-700 font-medium transition"
          >
            <BarChart3 size={18} />
            Dashboard
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;