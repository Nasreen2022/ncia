import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Department from "./pages/Department";
import LegalTeam from "./pages/LegalTeam";
import AdministrativeAuthority from "./pages/AdministrativeAuthority";
import ContactUs from "./pages/ContactUs";

import MaintenancePopup from "./components/MaintenancePopup";

export default function App() {
  return (
    <BrowserRouter>

      {/* 🔔 Maintenance Notice Popup */}
      <MaintenancePopup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/legal-team" element={<LegalTeam />} />
        <Route
          path="/administrative-authority"
          element={<AdministrativeAuthority />}
        />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

    </BrowserRouter>
  );
}
