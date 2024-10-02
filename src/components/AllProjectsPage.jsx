import React, { useState, useEffect } from "react";
import githubImage from "../assets/github.png";
import webanaImage from "../assets/webana.png";
import akimusicImage from "../assets/akimusic.png";
import { FaGithub } from "react-icons/fa";

function AllProjectsPage() {
    const [githubProjects, setGithubProjects] = useState([]);
    const [manualProjects, setManualProjects] = useState([
        {
            title: "webana",
            description: "Refonte du premier site que j'ai créé en intégration multimédia, sur l'histoire des katanas. Ce site utilise HTML, CSS, JavaScript, Bootstrap et jQuery.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
            image: webanaImage,
            link: "https://akiyo974.github.io/webana/",
            code: "https://github.com/Akiyo974/webana",
        },
        {
            title: "AkiMusic",
            description: "Page d'accueil d'un site de streaming musical, développée avec PHP, Bootstrap et jQuery, offrant une belle présentation moderne.",
            technologies: ["PHP", "Bootstrap", "jQuery"],
            image: akimusicImage,
            link: "https://christenalexisdijoux.techniquesmedia.com/AkiMusic/index.php#",
            code: "",
        },
    ]);

    useEffect(() => {
        fetch("https://api.github.com/users/Akiyo974/repos")
            .then((response) => response.json())
            .then(async (data) => {
                const filteredRepos = data.filter((repo) => !repo.fork);
                const projectsWithLanguages = await Promise.all(
                    filteredRepos.map(async (repo) => {
                        const languagesResponse = await fetch(repo.languages_url);
                        const languagesData = await languagesResponse.json();
                        const languages = Object.keys(languagesData);
                        return {
                            ...repo,
                            languages,
                        };
                    })
                );

                setGithubProjects(projectsWithLanguages);
            })
            .catch((error) => console.error("Erreur lors de la récupération des repositories :", error));
    }, []);

    const uniqueProjects = [];
    const projectTitles = new Set();

    [...manualProjects, ...githubProjects].forEach((project) => {
        const title = project.title || project.name;
        if (!projectTitles.has(title)) {
            projectTitles.add(title);
            uniqueProjects.push(project);
        }
    });

    return (
        <section className="py-16 text-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-md text-center mx-auto">
                    <h1 className="text-violet-500 text-3xl font-extrabold sm:text-4xl">Tous mes projets</h1>
                    <div className="flex justify-center items-center mt-4">
                        <button
                            className="flex items-center bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-150"
                            style={{ cursor: "default" }}
                        >
                            <FaGithub className="text-white mr-2" />
                            <span className="text-white font-medium">
                                {githubProjects.length} Repositories
                            </span>
                        </button>
                    </div>
                    <p className="text-gray-400 mt-6">
                        Voici l'ensemble des projets sur lesquels j'ai travaillé, incluant ceux sur GitHub et d'autres projets personnels.
                    </p>
                </div>
                <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Affichage des projets uniques */}
                    {uniqueProjects.map((project, idx) =>
                        project.html_url ? (
                            <GithubProjectCard key={`github-${idx}`} repo={project} />
                        ) : (
                            <ProjectCard key={`manual-${idx}`} project={project} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <li className="flex flex-col border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 hover:shadow-xl duration-300 ease-in-out">
            <img
                src={project.image || githubImage} // Utiliser l'image du projet ou l'image par défaut
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-col flex-grow p-6">
                <h4 className="text-xl text-violet-400 font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-400 flex-grow">
                    {project.description}
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
                    {project.link && (
                        <a
                            href={project.link}
                            className="py-2 px-4 bg-violet-600 text-white font-medium rounded-lg shadow-md hover:bg-violet-500 hover:shadow-lg transition duration-150"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Voir le projet
                        </a>
                    )}
                    {project.code && (
                        <a
                            href={project.code}
                            className="text-sm text-violet-500 hover:text-violet-400 font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Code source
                        </a>
                    )}
                </div>
            </div>
        </li>
    );
}

function GithubProjectCard({ repo }) {
    return (
        <li className="flex flex-col border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-800 hover:shadow-xl duration-300 ease-in-out">
            <img
                src={githubImage}
                alt={`${repo.name} screenshot`}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-col flex-grow p-6">
                <h4 className="text-xl text-violet-400 font-semibold mb-3">{repo.name}</h4>
                <p className="text-gray-400 flex-grow">
                    {repo.description || "Pas de description disponible."}
                </p>
                <div className="mt-4 space-y-1">
                    <h5 className="text-gray-300 font-medium">Technologies principales :</h5>
                    <ul className="flex flex-wrap gap-2">
                        {repo.languages && repo.languages.length > 0 ? (
                            repo.languages.map((lang, langIdx) => (
                                <li key={langIdx} className="px-3 py-1 rounded-full text-sm border border-gray-700">
                                    {lang}
                                </li>
                            ))
                        ) : (
                            <li className="text-sm text-gray-400">Langages non disponibles</li>
                        )}
                    </ul>
                </div>
                <div className="flex items-center mt-6 space-x-4">
                    <a
                        href={repo.html_url}
                        className="py-2 px-4 bg-violet-600 text-white font-medium rounded-lg shadow-md hover:bg-violet-500 hover:shadow-lg transition duration-150"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Voir sur GitHub
                    </a>
                </div>
            </div>
        </li>
    );
}


export default AllProjectsPage;
