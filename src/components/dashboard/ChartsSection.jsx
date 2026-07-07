import Charts from "../Charts";
import FilterToolbar from "./FilterToolbar";

function ChartsSection({
    complaints,
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    wardFilter,
    setWardFilter,
    priorityFilter,
    setPriorityFilter,
}) {
    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mb-10">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-800">
                    Complaint Analytics
                </h2>

                <p className="text-slate-500 mt-2">
                    Visual breakdown of complaints by category and ward.
                </p>

            </div>

            <FilterToolbar
                search={search}
                setSearch={setSearch}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                wardFilter={wardFilter}
                setWardFilter={setWardFilter}
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
            />

            {complaints.length > 0 ? (

                <Charts complaints={complaints} />

            ) : (

                <div className="text-center py-12 text-slate-500">
                    No data available for charts.
                </div>

            )}

        </div>
    );
}

export default ChartsSection;