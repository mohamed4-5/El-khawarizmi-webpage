import { useState,useEffect } from "react";
import { HiMenu,HiX,HiOutlineUserCircle} from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

function Header(){
    const{darkMode,toggleMode}=useTheme()

    const [menuOpen,setMenuOpen]= useState(false);
    const toggleMenu=() => {
        setMenuOpen(!menuOpen);
    };
    const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            setScrolled(window.scrollY>10);
        };
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll);
        };
    },[]);
    return(
        <header className={`fixed top-0 z-50 pt-3 w-full ${darkMode ?"bg-gray-900 text-white": "bg-white"}`}>
        <div className=" flex flex-row items-center justify-around pb-1">
            <div className="md:hidden"><button onClick={toggleMode} className={`p-3  rounded-full transition ${darkMode?"bg-yellow-400 text-black":"bg-gray-200 text-black"}`}>{darkMode?<BsSun></BsSun>:<BsMoon></BsMoon>}</button></div>
           
            <div className="md:ms-96 ms-6 py-3 flex flex-row items-center justify-center w-44 md:justify-between">
            <Link to='/profile' className="hidden bg-sky-400 md:flex hover:bg-sky-600 transition duration-300 text-white rounded-full"><div><HiOutlineUserCircle size={45}></HiOutlineUserCircle></div></Link>
            <a href="/"><img className="w-28 h-8 rounded-full mr-5 md:mr-0  cursor-pointer" src='/photos/logo1.png' alt='logo' onClick={()=> window.location.reload}/></a>
            </div>
            <div className="md:hidden justify-end">
                <button onClick={toggleMenu} className="text-gray-700 text-2xl ">{menuOpen ? <HiX/> : <HiMenu/>}</button>
            </div>
            <div className="hidden md:flex space-x-4 mr-96">
                <button onClick={toggleMode} className={`p-3  rounded-full transition ${darkMode?"bg-yellow-400 text-black":"bg-gray-200 text-black"}`}>{darkMode?<BsSun size={24}></BsSun>:<BsMoon size={24}></BsMoon>}</button>
                <Link to="/login" className="bg-sky-400 text-white font-poppins px-4 py-2 rounded hover:bg-white hover:text-sky-400 border-sky-400 border-2 font-bold hover:border-sky-400 transition duration-300">Login</Link>
                <Link to="/signup" className=" px-4 py-2 rounded font-poppins hover:shadow-xl hover:scale-y-105 hover:scale-x-105 transition duration-300 font-bold ">Sign <span className="text-cyan-700 ">Up</span></Link>
            </div>
            {menuOpen&&(
                <motion.div className="absolute top-16 right-0 bg-sky-600 shadow-lg rounded-3xl p-4 w-full ml-0 md:hidden flex flex-col space-y-2 z-50" initial={{opacity:0,y:-20,x:50}} animate={{opacity:1,y:0,x:0}} exit={{opacity:0,y:20,x:-50}} transition={{duration:0.4}}>
                    <Link to="/login" className="bg-sky-800 text-white text-center px-4 py-2 rounded-2xl hover:bg-sky-900">Login</Link>
                    <Link to="/signup" className="bg-sky-800 text-white text-center px-4 py-2 rounded-2xl hover:bg-sky-900">Sign Up</Link>
                    <Link onClick={toggleMenu} to='/profile' className=" bg-blue-900 text-white flex justify-center px-4 py-2 rounded-2xl hover:bg-blue-950"><div><HiOutlineUserCircle size={35}></HiOutlineUserCircle></div></Link>
                </motion.div>
            )}
            </div>
            <div className="h-1 overflow-hidden"><div className={`h-full bg-sky-400 transition-all duration-500 ease-in-out ${scrolled ? "w-full":"w-0"}`}></div></div>
        </header>
    )
}

export default Header;