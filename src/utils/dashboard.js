export function getHighPriorityCount(complaints) {
    return complaints.filter(c => c.priority >= 4).length;
}

export function getDepartmentCount(complaints) {
    return new Set(
        complaints.map(c => c.department)
    ).size;
}

export function getTodayCount(complaints) {
    return complaints.length;
}