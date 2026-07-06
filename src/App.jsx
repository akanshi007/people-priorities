import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CitizenPage from "./pages/CitizenPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/citizen" element={<CitizenPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;