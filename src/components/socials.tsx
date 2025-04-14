import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandReddit,
    IconBrandDiscord,
    IconBrandTelegram,
    IconBrandLinkedin
} from "@tabler/icons-react";
import { Mail } from "lucide-react";

export function Socials() {
    const links = [
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="w-full h-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/iamsuudi",
        },
        {
            title: "Discord",
            icon: (
                <IconBrandDiscord className="w-full h-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://discord.com/users/1147595040319868999",
        },
        {
            title: "Reddit",
            icon: (
                <IconBrandReddit className="w-full h-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.reddit.com/u/iamsuudi",
        },
        {
            title: "Email",
            icon: (
                <Mail className="w-full h-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "mailto:suudiabdulfetah@gmail.com",
        },
        {
            title: "Telegram",
            icon: (
                <IconBrandTelegram className="w-full h-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://t.me/iamsuudi",
        },

        {
            title: "X/Twitter",
            icon: (
                <IconBrandX className="w-full h-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.twitter.com/iamsuudi",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="w-full h-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/iamsuudi",
        },
    ];

    return (
        <div className="fixed bottom-0 z-50 flex items-center justify-center w-screen h-20">
            <div className="flex justify-end w-full max-w-xl h-fit md:justify-center">
                <FloatingDock
                    // mobileClassName="translate-y-20"
                    items={links}
                />
            </div>
        </div>
    );
}
