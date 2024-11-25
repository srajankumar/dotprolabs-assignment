import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5">
      {/* Logo */}
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" className="h-16" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 font-primaryBold tracking-wide">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#EDD955]" : "text-white hover:text-[#EDD955]"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-[#EDD955]" : "text-white hover:text-[#EDD955]"
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/roadmap"
            className={({ isActive }) =>
              isActive ? "text-[#EDD955]" : "text-white hover:text-[#EDD955]"
            }
          >
            Roadmap
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              isActive ? "text-[#EDD955]" : "text-white hover:text-[#EDD955]"
            }
          >
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-[#EDD955]" : "text-white hover:text-[#EDD955]"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <Button>Connect Wallet</Button>
    </nav>
  );
};

export default Navbar;
