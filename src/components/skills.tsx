import React from "react";
import Image from "next/image";

export function Skills() {
    return (
        <div className="w-full max-w-xl p-8 mx-auto sm:px-0 sm:py-16">
            <h2 className="mb-10 text-xl font-bold">Skills</h2>

            <ol className="flex flex-wrap justify-center gap-5">
                {skills.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        <Image
                            src={item.icon}
                            width={1080}
                            height={1080}
                            alt="Skill Logo"
                            className={`${item.name === "" ? "w-16 h-fit" : "w-7 h-7"}`}
                        />
                        <p className="text-xs font-semibold">
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
        icon: "/archlinux.png",
        name: "Linux",
    },
    {
        icon: "/kotlin.png",
        name: "Kotlin",
    },
    {
        icon: "/typescript.png",
        name: "Typescript",
    },
    {
        icon: "/nestjs.png",
        name: "Nest.Js",
    },
    {
        icon: "/postgres.png",
        name: "PostgresSQL",
    },
    {
        icon: "/docker.png",
        name: "Docker",
    },
    {
        icon: "/tailwindcss.png",
        name: "Tailwindcss",
    },
    {
        icon: "/nextjs.png",
        name: "",
    },
    {
        icon: "/expo.png",
        name: "",
    },
];
