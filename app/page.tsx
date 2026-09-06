import { StageProvider } from "@/lib/stage";
import { ModeProvider } from "@/lib/mode";
import ExperienceShell from "@/components/experience/ExperienceShell";
import SmoothScroll from "@/components/system/SmoothScroll";
import Cursor from "@/components/system/Cursor";
import Nav from "@/components/system/Nav";
import ProgressIndex from "@/components/system/ProgressIndex";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Work from "@/components/sections/Work";
import Projects from "@/components/sections/Projects";
import Practice from "@/components/sections/Practice";
import Experience from "@/components/sections/Experience";
import Academic from "@/components/sections/Academic";
import Certifications from "@/components/sections/Certifications";
import Stack from "@/components/sections/Stack";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <StageProvider>
      <ModeProvider>
        <SmoothScroll />
        <Cursor />

        <ExperienceShell>
          <Nav />
          <ProgressIndex />

          <main id="main">
            <Hero />
            <Manifesto />
            <Experience />
            <Work />
            <Projects />
            <Practice />
            <Academic />
            <Certifications />
            <Stack />
            <About />
            <Contact />
          </main>

          <Footer />
        </ExperienceShell>
      </ModeProvider>
    </StageProvider>
  );
}
