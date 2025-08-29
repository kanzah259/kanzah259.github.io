import Hero from "./sections/Hero/Hero";
import Navbar from "./components/navbar";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
  if(isDarkMode) {
    document.documentElement.classList.add("dark");
    console.log("it's working");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [isDarkMode]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-gray-900 text-black dark:text-[white] transition-colors duration-300">

    <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
