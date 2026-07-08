import { updateComplaintStatus } from "../../services/storage";
function RecentComplaintsTable({
    complaints,
    setComplaints,
}) {

    const changeStatus = (index, status) => {

        updateComplaintStatus(index, status);

        const updatedComplaints = complaints.map((complaint, i) => {

            if (i === index) {
                return {
                    ...complaint,
                    status,
                };
            }

            return complaint;

        });

        setComplaints(updatedComplaints);

    };
    return (
        <div
            className="
                bg-white
                rounded-3xl
                shadow-2xl
                border
                border-slate-200
                overflow-hidden
            "
        >
            <div className="px-8 pt-8">

                <h2 className="text-3xl font-bold text-slate-900">
                    📋 Recent Complaints
                </h2>

                <p className="text-slate-500 mt-2">
                    Latest complaints submitted by citizens.
                </p>

            </div>

            <div className="p-8 pt-6">

                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="bg-slate-100 text-slate-700 uppercase text-sm tracking-wider">

                            <tr>

                                <th className="py-4 px-4">Category</th>
                                <th className="px-4">Ward</th>
                                <th className="px-4">Priority</th>
                                <th className="px-4">Status</th>
                                <th className="px-4">Department</th>
                                <th className="px-4">Date</th>
                                <th className="px-4">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {complaints.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="py-16 text-center"
                                    >

                                        <div className="flex flex-col items-center">

                                            <div className="text-6xl mb-3">
                                                📭
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-700">
                                                No Complaints Found
                                            </h3>

                                            <p className="text-slate-500 mt-2">
                                                Try changing your filters or wait for new complaints.
                                            </p>

                                        </div>

                                    </td>

                                </tr>

                            ) : (

                                complaints.map((item, index) => (

                                    <tr
                                        key={index}
                                        className="
                                            border-b
                                            border-slate-100
                                            hover:bg-blue-50
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        {/* Category */}

                                        <td className="py-5 px-4">

                                            <div className="font-semibold text-slate-800">
                                                {item.category}
                                            </div>

                                            <div className="text-sm text-slate-500">
                                                Complaint #{index + 1}
                                            </div>

                                        </td>

                                        {/* Ward */}

                                        <td className="px-4">

                                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                                                📍 {item.ward}
                                            </span>

                                        </td>

                                        {/* Priority */}

                                        <td className="px-4">

                                            <span
                                                className={`
                                                    px-4
                                                    py-2
                                                    rounded-full
                                                    font-semibold
                                                    text-sm
                                                    ${item.priority >= 4
                                                        ? "bg-red-100 text-red-700"
                                                        : item.priority >= 3
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-green-100 text-green-700"
                                                    }
                                                `}
                                            >

                                                {item.priority >= 4
                                                    ? "🔴 High"
                                                    : item.priority >= 3
                                                        ? "🟡 Medium"
                                                        : "🟢 Low"}

                                            </span>

                                        </td>

                                        <td className="px-4">

                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-semibold
            ${item.status === "Resolved"
                                                        ? "bg-green-100 text-green-700"
                                                        : item.status === "In Progress"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : item.status === "Under Review"
                                                                ? "bg-yellow-100 text-yellow-700"
                                                                : "bg-red-100 text-red-700"
                                                    }
        `}
                                            >
                                                {item.status}
                                            </span>

                                        </td>

                                        {/* Department */}

                                        <td className="px-4 font-medium">
                                            {item.department}
                                        </td>

                                        {/* Date */}

                                        <td className="px-4">

                                            <div className="text-slate-700">
                                                {item.date}
                                            </div>

                                            <div className="text-xs text-slate-400">
                                                Submitted
                                            </div>

                                        </td>

                                        <td className="px-4">

                                            <select
                                                value={item.status}
                                                onChange={(e) =>
                                                    changeStatus(index, e.target.value)
                                                }
                                                className="border rounded-lg p-2"
                                            >
                                                <option>Pending</option>
                                                <option>Under Review</option>
                                                <option>In Progress</option>
                                                <option>Resolved</option>
                                            </select>

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

export default RecentComplaintsTable;