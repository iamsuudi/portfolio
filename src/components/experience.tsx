import React from "react";
import Image from "next/image";

export function ExperienceTimeline() {
    return (
        <div className="w-full max-w-xl p-8 mx-auto sm:p-16">
            <h2 className="mb-20 text-4xl font-bold text-center">Experience</h2>

            <ol className="border-s border-s-foreground/40">
                {experiences.map((item, index) => (
                    <li key={index} className="relative pl-4 mb-10 ms-7">
                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-foreground top-1 -left-12 outline-offset-2 outline-foreground outline-2">
                            <Image
                                src={item.logo}
                                width={32}
                                height={32}
                                alt="Company Logo"
                                className="w-full h-full rounded-full"
                            />
                        </span>

                        <div className="flex items-center justify-between">
                            <h3 className="mb-1 font-black">{item.company}</h3>
                            <span className="text-xs font-semibold text-muted-foreground">
                                {item.time.start} - {item.time.end}
                            </span>
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
