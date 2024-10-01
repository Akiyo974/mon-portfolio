import React from "react";
import Typing from "react-typing-effect";
import './Hero.css'; // Assurez-vous de lier ce fichier pour appliquer les styles personnalisés

function Hero() {
    return (
        <section className="text-white bg-black py-16 px-10 md:px-16 lg:px-8">
            <div className="space-y-5 text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                    Bon{getGreeting()}, développeur
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    Je m'appelle <span className="text-violet-500">Christen Dijoux</span>, mais vous pouvez m'appeler <span className="text-violet-500">Akiyo</span>.
                </h2>
                <h3 className="text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500 font-bold">
                    <Typing
                        text={["Développeur Front-end", "Passionné d'Open Source", "Créateur d'expériences numériques"]}
                        speed={100}
                        eraseDelay={2000}
                        typingDelay={500}
                    />
                </h3>
                <div className="gap-x-3 space-y-3">
                    <a
                        href="#portfolio"
                        className="py-3 px-6 bg-violet-600 text-white font-medium rounded-lg shadow-md hover:bg-violet-500 hover:shadow-lg transition duration-150"
                    >
                        Découvrez mon portfolio
                    </a>
                </div>
            </div>

            {/* Section À propos avec l'éditeur de code stylisé, largeur agrandie */}
            <div className="mt-20 w-full lg:w-6/6 bg-gray-900 text-gray-100 rounded-lg border border-gray-700 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4 px-2 py-1 bg-gray-800 rounded-t-lg">
                    <span className="text-sm font-medium text-gray-300">Aperçu du profil</span>
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                {/* Zone de contenu interactive */}
                <div className="bg-gray-800 p-6 rounded-b-lg h-96 overflow-auto">
                    <p className="text-sm text-gray-300">// À propos de moi</p>
                    <div className="mt-4 space-y-3 text-left">
                        <p className="text-gray-400">
                            Je suis actuellement étudiant en <strong>Techniques d'Intégration Multimédia</strong> au <strong>Cégep de Jonquière</strong>, où je développe des compétences en design et développement web. Passionné par la création d'<strong>expériences utilisateurs captivantes</strong>, j'aime travailler avec des technologies comme <strong>HTML, CSS, JavaScript, PHP, MySQL, React, jQuery, Bootstrap</strong> et <strong>SCSS</strong>. Mon objectif est de contribuer à des projets innovants en tant que <strong>développeur front-end</strong>.
                        </p>
                        <p className="text-gray-400">
                            Mon parcours m'a également mené à travailler comme <strong>chargé de communication</strong> au <strong>CHU de La Réunion</strong>, où j'ai géré la mise à jour du site web et créé des supports de communication variés. Cette expérience a nourri ma passion pour le web et m'a poussé à approfondir mes compétences techniques.
                        </p>
                        <p className="text-gray-400">
                            J'aime <strong>explorer de nouveaux horizons</strong> et relever des <strong>défis</strong> dans des environnements dynamiques, où je peux appliquer ma créativité à des interfaces utilisateurs <strong>esthétiques et fonctionnelles</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function getGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) return "jour";
    if (hours < 18) return " après-midi";
    return "soir";
}

export default Hero;
