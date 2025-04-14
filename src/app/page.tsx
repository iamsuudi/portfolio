import { ExperienceTimeline } from "@/components/experience";
import { Socials } from "@/components/socials";
import HeroSection from "@/components/hero-section";

export default function Home() {
    return (
        <div className="min-h-screen relative pb-20">
            <HeroSection />
            <ExperienceTimeline />
            <Socials />
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
        </div>
    );
}
