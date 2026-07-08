const STORAGE_KEY = "people-priorities-data";

export function saveComplaint(complaint) {
    const complaints = getComplaints();

    complaints.push({
        ...complaint,
        status: "Pending",
    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(complaints)
    );
}

export function getComplaints() {
    const data = localStorage.getItem(STORAGE_KEY);

    const complaints = data ? JSON.parse(data) : [];

    return complaints.map((complaint) => ({
        status: "Pending",
        ...complaint,
    }));
}

export function updateComplaintStatus(index, status) {
    const complaints = getComplaints();

    complaints[index].status = status;

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(complaints)
    );
}

export function clearComplaints() {
    localStorage.removeItem(STORAGE_KEY);
}