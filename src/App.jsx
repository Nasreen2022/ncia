import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Department from "./pages/Department";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Department />} />

        {/* future pages */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
