## Problem Statement

Citizens often face difficulties in reporting public issues, while representatives lack a centralized platform to analyze complaints efficiently. People Priorities addresses this by combining AI-assisted complaint analysis with an analytics dashboard for better decision-making.

---

## Solution

The platform enables citizens to submit complaints with location and images. AI automatically categorizes each complaint, assigns the relevant department, determines priority, and generates insights. The dashboard helps MPs monitor trends, identify high-priority issues, and make informed decisions.



# People Priorities

People Priorities is an AI-powered public grievance portal developed to help citizens report civic issues quickly and assist Members of Parliament (MPs) in monitoring and analyzing complaints through an interactive dashboard.

The application uses AI to automatically classify complaints, assign departments, determine priority levels, and generate summaries, making the complaint management process faster and more efficient.

---

## Features

### Citizen Portal
- Submit complaints online
- AI-based complaint categorization
- Automatic department assignment
- Priority prediction
- AI-generated complaint summary
- Location selection using an interactive map
- Image upload support

### MP Dashboard
- Complaint statistics
- Interactive complaint map
- Complaint analytics and charts
- AI-generated insights
- Search and filter complaints
- Complaint status management
- Recent complaints table

---

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Leaflet
- Chart.js
- Google Gemini API
- Local Storage

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_GEMINI_API_KEY=YOUR_API_KEY
```

---

## Project Structure

```
src
├── components
│   ├── dashboard
│   ├── AIInsights.jsx
│   ├── Charts.jsx
│   └── ComplaintMap.jsx
│
├── pages
│   ├── ComplaintPage.jsx
│   ├── DashboardPage.jsx
│   └── HomePage.jsx
│
├── services
│   ├── gemini.js
│   ├── location.js
│   └── storage.js
│
├── hooks
├── App.jsx
└── main.jsx
```

---

## Future Improvements

- User authentication
- Backend database integration
- Complaint notifications
- PDF and Excel report generation
- Complaint tracking using unique IDs

---

## Screenshots

Add screenshots of the following pages before submission:

- Home Page
- Complaint Submission Page
- Analytics Dashboard
- Complaint Map

---

## Team

Developed as a hackathon project using React and AI-powered complaint analysis.