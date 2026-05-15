import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
// import Projects from "@/components/pages/Project";
import Services from "@/components/sections/Services";

function Home(){
    return(
        <div>
            <Hero />
            <About />
            {/* <Projects /> */}
            <Services />
            <Contact />
        </div>
    )
}

export default Home
