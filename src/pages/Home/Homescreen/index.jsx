import Navbar from "../Navbar";
import Herosection from "../Herosection";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";


export default function Home() {
    return (
        <>
        <Navbar/>
        <Herosection/>
        <Projects/>
        <Skills/>
        <Contact />
        </>
    );
}