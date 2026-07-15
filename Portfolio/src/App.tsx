import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ReleasePipeline from "./components/ReleasePipeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-paper">
      <Nav />
      <ReleasePipeline />
      <main id="top">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
