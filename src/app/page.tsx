import AboutSection from "@/components/AboutSection";
import ContactsSection from "@/components/ContactsSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactsSection/>
    </>
  );
}
