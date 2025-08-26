import Hero from "./sections/Hero/Hero";
import Navbar from "./components/navbar";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/footer";

function App() {

  return (
    <div>

    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />

    </div>

    
  )
}

export default App
