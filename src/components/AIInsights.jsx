function AIInsights({ complaints }) {

    if (complaints.length === 0) {

        return (

            <div className="text-center py-12 text-slate-500">

                No AI insights available yet.

            </div>

        );

    }

    // Most complained category
    const categoryCount = {};

    complaints.forEach(c => {

        categoryCount[c.category] =
            (categoryCount[c.category] || 0) + 1;

    });

    const topCategory = Object.entries(categoryCount)
        .sort((a, b) => b[1] - a[1])[0];

    // Ward with maximum complaints
    const wardCount = {};

    complaints.forEach(c => {

        wardCount[c.ward] =
            (wardCount[c.ward] || 0) + 1;

    });

    const topWard = Object.entries(wardCount)
        .sort((a, b) => b[1] - a[1])[0];

    // High priority complaints
    const highPriority =
        complaints.filter(c => c.priority >= 4).length;

    const percentage =
        Math.round((highPriority / complaints.length) * 100);

    return (

        <div className="grid md:grid-cols-2 gap-6">

            {/* Card 1 */}

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">

                <h3 className="font-bold text-blue-700 mb-3">

                    📌 Most Reported Category

                </h3>

                <p className="text-3xl font-bold text-slate-900">

                    {topCategory[0]}

                </p>

                <p className="text-slate-500 mt-2">

                    {topCategory[1]} complaints

                </p>

            </div>

            {/* Card 2 */}

            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">

                <h3 className="font-bold text-red-700 mb-3">

                    🚨 Critical Ward

                </h3>

                <p className="text-3xl font-bold text-slate-900">

                    {topWard[0]}

                </p>

                <p className="text-slate-500 mt-2">

                    {topWard[1]} complaints

                </p>

            </div>

            {/* Card 3 */}

            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">

                <h3 className="font-bold text-yellow-700 mb-3">

                    ⚠️ High Priority Cases

                </h3>

                <p className="text-3xl font-bold text-slate-900">

                    {highPriority}

                </p>

                <p className="text-slate-500 mt-2">

                    {percentage}% require urgent attention

                </p>

            </div>

            {/* Card 4 */}

            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">

                <h3 className="font-bold text-green-700 mb-3">

                    💡 AI Recommendation

                </h3>

                <p className="text-slate-700 leading-7">

                    Increase resources for
                    <span className="font-semibold">

                        {" "}
                        {topCategory[0]}

                    </span>

                    {" "}issues in

                    <span className="font-semibold">

                        {" "}
                        {topWard[0]}

                    </span>

                    {" "}to reduce citizen complaints.

                </p>

            </div>

        </div>

    );

}

export default AIInsights;