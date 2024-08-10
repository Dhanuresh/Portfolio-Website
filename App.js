import Navbar from "./component1/Navbar";
import About from "./component1/About";
import Skills from "./component1/Skill";
import Projects from "./component1/Project";
import Contact from "./component1/Contact";
import Footer from "./component1/Footer";
import Hero from "./component1/Hero";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}