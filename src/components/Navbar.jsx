import { useEffect, useState } from "react";

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
        className={`fixed top-0 w-full h-32 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-xs shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 md:mt-6 lg:mt-10">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div>
              <img
                src="icon.png"
                alt="logo"
                className="h-12 sm:h-14 md:h-18 xl:h-36 sm:ml-6 md:ml-18"
              />
            </div>

            {/* Desktop Menu */}
            <div
              className={`hidden md:flex space-x-6 lg:space-x-14 xl:space-x-20 text-lg font-bold md:mr-10 lg:mr-16 xl:mr-20 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <a href="#" className="hover:text-blue-900 border-b-blue-900">
                Home
              </a>
              <a href="#" className="hover:text-blue-900">
                About Us
              </a>
              <a href="#" className="hover:text-blue-900">
                Business
              </a>
              <a href="#" className="hover:text-blue-900">
                Product & Services
              </a>
              <a href="#" className="hover:text-blue-900">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none text-2xl ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/80 px-4 py-4 space-y-4 text-lg text-white font-medium">
            <a href="#" className="block hover:text-gray-400">
              Home
            </a>
            <a href="#" className="block hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="block hover:text-gray-400">
              Business
            </a>
            <a href="#" className="block hover:text-gray-400">
              Product & Services
            </a>
            <a href="#" className="block hover:text-gray-400">
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
