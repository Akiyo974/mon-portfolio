import React from "react";
import { FaHome, FaFileAlt, FaFolderOpen } from "react-icons/fa";

function FloatingNav() {
    const navItems = [
        { title: "Accueil", icon: <FaHome />, href: "#accueil" },
        { title: "Projets", icon: <FaFolderOpen />, href: "#projets" },
        { title: "CV", icon: <FaFileAlt />, href: "#cv" },
    ];

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-black/50 backdrop-blur-md text-white p-3 rounded-full shadow-lg space-x-6 border border-white/20">
            {navItems.map((item) => (
                <a
                    key={item.title}
                    href={item.href}
                    className="flex flex-col items-center text-sm hover:text-gray-300 transition duration-300"
                >
                    <div className="text-xl">{item.icon}</div>
                    <span>{item.title}</span>
                </a>
            ))}
        </div>
    );
}

export default FloatingNav;
