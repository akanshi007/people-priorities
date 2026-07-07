import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from "recharts";

const COLORS = [
    "#2563EB",
    "#14B8A6",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4",
];

function Charts({ complaints }) {
    const categoryMap = {};
    const wardMap = {};

    complaints.forEach((item) => {
        categoryMap[item.category] = (categoryMap[item.category] || 0) + 1;
        wardMap[item.ward] = (wardMap[item.ward] || 0) + 1;
    });

    const categoryData = Object.entries(categoryMap).map(([name, value]) => ({
        name,
        value,
    }));

    const wardData = Object.entries(wardMap).map(([ward, count]) => ({
        ward,
        count,
    }));

    if (complaints.length === 0) {

        return (

            <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-slate-50 rounded-3xl h-80 flex items-center justify-center text-slate-400">

                    No Chart Data

                </div>

                <div className="bg-slate-50 rounded-3xl h-80 flex items-center justify-center text-slate-400">

                    No Chart Data

                </div>

            </div>

        );

    }

    return (
        <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="bg-white rounded-2xl shadow-lg p-6">

                <h2 className="text-xl font-bold mb-4">
                    Complaints by Category
                </h2>

                <ResponsiveContainer width="100%" height={300}>

                    <PieChart>

                        <Pie
                            data={categoryData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={60}
                            outerRadius={105}
                            paddingAngle={3}
                            cornerRadius={8}
                        >
                            {categoryData.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            contentStyle={{
                                borderRadius: "12px",
                                border: "none",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                            }}
                        />

                        <Legend
                            verticalAlign="bottom"
                            height={36}
                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border border-slate-200 p-8">

                <h2 className="text-xl font-bold mb-4">
                    Ward-wise Complaints
                </h2>

                <ResponsiveContainer width="100%" height={300}>

                    <BarChart data={wardData}>

                        <CartesianGrid
                            strokeDasharray="5 5"
                            stroke="#E5E7EB"
                        />

                        <XAxis
                            dataKey="ward"
                            tick={{ fill: "#475569" }}
                        />

                        <YAxis
                            tick={{ fill: "#475569" }}
                        />

                        <Tooltip />

                        <Legend />

                        <Bar
                            dataKey="count"
                            fill="#2563EB"
                            radius={[12, 12, 0, 0]}
                            animationDuration={1200}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default Charts;