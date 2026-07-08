import { useEffect, useState } from "react";

import { getComplaints } from "../services/storage";
import useComplaintFilters from "../hooks/useComplaintFilters";

import {
    DashboardHeader,
    StatisticsCards,
    ComplaintMapCard,
    ChartsSection,
    AIInsightsSection,
    RecentComplaintsTable,
} from "../components/dashboard";

function DashboardPage() {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        setComplaints(getComplaints());
    }, []);

    const {
        filteredComplaints,

        search,
        setSearch,

        categoryFilter,
        setCategoryFilter,

        wardFilter,
        setWardFilter,

        priorityFilter,
        setPriorityFilter,
    } = useComplaintFilters(complaints);

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

            <RecentComplaintsTable
                complaints={complaints}
                setComplaints={setComplaints}
            />

        </div>
    );
}

export default DashboardPage;