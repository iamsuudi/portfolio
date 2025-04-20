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
                            className={`w-${item.size} h-fit`}
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
        size: 10,
        icon: "/archlinux.png",
        name: "Linux",
    },
    {
        size: 20,
        icon: "/go.png",
    },
    {
        size: 10,
        icon: "/kotlin.png",
        name: "Kotlin",
    },
    {
        size: 10,
        icon: "/typescript.png",
        name: "Typescript",
    },
    {
        size: 10,
        icon: "/nestjs.png",
        name: "Nest.Js",
    },
    {
        size: 10,
        icon: "/postgres.png",
        name: "PostgresSQL",
    },
    {
        size: 10,
        icon: "/docker.png",
        name: "Docker",
    },
    {
        size: 10,
        icon: "/tailwindcss.png",
        name: "Tailwindcss",
    },
    {
        size: 16,
        icon: "/nextjs.png",
        name: "",
    },
    {
        size: 16,
        icon: "/expo.png",
        name: "",
    },
];
