import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Department from "./pages/Department";
import LegalTeam from "./components/LegalTeam";
import AdministrativeAuthority from "./pages/AdministrativeAuthority";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/legal-team" element={<LegalTeam />} />
        <Route path="/administrative-authority" element={<AdministrativeAuthority />} />
        <Route path="/contact" element={<ContactUs />} />



        {/* future pages */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
