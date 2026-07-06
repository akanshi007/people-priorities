function AIInsights({ complaints }) {

    if (complaints.length === 0) {
        return null;
    }

    const categoryCount = {};
    const wardCount = {};
    const departmentCount = {};

    complaints.forEach((item) => {
        categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
        wardCount[item.ward] = (wardCount[item.ward] || 0) + 1;
        departmentCount[item.department] =
            (departmentCount[item.department] || 0) + 1;
    });

    const mostCategory =
        Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0];

    const mostWard =
        Object.entries(wardCount).sort((a, b) => b[1] - a[1])[0];

    const mostDepartment =
        Object.entries(departmentCount).sort((a, b) => b[1] - a[1])[0];

    const highPriority =
        complaints.filter(c => c.priority >= 4).length;

    return (

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-2xl shadow-xl p-8 mt-10">

            <h2 className="text-3xl font-bold mb-6">
                🤖 AI Insights
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                <div>
                    <h3 className="font-bold">📌 Most Reported Category</h3>
                    <p>{mostCategory[0]}</p>
                </div>

                <div>
                    <h3 className="font-bold">📍 Most Affected Ward</h3>
                    <p>{mostWard[0]}</p>
                </div>

                <div>
                    <h3 className="font-bold">⚠ High Priority Issues</h3>
                    <p>{highPriority}</p>
                </div>

                <div>
                    <h3 className="font-bold">🏢 Department with Most Work</h3>
                    <p>{mostDepartment[0]}</p>
                </div>

            </div>

            <div className="mt-8 bg-white text-gray-800 rounded-xl p-6">

                <h3 className="font-bold text-xl mb-3">
                    AI Recommendation
                </h3>

                <p>
                    Based on recent complaints, priority should be given to
                    <strong> {mostCategory[0]}</strong> issues,
                    especially in <strong>{mostWard[0]}</strong>.
                    The <strong>{mostDepartment[0]}</strong> should receive
                    immediate attention to resolve the growing number of
                    complaints.
                </p>

            </div>

        </div>

    );
}

export default AIInsights;