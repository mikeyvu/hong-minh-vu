import { Nav } from "./components/Nav";
import { ScrollToTop } from "./components/ScrollToTop";
import { Hero } from "./components/Hero";
import { Experience, Education } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function Divider() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div style={{ borderTop: "1px solid #E7E3DA" }} />
        </div>
    );
}

export default function App() {
    return (
        <main className="overflow-x-hidden">
            <Nav />
            <ScrollToTop />
            <section id="hero">
                <Hero />
            </section>
            <Divider />
            <section id="experience">
                <Experience />
            </section>
            <Divider />
            <section id="education">
                <Education />
            </section>
            <Divider />
            <section id="projects">
                <Projects />
            </section>
            <Divider />
            <section id="skills">
                <Skills />
            </section>
            <Divider />
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}