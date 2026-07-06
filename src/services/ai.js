// Simple AI simulation for hackathon MVP

export function analyzeComplaint(complaint) {
  const text = complaint.toLowerCase();

  let category = "General";
  let department = "Municipal Office";
  let urgency = "Medium";
  let priority = 3;
  let summary = complaint;

  if (text.includes("water") || text.includes("tap")) {
    category = "Water Supply";
    department = "Water Board";
    urgency = "High";
    priority = 5;
  } else if (text.includes("road") || text.includes("pothole")) {
    category = "Roads";
    department = "Public Works Department";
    urgency = "High";
    priority = 5;
  } else if (text.includes("electricity") || text.includes("power")) {
    category = "Electricity";
    department = "Electricity Department";
    urgency = "High";
    priority = 4;
  } else if (text.includes("garbage") || text.includes("waste")) {
    category = "Garbage";
    department = "Sanitation Department";
    urgency = "Medium";
    priority = 3;
  } else if (text.includes("hospital") || text.includes("health")) {
    category = "Healthcare";
    department = "Health Department";
    urgency = "High";
    priority = 5;
  }

  summary = complaint.charAt(0).toUpperCase() + complaint.slice(1);

  return {
    category,
    department,
    urgency,
    priority,
    summary,
  };
}