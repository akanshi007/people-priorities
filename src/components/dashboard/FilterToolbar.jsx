function FilterToolbar({
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    wardFilter,
    setWardFilter,
    priorityFilter,
    setPriorityFilter,
}) {

    function clearFilters() {
        setSearch("");
        setCategoryFilter("");
        setWardFilter("");
        setPriorityFilter("");
    }

    return (

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 mb-8">

            <div className="grid md:grid-cols-5 gap-4">

                {/* Search */}

                <input
                    type="text"
                    placeholder="🔍 Search Complaint..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Category */}

                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="border rounded-xl p-3"
                >
                    <option value="">All Categories</option>
                    <option>Roads</option>
                    <option>Water Supply</option>
                    <option>Electricity</option>
                    <option>Garbage</option>
                    <option>Healthcare</option>
                </select>

                {/* Ward */}

                <select
                    value={wardFilter}
                    onChange={(e) => setWardFilter(e.target.value)}
                    className="border rounded-xl p-3"
                >
                    <option value="">All Wards</option>
                    <option>Ward 1</option>
                    <option>Ward 2</option>
                    <option>Ward 3</option>
                    <option>Ward 4</option>
                    <option>Ward 5</option>
                </select>

                {/* Priority */}

                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="border rounded-xl p-3"
                >
                    <option value="">All Priorities</option>
                    <option value="4">High Priority</option>
                    <option value="3">Medium & Above</option>
                    <option value="1">All</option>
                </select>

                {/* Clear Button */}

                <button
                    type="button"
                    onClick={clearFilters}
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6 py-3 font-semibold transition"
                >
                    🔄 Clear Filters
                </button>

            </div>

        </div>

    );

}

export default FilterToolbar;