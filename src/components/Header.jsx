import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import nciaLogo from "../assets/images/ncfblogonew.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    // { name: "About Us", path: "/about" },
    { name: "Administrative Authority", path: "/administrative-authority" },
    { name: "Legal Team", path: "/legal-team" },
    { name: "Department", path: "/departments" },
    // { name: "Media", path: "/media" },
    // { name: "Donation", path: "/donation" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* ===== TOP BAR ===== */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span>📞 +91-7668897003</span>
          <span>✉️ ncfbfoundation@gmail.com</span>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img src={nciaLogo} alt="NCIA Logo" className="h-16 w-auto" />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition ${
                      isActive
                        ? "text-blue-700 after:w-full"
                        : "hover:text-blue-700"
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-700 after:transition-all after:w-0`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* ACTION BUTTONS */}
            {/* <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/registration"
                className="px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition"
              >
                Registration
              </Link>
              <Link
                to="/verification"
                className="px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold transition"
              >
                Verification
              </Link>
            </div> */}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-blue-800"
            >
              ☰
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="bg-white border-t">
            <ul className="flex flex-col text-gray-700 font-semibold">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-4 border-b ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "hover:bg-blue-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* <div className="flex flex-col gap-3 p-4">
              <Link
                to="/registration"
                onClick={() => setMenuOpen(false)}
                className="py-2 rounded bg-green-600 text-white font-bold text-center"
              >
                Registration
              </Link>
              <Link
                to="/verification"
                onClick={() => setMenuOpen(false)}
                className="py-2 rounded bg-red-600 text-white font-bold text-center"
              >
                Verification
              </Link>
            </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
