import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  DropdownItem,
  NavbarLink,
  NavbarToggle,
  Dropdown,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import ourFriendLogo from "../assets/ourfriend-logo.png";

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <header className="bg-blue-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
          <span>121 King St, Melbourne, VIC 3000</span>
          <span>(800) 569-7890</span>
        </div>
      </header>

      {/* Main Navbar */}
      <Navbar fluid rounded className="shadow-md px-4">
        <NavbarBrand as={Link} to="/">
          <img
            src={ourFriendLogo}
            className="mr-3 h-8 sm:h-9"
            alt="Our Friend Hospital Logo"
          />
        </NavbarBrand>

        <NavbarToggle />

        <NavbarCollapse className="menu">
          <NavbarLink as={Link} to="/" active={isActive("/")}>
            Home
          </NavbarLink>

          {/* About Dropdown */}
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

          {/* CTA Button */}
          <Link
            to="/appointment"
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Book an Appointment
          </Link>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default Header;