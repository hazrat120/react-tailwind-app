import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#service", label: "Our Service" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <>
      <nav className=" fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm border-gray-100 border-b ">
        <div className="flex justify-between px-4 sm:px-6 container mx-auto lg:px-8 md:h-20 h-16">
          {/* logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100  transition-opacity"></div>
            <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75  transition-opacity"></div>
          </div>

          {/* mobile menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden px-2"
          >
            {isMenuOpen ? (
              <HiX className="size-6" />
            ) : (
              <HiMenu className="size-6" />
            )}
          </button>

          {/* nav manu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setActiveLink(link.href)}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                  activeLink === link.href
                    ? "text-blue-600 after:w-full"
                    : "text-gray-600 hover:text-gray-900"
                } `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* button */}
          <button className="hidden md:block">
            <a
              href="#newsletter"
              className=" bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-400/50"
            >
              Get in touch
            </a>
          </button>
        </div>

        {/* mobile menu items */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 space-x-3">
              {navLinks.map((link, index) => (
                <a
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  href={link.href}
                  key={index}
                  className={`block text-sm font-medium py-2 ${
                    activeLink === link.href
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* button */}
              <div className="w-full pt-3">
                <button className=" bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-400/50">
                  <a href="#newsletter" className="">
                    Get in touch
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
