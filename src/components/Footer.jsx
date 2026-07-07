import { Link } from "react-router-dom";
import { Mail, Globe, Home, Users, BarChart3 } from "lucide-react";

function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-200 bg-white">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Brand */}

                    <div>

                        <h2 className="text-2xl font-bold text-blue-700">
                            People's Priorities
                        </h2>

                        <p className="mt-4 text-slate-600 leading-7">
                            An AI-powered citizen complaint management platform
                            that helps public representatives identify,
                            prioritize, and resolve constituency issues through
                            intelligent analytics.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-5">
                            Quick Links
                        </h3>

                        <div className="space-y-4">

                            <Link
                                to="/"
                                className="flex items-center gap-2 text-slate-600 hover:text-blue-700 transition"
                            >
                                <Home size={18} />
                                Home
                            </Link>

                            <Link
                                to="/citizen"
                                className="flex items-center gap-2 text-slate-600 hover:text-blue-700 transition"
                            >
                                <Users size={18} />
                                Citizen Portal
                            </Link>

                            <Link
                                to="/dashboard"
                                className="flex items-center gap-2 text-slate-600 hover:text-blue-700 transition"
                            >
                                <BarChart3 size={18} />
                                Dashboard
                            </Link>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-lg font-semibold text-slate-900 mb-5">
                            Contact
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3 text-slate-600">

                                <Mail
                                    size={18}
                                    className="text-blue-700"
                                />

                                <span>
                                    support@peoplespriorities.in
                                </span>

                            </div>

                            <div className="flex items-center gap-3 text-slate-600">

                                <Globe
                                    size={18}
                                    className="text-blue-700"
                                />

                                <span>
                                    www.peoplespriorities.in
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-12 border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-slate-500 text-sm text-center md:text-left">

                        © {new Date().getFullYear()} People's Priorities.
                        All Rights Reserved.

                    </p>

                    <p className="text-slate-500 text-sm mt-3 md:mt-0">

                        Built with ❤️ using React, Tailwind CSS & Gemini AI

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;