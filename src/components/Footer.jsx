import { useTheme } from "../contexts/ThemeContext";
import { Mail } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "../utils/constants";

export default function Footer(){
    const {darkMode} = useTheme();
    return(
        <footer className="bg-sky-900 flex flex-col justify-center items-center">
            <div className="md:mt-40 mt-16">
                <img src="/photos/footerlogo.png" className="md:w-[450px] w-60" alt="El Khawarizmi logo" />
            </div>
            <p className="md:text-4xl text-2xl text-white md:mt-20 mt-10 md:mb-10 mb-5 font-poppins font-bold">Contact us</p>
            <div className={`p-4 rounded-md md:text-2xl text-xl md:mb-20 mb-10 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
                <a 
                    href={`mailto:${CONTACT_EMAIL}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-row gap-2"
                    aria-label={`Send email to ${CONTACT_EMAIL}`}
                >
                    <Mail size={28} />
                    <span>{CONTACT_EMAIL}</span>
                </a>
            </div>
            <nav className="md:flex flex-row justify-center items-center gap-8 mb-32 hidden" aria-label="Social media links">
                <a 
                    href={SOCIAL_LINKS.FACEBOOK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                >
                    <Icon icon="logos:facebook" width="80" />
                </a>
                {SOCIAL_LINKS.INSTAGRAM !== '#' && (
                    <a 
                        href={SOCIAL_LINKS.INSTAGRAM} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit our Instagram page"
                    >
                        <Icon icon="skill-icons:instagram" width="80" />
                    </a>
                )}
                {SOCIAL_LINKS.TIKTOK !== '#' && (
                    <a 
                        href={SOCIAL_LINKS.TIKTOK} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit our TikTok page"
                    >
                        <Icon icon="logos:tiktok-icon" width="80" />
                    </a>
                )}
                <a 
                    href={SOCIAL_LINKS.YOUTUBE} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our YouTube channel"
                >
                    <Icon icon="logos:youtube-icon" width="80" />
                </a>
            </nav>
            <nav className="flex flex-row justify-center items-center gap-4 mb-16 md:hidden" aria-label="Social media links">
                <a 
                    href={SOCIAL_LINKS.FACEBOOK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                >
                    <Icon icon="logos:facebook" width="40" />
                </a>
                {SOCIAL_LINKS.INSTAGRAM !== '#' && (
                    <a 
                        href={SOCIAL_LINKS.INSTAGRAM} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit our Instagram page"
                    >
                        <Icon icon="skill-icons:instagram" width="40" />
                    </a>
                )}
                {SOCIAL_LINKS.TIKTOK !== '#' && (
                    <a 
                        href={SOCIAL_LINKS.TIKTOK} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit our TikTok page"
                    >
                        <Icon icon="logos:tiktok-icon" width="40" />
                    </a>
                )}
                <a 
                    href={SOCIAL_LINKS.YOUTUBE} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit our YouTube channel"
                >
                    <Icon icon="logos:youtube-icon" width="40" />
                </a>
            </nav>
            <p className="md:text-sm text-xs opacity-80 mb-6 text-white">
                © {new Date().getFullYear()} Mohamed Hussein. All rights reserved.
            </p>
        </footer>
    )
}