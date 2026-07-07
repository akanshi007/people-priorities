import AIInsights from "../AIInsights";

function AIInsightsSection({ complaints }) {
    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mb-10">

            <h2 className="text-2xl font-bold mb-6">
                🤖 AI Insights
            </h2>

            {complaints.length > 0 ? (

                <AIInsights complaints={complaints} />

            ) : (

                <div className="text-center py-12 text-slate-500">
                    No data available for AI insights.
                </div>

            )}

        </div>
    );
}

export default AIInsightsSection;