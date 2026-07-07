import { useEffect, useState } from "react";

import { getComplaints } from "../services/storage";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatisticsCards from "../components/dashboard/StatisticsCards";
import ComplaintMapCard from "../components/dashboard/ComplaintMapCard";
import ChartsSection from "../components/dashboard/ChartsSection";
import AIInsightsSection from "../components/dashboard/AIInsightsSection";
import RecentComplaintsTable from "../components/dashboard/RecentComplaintsTable";

function DashboardPage() {
    const [complaints, setComplaints] = useState([]);

    // Filters
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [wardFilter, setWardFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");

    useEffect(() => {
        setComplaints(getComplaints());
    }, []);

    const filteredComplaints = complaints.filter((item) => {
        const matchesSearch = (item.complaint || "")
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            categoryFilter === "" ||
            item.category === categoryFilter;

        const matchesWard =
            wardFilter === "" ||
            item.ward === wardFilter;

        const matchesPriority =
            priorityFilter === "" ||
            Number(item.priority) >= Number(priorityFilter);

        return (
            matchesSearch &&
            matchesCategory &&
            matchesWard &&
            matchesPriority
        );
    });

    return (
        <div className="max-w-7xl mx-auto py-10 px-6">

            <DashboardHeader />

            <StatisticsCards complaints={filteredComplaints} />

            <ComplaintMapCard complaints={filteredComplaints} />

            <ChartsSection
                complaints={filteredComplaints}
                search={search}
                setSearch={setSearch}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                wardFilter={wardFilter}
                setWardFilter={setWardFilter}
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
            />

            <AIInsightsSection complaints={filteredComplaints} />

            <RecentComplaintsTable complaints={filteredComplaints} />

        </div>
    );
}

export default DashboardPage;