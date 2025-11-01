import { useState, useEffect } from "react";
import { HiMenu, HiX, HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

function Header() {
  const { darkMode, toggleMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 pt-6 w-full ${
        darkMode ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-around px-4">
        {/* اللوجو */}
        <div className="hidden md:flex items-center gap-4"> 
            <Link
                to="/profile"
                className="flex items-center bg-sky-400 hover:bg-sky-600 text-white size-16 justify-center rounded-full transition"
            >
                <HiOutlineUserCircle size={70} />
            </Link>
            <Link to="/" className="md:flex hidden items-center">
                <img
                    className="w-36 h-10 rounded-full cursor-pointer"
                    src="/photos/logo1.png"
                    alt="El Khawarizmi logo"
                />
            </Link>
        </div>

        {/* الأزرار الكبيرة */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleMode}
            className={`p-2 rounded-full transition ${
              darkMode
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-black"
            }`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <BsSun size={40} /> : <BsMoon size={40} />}
          </button>
          <Link
            to="/login"
            className="bg-sky-400 text-white px-4 py-2 text-xl font-poppins rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded text-xl font-poppins font-bold hover:scale-105 transition"
          >
            Sign <span className="text-cyan-700">Up</span>
          </Link>
          
        </div>

        {/* زرار المنيو للموبايل */}
        <div className="md:hidden flex justify-around w-full items-center space-x-2">
          <button
            onClick={toggleMode}
            className={`p-2 rounded-full transition ${
              darkMode
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-black"
            }`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
          <Link to="/" className="flex items-center">
            <img
                className="w-28 h-8 rounded-full cursor-pointer"
                src="/photos/logo1.png"
                alt="El Khawarizmi logo"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className={`text-2xl ${darkMode ? "text-white" : "text-gray-700"}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* المنيو في الموبايل */}
      {menuOpen && (
        <motion.nav
          className="md:hidden bg-sky-600 text-white flex flex-col space-y-2 p-4 rounded-b-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          aria-label="Mobile navigation menu"
        >
          <Link to="/login" className="text-center py-2 rounded-lg hover:bg-sky-700">Login</Link>
          <Link to="/signup" className="text-center py-2 rounded-lg hover:bg-sky-700">Sign Up</Link>
          <Link to="/profile" className="flex justify-center py-2 rounded-lg hover:bg-sky-700" aria-label="Go to profile">
            <HiOutlineUserCircle size={35} />
          </Link>
        </motion.nav>
      )}

      {/* الخط تحت الهيدر */}
      <div className="h-1 md:mt-6 mt-3 overflow-hidden">
        <div
          className={`h-full bg-sky-400 transition-all duration-500 ease-in-out ${
            scrolled ? "w-full" : "w-0"
          }`}
        ></div>
      </div>
    </header>
  );
}

export default Header;