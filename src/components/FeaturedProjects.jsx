import React, { useState } from "react";

const projects = [
    {
        "title": "AkiProject",
        "description": "Un gestionnaire de tâches combiné à un outil de conversation en temps réel, développé avec Bootstrap, jQuery, et PHP. Le projet inclut la gestion des utilisateurs avec des fonctionnalités comme l'inscription, la connexion, l'envoi de messages, et la gestion basique des tâches. Bien que non finalisé, il est fonctionnel pour les fonctionnalités implémentées.",
        "technologies": ["HTML", "CSS", "JavaScript", "jQuery", "AJAX", "PHP", "Bootstrap"],
        "image": "https://via.placeholder.com/600x400",
        "link": "https://christenalexisdijoux.techniquesmedia.com/cms1/wr/Workspace/index.php",
        "code": "https://github.com/Akiyo974/akiproject"
    },   
    {
        title: "Webana",
        description: "Site sur l'histoire des katanas utilisant HTML, CSS, JavaScript, Bootstrap et jQuery.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
        image: "https://via.placeholder.com/600x400",
        link: "https://akiyo974.github.io/webana/",
        code: "https://github.com/Akiyo974/webana",
    },
    {
        title: "AkiMusic",
        description: "Application de streaming musical utilisant PHP, Bootstrap, jQuery, et l'API de Spotify.",
        technologies: ["PHP", "Bootstrap", "jQuery", "Spotify API"],
        image: "https://via.placeholder.com/600x400",
        link: "https://akimusic.example.com",
        code: "https://github.com/user/akimusic",
    },
];

function FeaturedProjects() {
    return (
        <section className="py-16 text-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-md">
                    <h1 className="text-violet-500 text-3xl font-extrabold sm:text-4xl">Projets en vedette</h1>
                    <p className="text-gray-400 mt-2">
                        Découvrez quelques-uns des projets sur lesquels j'ai travaillé récemment.
                    </p>
                </div>
                <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </ul>
                <div className="mt-12 text-center">
                    <a
                        href="/projets"
                        className="inline-block py-3 px-6 bg-violet-600 text-white font-medium rounded-lg shadow-md hover:bg-violet-500 hover:shadow-lg transition duration-150"
                    >
                        Voir tous les projets
                    </a>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const maxLength = 100;

    const handleToggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <li className="flex flex-col border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 hover:shadow-xl duration-300 ease-in-out">
            <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-col flex-grow p-6">
                <h4 className="text-xl text-violet-400 font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-400 flex-grow">
                    {showFullDescription || project.description.length <= maxLength
                        ? project.description
                        : `${project.description.slice(0, maxLength)}...`}
                    {project.description.length > maxLength && (
                        <button
                            onClick={handleToggleDescription}
                            className="text-violet-500 hover:text-violet-400 ml-2"
                        >
                            {showFullDescription ? "Voir moins" : "Voir plus"}
                        </button>
                    )}
                </p>
                <div className="mt-4 space-y-1">
                    <h5 className="text-gray-300 font-medium">Technologies utilisées :</h5>
                    <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIdx) => (
                            <li key={techIdx} className="px-3 py-1 rounded-full text-sm border border-gray-700">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center mt-6 space-x-4">
                    <a
                        href={project.link}
                        className="py-2 px-4 bg-violet-600 text-white font-medium rounded-lg shadow-md hover:bg-violet-500 hover:shadow-lg transition duration-150"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Voir le projet
                    </a>
                    <a
                        href={project.code}
                        className="text-sm text-violet-500 hover:text-violet-400 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Code source
                    </a>
                </div>
            </div>
        </li>
    );
}

export default FeaturedProjects;
