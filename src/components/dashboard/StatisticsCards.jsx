import {
    FileText,
    AlertTriangle,
    Building2,
    CalendarDays,
} from "lucide-react";

function StatisticsCards({ complaints }) {

    const totalComplaints = complaints.length;

    const highPriority = complaints.filter(
        c => c.priority >= 4
    ).length;

    const departments = new Set(
        complaints.map(c => c.department)
    ).size;

    const todaysReports = complaints.length;

    return (

        <div className="grid md:grid-cols-4 gap-6 mb-12">

            {/* Total Complaints */}

            <div
                className="
                    bg-gradient-to-br
                    from-white
                    to-blue-50
                    rounded-3xl
                    border-t-4
                    border-blue-600
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    p-7
                "
            >

                <div className="flex justify-between items-start">

                    <div>

                        <p className="text-slate-500">
                            Total Complaints
                        </p>

                        <h2 className="text-5xl font-bold text-slate-900 mt-3">
                            {totalComplaints}
                        </h2>

                        <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            ▲ Live Data
                        </span>

                    </div>

                    <div className="bg-blue-100 p-4 rounded-2xl">

                        <FileText
                            size={32}
                            className="text-blue-700"
                        />

                    </div>

                </div>

            </div>

            {/* High Priority */}

            <div
                className="
                    bg-gradient-to-br
                    from-white
                    to-red-50
                    rounded-3xl
                    border-t-4
                    border-red-500
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    p-7
                "
            >

                <div className="flex justify-between items-start">

                    <div>

                        <p className="text-slate-500">
                            High Priority
                        </p>

                        <h2 className="text-5xl font-bold text-red-600 mt-3">
                            {highPriority}
                        </h2>

                        <span className="inline-block mt-4 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                            🚨 Urgent
                        </span>

                    </div>

                    <div className="bg-red-100 p-4 rounded-2xl">

                        <AlertTriangle
                            size={32}
                            className="text-red-600"
                        />

                    </div>

                </div>

            </div>

            {/* Departments */}

            <div
                className="
                    bg-gradient-to-br
                    from-white
                    to-green-50
                    rounded-3xl
                    border-t-4
                    border-green-600
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    p-7
                "
            >

                <div className="flex justify-between items-start">

                    <div>

                        <p className="text-slate-500">
                            Departments
                        </p>

                        <h2 className="text-5xl font-bold text-emerald-600 mt-3">
                            {departments}
                        </h2>

                        <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            ✅ Active
                        </span>

                    </div>

                    <div className="bg-green-100 p-4 rounded-2xl">

                        <Building2
                            size={32}
                            className="text-green-700"
                        />

                    </div>

                </div>

            </div>

            {/* Today's Reports */}

            <div
                className="
                    bg-gradient-to-br
                    from-white
                    to-yellow-50
                    rounded-3xl
                    border-t-4
                    border-yellow-500
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    p-7
                "
            >

                <div className="flex justify-between items-start">

                    <div>

                        <p className="text-slate-500">
                            Today's Reports
                        </p>

                        <h2 className="text-5xl font-bold text-amber-600 mt-3">
                            {todaysReports}
                        </h2>

                        <span className="inline-block mt-4 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                            📅 Today's Activity
                        </span>

                    </div>

                    <div className="bg-yellow-100 p-4 rounded-2xl">

                        <CalendarDays
                            size={32}
                            className="text-yellow-600"
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default StatisticsCards;