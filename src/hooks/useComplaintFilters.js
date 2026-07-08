import { useState } from "react";

function useComplaintFilters(complaints) {
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [wardFilter, setWardFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");

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

    return {
        filteredComplaints,

        search,
        setSearch,

        categoryFilter,
        setCategoryFilter,

        wardFilter,
        setWardFilter,

        priorityFilter,
        setPriorityFilter,
    };
}

export default useComplaintFilters;