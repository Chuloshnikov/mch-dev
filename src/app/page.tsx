import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ExperienceSection/>
    </div>
  );
}
