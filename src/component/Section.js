import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* 

gsap.registerPlugin(ScrollTrigger);

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1
  });
  
  if(anim) {
    anim.restart();
  }
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => goToSection(i)
  });
  
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i),
  });
});


*/


function Sections() {


    function goToSection(i, anim) {


        const Section_trigger = useRef(null);
        useEffect(() => {
        gsap.to(window, {
          scrollTo: {y: i*innerHeight, autoKill: false},
          duration: 1
        });
        
        if(anim) {
          anim.restart();
        }
      }
      
      gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => goToSection(i)
        });
        
        ScrollTrigger.create({
          trigger: panel,
          start: "bottom bottom",
          onEnterBack: () => goToSection(i),
        });
      });
      }, []);
    
      return (
        <div className="mouse-div">
        <img ref={Section_trigger} id="mouse-icon" className="mouse-img" src={mouse} alt="mouse-scroll" />
        </div>   
        );
    
    
    
    }


export default Sections;