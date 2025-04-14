import { ExperienceTimeline } from "@/components/experience";
import { Socials } from "@/components/socials";
import HeroSection from "@/components/hero-section";
import { Skills } from "@/components/skills";
import CallToAction from "@/components/call-to-action";

export default function Home() {
    return (
        <div className="relative min-h-screen pb-20">
            <HeroSection />
            <ExperienceTimeline />
            <Skills />
            <CallToAction />
            <Socials />
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
        </div>
    );
}
