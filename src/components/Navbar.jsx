import { useEffect, useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed z-50 top-0 w-full  transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-xs shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="px-4 sm:px-6 py-1">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <img
                src="shankar_logo2.png"
                alt="logo"
                className="h-14 sm:h-16 md:h-20 lg:h-23 xl:h-24 xl:ml-22"
              />
            </div>

            {/* Desktop Menu */}
            <div
              className={`hidden md:flex space-x-6 lg:space-x-14 xl:space-x-20 md:text-[16px] lg:text-xl font-bold md:mr-10 lg:mr-16 xl:mr-20 ${isScrolled ? "text-black" : "text-white"
                }`}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-900 hover:underline underline-offset-4 decoration-2 decoration-blue-900 ${isActive ? "text-blue-900" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-900 hover:underline underline-offset-4 decoration-2 decoration-blue-900 ${isActive ? "text-blue-900" : ""
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/business"
                className={({ isActive }) =>
                  `hover:text-blue-900 hover:underline underline-offset-4 decoration-2 decoration-blue-900 ${isActive ? "text-blue-900" : ""
                  }`
                }
              >
                Business
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-blue-900 hover:underline underline-offset-4 decoration-2 decoration-blue-900 ${isActive ? "text-blue-900" : ""
                  }`
                }
              >
                Product & Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-blue-900 hover:underline underline-offset-4 decoration-2 decoration-blue-900 ${isActive ? "text-blue-900" : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className={`focus:outline-none text-2xl ${isScrolled ? "text-black" : "text-white"
                  }`}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Slide from Right) */}
      <div
        className={`fixed flex flex-col top-0 right-0 h-full 
        w-full sm:w-1/2 
        bg-blue-950 bg-opacity-90 
        transform transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Cancel Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 focus:outline-none text-2xl text-white"
        >
          <img
            src="cancel_button.svg"
            alt="cancel button"
            className="h-8 w-8"
          />
        </button>

        {/* Logo inside Drawer */}
        <div className="flex justify-center sm:justify-start px-14  mt-10">
          <img src="shankar_logo2.png" alt="logo" className="h-20" />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col mt-14 text-center sm:text-left space-y-6 px-14 text-white text-lg font-medium">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-400 hover:underline underline-offset-4 decoration-2 ${isActive ? "text-blue-400 font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-400 hover:underline underline-offset-4 decoration-2 ${isActive ? "text-blue-400 font-bold" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/business"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-400 hover:underline underline-offset-4 decoration-2 ${isActive ? "text-blue-400 font-bold" : ""
              }`
            }
          >
            Business
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-400 hover:underline underline-offset-4 decoration-2 ${isActive ? "text-blue-400 font-bold" : ""
              }`
            }
          >
            Product & Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-400 hover:underline underline-offset-4 decoration-2 ${isActive ? "text-blue-400 font-bold" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Vector Images */}
        <div className="flex gap-20 sm:gap-18 mt-auto mb-10">
          <img src="Vector2.png" alt="Vector 2" className="h-28" />
          <img src="Vector1.png" alt="Vector 1" className="h-35" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
