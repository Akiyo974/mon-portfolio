import React from "react";

const technologies = [
    { name: "HTML", imgSrc: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS", imgSrc: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { name: "jQuery", imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
    { name: "AJAX", imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
    { name: "Bootstrap", imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    { name: "Tailwind CSS", imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" }, 
    { name: "SCSS", imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png" },
    { name: "PHP", imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
    { name: "CodeIgniter", imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
    { name: "SQL", imgSrc: "https://cdn-icons-png.flaticon.com/512/528/528260.png" },
    { name: "API REST", imgSrc: "https://cdn-icons-png.flaticon.com/512/919/919851.png" }, 
];

function InfiniteMovingTechnologies() {
    return (
        <div className="overflow-hidden w-full relative bg-black py-8">
            {/* Bande du haut */}
            <div className="flex items-center w-max animate-scroll-fast space-x-2 mb-8">
                {technologies.concat(technologies).map((tech, idx) => (
                    <div key={idx} className="flex items-center bg-gray-900 p-2 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-violet-600 hover:scale-105">
                        <img src={tech.imgSrc} alt={`${tech.name} logo`} className="w-6 h-6 mr-3" />
                        <span className="text-white text-sm">{tech.name}</span>
                    </div>
                ))}
            </div>

            {/* Bande du bas */}
            <div className="flex items-center w-max animate-scroll-slow space-x-2">
                {technologies.concat(technologies).map((tech, idx) => (
                    <div key={`slow-${idx}`} className="flex items-center bg-gray-900 p-2 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-violet-600 hover:scale-105">
                        <img src={tech.imgSrc} alt={`${tech.name} logo`} className="w-6 h-6 mr-3" />
                        <span className="text-white text-sm">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfiniteMovingTechnologies;
