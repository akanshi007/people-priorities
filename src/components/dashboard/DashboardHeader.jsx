function DashboardHeader() {
    return (
        <div
            className="
                mb-10
                rounded-3xl
                bg-gradient-to-r
                from-blue-700
                via-indigo-700
                to-cyan-600
                text-white
                shadow-2xl
                overflow-hidden
                relative
            "
        >
            {/* Decorative Blur */}

            <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

            <div className="relative p-8">

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">

                    <div>

                        <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                            📊 AI Powered Analytics
                        </span>

                        <h1 className="text-5xl font-extrabold tracking-tight">
                            MP Analytics Dashboard
                        </h1>

                        <p className="mt-4 text-blue-100 text-lg max-w-2xl">
                            Monitor citizen complaints, identify priority issues,
                            analyze trends and make data-driven decisions using AI.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 min-w-[160px]">

                            <p className="text-sm text-blue-100">
                                📅 Today
                            </p>

                            <p className="font-semibold mt-1">
                                {new Date().toLocaleDateString()}
                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">

                            <p className="text-sm text-blue-100">
                                Status
                            </p>

                            <p className="font-semibold mt-1 text-green-300">
                                🟢 Online
                            </p>

                        </div>

                        <button
                            onClick={() => window.location.reload()}
                            className="
                                bg-white
                                text-blue-700
                                font-semibold
                                rounded-xl
                                py-3
                                hover:scale-105
                                transition
                            "
                        >
                            🔄 Refresh
                        </button>

                        <button
                            className="
                                bg-cyan-500
                                hover:bg-cyan-400
                                font-semibold
                                rounded-xl
                                py-3
                                transition
                            "
                        >
                            📄 Report
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DashboardHeader;