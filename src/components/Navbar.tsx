import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto lg:flex hidden justify-between items-center py-4 px-5">
        {/* Logo */}

        <NavLink to="/">
          <div className="logo">
            <img src="/assets/logo.png" alt="Logo" className="h-16" />
          </div>
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-primaryBold tracking-wide">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/roadmap"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              Roadmap
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white hover:text-secondary"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <Button>Connect Wallet</Button>
      </div>
      <div className="lg:hidden py-4 px-5 flex justify-between items-center">
        <NavLink to="/">
          <div className="logo">
            <img src="/assets/logo.png" alt="Logo" className="h-14" />
          </div>
        </NavLink>
        <Sheet>
          <SheetTrigger>
            <AlignLeft className="w-8 h-8 text-primary" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="logo">
                  <img src="/assets/logo.png" alt="Logo" className="h-14" />
                </div>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ul className="flex font-primaryBold tracking-wide flex-col gap-10 py-10 px-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary"
                      : "text-white hover:text-secondary"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary"
                      : "text-white hover:text-secondary"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/roadmap"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary"
                      : "text-white hover:text-secondary"
                  }
                >
                  Roadmap
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary"
                      : "text-white hover:text-secondary"
                  }
                >
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-secondary"
                      : "text-white hover:text-secondary"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
