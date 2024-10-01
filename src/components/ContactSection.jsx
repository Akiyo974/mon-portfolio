import React from "react";

function ContactSection() {
    return (
        <section className="flex flex-wrap items-center justify-between text-white p-8 min-h-[60vh]">
            {/* Partie gauche: Formulaire de contact */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-violet-500 mb-6">Connectons-nous</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Votre nom"
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-violet-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Adresse e-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Votre adresse e-mail"
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-violet-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Votre message"
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-violet-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                    >
                        Envoyer
                    </button>
                </form>
            </div>

            {/* Partie droite: Objet volant */}
            <div className="w-full md:w-1/2 flex items-center justify-center relative">
                <div className="animate-bounce-slow">
                    <img src="../assets/satellite.png" alt="Objet volant" className="w-23 h-23" />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
