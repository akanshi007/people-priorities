const STORAGE_KEY = "people-priorities-data";

export function saveComplaint(complaint) {
    const complaints = getComplaints();

    complaints.push(complaint);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(complaints));
}

export function getComplaints() {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
}

export function clearComplaints() {
    localStorage.removeItem(STORAGE_KEY);
}