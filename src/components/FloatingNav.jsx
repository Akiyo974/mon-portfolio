import React from "react";
import { FaHome, FaFileAlt, FaFolderOpen, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function FloatingNav() {
    const navItems = [
        { title: "Accueil", icon: <FaHome />, href: "/" },
        { title: "Projets", icon: <FaFolderOpen />, href: "/projects" },
        { title: "CV", icon: <FaFileAlt />, href: "/mon-portfolio/cv.pdf", external: true },
    ];

    const socialItems = [
        { title: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/christen-dijoux/" },
        { title: "GitHub", icon: <FaGithub />, href: "https://github.com/Akiyo974" },
    ];

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-black/50 backdrop-blur-md text-white p-4 md:p-3 rounded-full shadow-lg space-x-8 md:space-x-6 border border-white/20">
            {navItems.map((item) =>
                item.external ? (
                    <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-base md:text-sm hover:text-gray-300 transition duration-300"
                    >
                        <div className="text-2xl md:text-xl">{item.icon}</div>
                        <span>{item.title}</span>
                    </a>
                ) : (
                    <Link
                        key={item.title}
                        to={item.href}
                        className="flex flex-col items-center text-base md:text-sm hover:text-gray-300 transition duration-300"
                    >
                        <div className="text-2xl md:text-xl">{item.icon}</div>
                        <span>{item.title}</span>
                    </Link>
                )
            )}

            <div className="w-px h-10 md:h-8 bg-white/30 mx-4"></div>

            {socialItems.map((item) => (
                <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-base md:text-sm hover:text-gray-300 transition duration-300"
                >
                    <div className="text-2xl md:text-xl">{item.icon}</div>
                    <span>{item.title}</span>
                </a>
            ))}
        </div>
    );
}

export default FloatingNav;
