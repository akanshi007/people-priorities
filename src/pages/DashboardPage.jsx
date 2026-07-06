import { useEffect, useState } from "react";
import { getComplaints } from "../services/storage";
import Charts from "../components/Charts";
import AIInsights from "../components/AIInsights";

function DashboardPage() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        setComplaints(getComplaints());
    }, []);

    return (

        <div className="max-w-7xl mx-auto py-10 px-6">

            <h1 className="text-4xl font-bold mb-8">
                MP Dashboard
            </h1>

            {/* Statistics Cards */}

            <div className="grid md:grid-cols-4 gap-6 mb-10">

                <div className="bg-blue-600 text-white rounded-xl p-6">

                    <h2 className="text-lg">Total Complaints</h2>

                    <p className="text-4xl font-bold mt-3">
                        {complaints.length}
                    </p>

                </div>

                <div className="bg-red-600 text-white rounded-xl p-6">

                    <h2 className="text-lg">High Priority</h2>

                    <p className="text-4xl font-bold mt-3">
                        {complaints.filter(c => c.priority >= 4).length}
                    </p>

                </div>

                <div className="bg-green-600 text-white rounded-xl p-6">

                    <h2 className="text-lg">Departments</h2>

                    <p className="text-4xl font-bold mt-3">
                        {new Set(complaints.map(c => c.department)).size}
                    </p>

                </div>

                <div className="bg-yellow-500 text-white rounded-xl p-6">

                    <h2 className="text-lg">Today's Reports</h2>

                    <p className="text-4xl font-bold mt-3">
                        {complaints.length}
                    </p>

                </div>

            </div>

            {/* Charts */}

            <Charts complaints={complaints} />

            {/* AI Insights */}

            <AIInsights complaints={complaints} />

            {/* Recent Complaints */}

            <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">

                <h2 className="text-2xl font-bold mb-5">
                    Recent Complaints
                </h2>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b bg-gray-100">

                                <th className="text-left py-3 px-2">
                                    Category
                                </th>

                                <th className="text-left px-2">
                                    Ward
                                </th>

                                <th className="text-left px-2">
                                    Priority
                                </th>

                                <th className="text-left px-2">
                                    Department
                                </th>

                                <th className="text-left px-2">
                                    Date
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {complaints.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No complaints submitted yet.
                                    </td>

                                </tr>

                            ) : (

                                complaints.map((item, index) => (

                                    <tr
                                        key={index}
                                        className="border-b hover:bg-gray-50"
                                    >

                                        <td className="py-3 px-2">
                                            {item.category}
                                        </td>

                                        <td className="px-2">
                                            {item.ward}
                                        </td>

                                        <td className="px-2">
                                            ⭐ {item.priority}
                                        </td>

                                        <td className="px-2">
                                            {item.department}
                                        </td>

                                        <td className="px-2">
                                            {item.date}
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default DashboardPage;