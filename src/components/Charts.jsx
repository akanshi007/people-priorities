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
    "#2563eb",
    "#16a34a",
    "#dc2626",
    "#f59e0b",
    "#7c3aed",
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
                            outerRadius={100}
                        >
                            {categoryData.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

                <h2 className="text-xl font-bold mb-4">
                    Ward-wise Complaints
                </h2>

                <ResponsiveContainer width="100%" height={300}>

                    <BarChart data={wardData}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="ward" />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Bar
                            dataKey="count"
                            fill="#2563eb"
                            radius={[8, 8, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default Charts;