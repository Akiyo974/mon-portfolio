import React from "react";
import Typing from "react-typing-effect";
import './Hero.css';

function Hero() {
    return (
        <section className="text-white bg-black h-screen flex flex-col justify-center px-10 md:px-24 lg:px-48">
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
