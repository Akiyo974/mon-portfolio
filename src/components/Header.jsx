import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import planetImage from "../assets/planete.png";
import satelliteImage from "../assets/satellite.png";
import logo from "../assets/logo.png";

function Header() {
    const planetRef = useRef(null);
    const satelliteRef = useRef(null);

    useEffect(() => {
        // Animation de rotation de la planète
        gsap.to(planetRef.current, {
            rotate: 360,
            duration: 20,
            repeat: -1,
            ease: "linear",
        });

        // Animation du satellite qui gravite autour de la planète
        gsap.to(satelliteRef.current, {
            rotate: 360,
            duration: 10,
            repeat: -1,
            ease: "linear",
            transformOrigin: "top left",
        });
    }, []);

    return (
        <header className="relative w-full h-screen overflow-hidden bg-black">
            {/* Fond étoilé avec dégradé */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
                        backgroundSize: "cover",
                        opacity: "0.5",
                    }}
                ></div>
            </div>

            {/* Planète centrale */}
            <div
                ref={planetRef}
                className="relative flex items-center justify-center mx-auto"
                style={{
                    width: "256px",
                    height: "256px",
                    backgroundImage: `url(${planetImage})`,
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
                {/* Satellite qui gravite autour */}
                <div
                    ref={satelliteRef}
                    className="absolute"
                    style={{
                        width: "64px",
                        height: "64px",
                        top: "-80px",
                        left: "-80px",
                        backgroundImage: `url(${satelliteImage})`,
                        backgroundSize: "cover",
                        borderRadius: "50%",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                ></div>

                {/* Logo au centre de la planète */}
                <img
                    src={logo}
                    alt="Logo de Christen Dijoux"
                    className="w-24 h-24 opacity-30"
                />
            </div>
        </header>
    );
}

export default Header;
