import React from "react";
import Image from "next/image";

export function Skills() {
    return (
        <div className="w-full max-w-xl p-8 mx-auto sm:px-0 sm:py-16">
            <h2 className="mb-10 text-2xl font-bold">Skills</h2>

            <ol className="flex flex-wrap justify-center gap-5">
                {skills.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        <Image
                            src={item.icon}
                            width={1080}
                            height={1080}
                            alt="Skill Logo"
                            className={item.className}
                        />
                        <p className="text-sm font-semibold">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

const skills = [
    {
        className: "w-10 h-fit",
        icon: "/archlinux.png",
        name: "Linux",
    },
    {
        className: "w-20 h-fit",
        icon: "/go.png",
    },
    {
        className: "w-10 h-fit",
        icon: "/kotlin.png",
        name: "Kotlin",
    },
    {
        className: "w-10 h-fit",
        icon: "/typescript.png",
        name: "Typescript",
    },
    {
        className: "w-10 h-fit",
        icon: "/nestjs.png",
        name: "Nest.Js",
    },
    {
        className: "w-10 h-fit",
        icon: "/postgres.png",
        name: "PostgresSQL",
    },
    {
        className: "w-10 scale-150 h-fit mx-3",
        icon: "/docker.png",
        name: "Docker",
    },
    {
        className: "w-10 h-fit",
        icon: "/tailwindcss.png",
        name: "Tailwindcss",
    },
    {
        className: "w-16 h-fit",
        icon: "/nextjs.png",
    },
    {
        className: "w-16 h-fit",
        icon: "/expo.png",
    },
];
