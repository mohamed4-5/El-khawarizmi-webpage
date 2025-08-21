import { useTheme } from "./ThemeContext"
import { Mail } from "lucide-react"
import { FaInstagram,FaTiktok,FaYoutube } from "react-icons/fa"
import { SiFacebook } from "react-icons/si"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Footer(){
    const{darkMode}=useTheme()
    return(
        <div className="bg-sky-900 flex flex-col justify-center items-center">
            <div className="md:mt-40 mt-16">
                <img src="/photos/footerlogo.png" className="md:w-[450px] w-60 " alt="logo"></img>
            </div>
            <p className="md:text-4xl text-2xl text-white md:mt-20 mt-10 md:mb-10 mb-5 font-poppins font-bold">Contact us</p>
            <div className={`p-4 rounded-md md:text-2xl text-xl md:mb-20 mb-10 ${darkMode? "bg-gray-900":"bg-white"}`}>
                <a href="mailto:mziads505050@gmail.com" target="_blank" rel="noreferrer" className="flex flex-row gap-2"><Mail size={28}></Mail><span>mziads505050@gmail.com</span></a>
            </div>
            <div className="md:flex flex-row justify-center items-center gap-8 mb-32 hidden  ">
                <a href="https://www.facebook.com/ziad.mohamed.111479/" target="_blank" rel="noreferrer"><Icon icon="logos:facebook" width="80"></Icon></a>
                <a href="#"><Icon icon="skill-icons:instagram" width="80"></Icon></a>
                <a href="#"><Icon icon="logos:tiktok-icon" width="80"></Icon></a>
                <a href="https://www.youtube.com/@El-Khwarizmy" target="_blank" rel="noreferrer"><Icon icon="logos:youtube-icon" width="80"></Icon></a>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mb-16 md:hidden ">
                <a href="https://www.facebook.com/ziad.mohamed.111479/" target="_blank" rel="noreferrer"><Icon icon="logos:facebook" width="40"></Icon></a>
                <a href="#"><Icon icon="skill-icons:instagram" width="40"></Icon></a>
                <a href="#"><Icon icon="logos:tiktok-icon" width="40"></Icon></a>
                <a href="https://www.youtube.com/@El-Khwarizmy" target="_blank" rel="noreferrer"><Icon icon="logos:youtube-icon" width="40"></Icon></a>
            </div>
            <p className="md:text-sm text-xs opacity-80 mb-6 text-white">
                © {new Date().getFullYear()} Mohamed Hussein. All rights reserved.
            </p>
        </div>
    )
}