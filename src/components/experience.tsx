import React from "react";
import Image from "next/image";
import { Dot } from "lucide-react";

export function ExperienceTimeline() {
    return (
        <div className="w-full max-w-xl p-8 mx-auto sm:px-0 sm:py-16">
            <h2 className="mb-10 text-2xl font-bold">Experience</h2>

            <ol className="ml-6 border-s border-s-foreground/40">
                {experiences.map((item, index) => (
                    <li key={index} className="relative pl-4 mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-foreground -left-12">
                            <Image
                                src={item.logo}
                                width={1080}
                                height={1080}
                                alt="Company Logo"
                                className="w-8 h-8 rounded-full"
                            />
                        </span>

                        <div className="flex items-center justify-between">
                            <h3 className="mb-1 font-bold">{item.company}</h3>
                            <div className="flex items-center text-xs font-semibold text-muted-foreground">
                                <p>{item.time.start}</p>
                                <span className="mb-1 text-sm font-black scale-125">
                                    &#xa0;&#xa0;&#x279B;&#xa0;&#xa0;
                                </span>
                                {item.time.end === "Present" ? (
                                    <p className="flex items-center gap-1">
                                        <Dot className="text-green-400 size-3 scale-[3] animate-pulse" />
                                        <span>{item.time.end}</span>
                                    </p>
                                ) : (
                                    <p>{item.time.end}</p>
                                )}
                            </div>
                        </div>

                        <p className="block mb-1 text-sm font-semibold leading-none">
                            {item.role}
                        </p>

                        <p className="mb-4 text-xs font-semibold text-muted-foreground">
                            {item.type}
                            <span className="text-sm font-black scale-125">
                                &#xa0;&#xa0;&#xb7;&#xa0;&#xa0;
                            </span>
                            {item.employment}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

const experiences = [
    {
        logo: "/hulmitech.png",
        company: "HulmiTech",
        time: {
            start: "Sep 2024",
            end: "Present",
        },
        role: "Full Stack Developer",
        type: "Hybrid",
        employment: "Full-Time",
    },
    {
        logo: "/niletech.png",
        company: "NileTech",
        time: {
            start: "Aug 2024",
            end: "Present",
        },
        role: "Full Stack Developer",
        type: "Remote",
        employment: "Part-Time",
    },
    {
        logo: "/hinta.png",
        company: "HINTA",
        time: {
            start: "May 2024",
            end: "Aug 2024",
        },
        role: "Full Stack Developer",
        type: "Freelance Contract",
        employment: "Full-Time",
    },
];
