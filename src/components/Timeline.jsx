"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const Timeline = ({ titles }) => {
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.scrollHeight);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    // Transformation de la hauteur de la timeline et opacité des éléments
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // Animation de la position de la timeline : de gauche à droite
    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="w-full bg-black text-white p-8">
            {/* Contenu de la timeline */}
            <div className="relative w-full max-w-4xl mx-auto space-y-10">
                {titles.map((title, index) => (
                    <div key={index} className="relative flex items-start gap-4">
                        {/* Point de la timeline */}
                        <motion.div
                            style={{
                                opacity: opacityTransform,
                            }}
                            className="w-6 h-6 bg-violet-500 rounded-full flex-shrink-0"
                        />

                        {/* Contenu de chaque titre */}
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold">{title}</h3>
                            <p className="text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                ))}

                {/* Ligne de la timeline */}
                <motion.div
                    style={{
                        height: heightTransform,
                        x: xTransform,
                    }}
                    className="absolute top-0 left-0 md:left-auto md:right-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
                />
            </div>
        </div>
    );
};
