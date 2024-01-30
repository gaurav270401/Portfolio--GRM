import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact_Me";
import Projects from "./Projects";
import Resume from "./Resume";
import Services from "./Services";
import Footer from "./footer";
import Navbar from "./Navbar";
import React,{useRef,useEffect} from "react";
import { animateScroll } from "react-scroll";

const Main = () =>{
  const homeRef = useRef();
  const aboutRef  = useRef();
  const resumeRef =useRef();
  const servicesRef = useRef();
  const projectsRef = useRef();
  const contactsRef = useRef();

  window.onbeforeunload = function(e)
  {
      localStorage.setItem('reload-url', window.location.href);
  }

  window.onload = function(e)
{
    if (localStorage.getItem('reload-url') != null)
    {
        if (window.location.href === localStorage.getItem('reload-url'))
        {
          animateScroll.scrollTo(homeRef.current.offsetTop, {
            duration: 1000,
            smooth: "easeInOutQuad",
        });
        }
    }
}
 
    return(
      <div>
        <Navbar aboutRef={aboutRef} homeRef={homeRef} resumeRef= {resumeRef} servicesRef={servicesRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
        <Banner homeRef={homeRef} />
        <About aboutRef={aboutRef}/>
        <Resume resumeRef={resumeRef}/>
        <Services servicesRef={servicesRef}/>
        <Projects projectsRef={projectsRef} homeref={homeRef}/>
        <Contact contactsRef={contactsRef}/>
        <Footer
          aboutRef={aboutRef} homeRef={homeRef} resumeRef= {resumeRef} servicesRef={servicesRef} projectsRef={projectsRef} contactsRef={contactsRef}
        />
        
      </div>
    );
}
export default Main;