import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  DropdownItem,
  NavbarLink,
  NavbarToggle,          // ← Add this import!
  Dropdown,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ourFriendLogo from "../assets/ourfriend-logo.png";

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Top Bar */}
      <header className="bg-blue-500 text-white text-sm dark:bg-gray-900 dark:text-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
          <span>121 King St, Melbourne, VIC 3000</span>
          <span>(800) 569-7890</span>
        </div>
      </header>

      {/* Main Navbar - STICKY */}
      <div className="sticky top-0 z-50">
        <Navbar
          fluid
          rounded
          className="shadow-md px-4 bg-white dark:bg-gray-800 transition-colors duration-300"
        >
          <NavbarBrand as={Link} to="/">
            <img
              src={ourFriendLogo}
              className="mr-3 h-8 sm:h-9"
              alt="Our Friend Hospital Logo"
            />
          </NavbarBrand>

          {/* ← Add the toggle here (hamburger icon appears on mobile) */}
          <NavbarToggle />

          <NavbarCollapse className="menu">
            <NavbarLink as={Link} to="/" active={isActive("/")}>
              Home
            </NavbarLink>

            <Dropdown inline label="About">
              <DropdownItem
                as={Link}
                to="/about"
                className={isActive("/about") ? "bg-blue-50 text-blue-600" : ""}
              >
                About Us
              </DropdownItem>

              <DropdownItem
                as={Link}
                to="/founder"
                className={isActive("/founder") ? "bg-blue-50 text-blue-600" : ""}
              >
                Founder
              </DropdownItem>

              <DropdownItem
                as={Link}
                to="/team"
                className={isActive("/team") ? "bg-blue-50 text-blue-600" : ""}
              >
                Team
              </DropdownItem>
            </Dropdown>

            <NavbarLink as={Link} to="/services" active={isActive("/services")}>
              Services
            </NavbarLink>

            <NavbarLink as={Link} to="/news" active={isActive("/news")}>
              News
            </NavbarLink>

            <NavbarLink as={Link} to="/contact" active={isActive("/contact")}>
              Contact
            </NavbarLink>

            <Link
              to="/appointment"
              className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Book an Appointment
            </Link>

            {/* Optional: move dark mode toggle inside menu if you want it on mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </NavbarCollapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;