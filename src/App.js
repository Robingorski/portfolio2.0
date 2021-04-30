import React from 'react';
import './App.scss';
import logo from '../src/assets/pineapple.svg'
import QS from '../src/assets/qs-screen.png';
import Quire from '../src/assets/quire-screen.png';
import SSS from '../src/assets/service-security-sweden.png';
import KYH from '../src/assets/kyh-onboarding.png';
import mouse from '../src/assets/mouse-scroll.svg';
/* import { gsap } from "gsap"; */
/* import { ScrollTrigger } from "gsap/ScrollTrigger"; */



/* gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".landingpage"); */

/* gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-page",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".horizontal-page").offsetWidth
  }
}); */

/* gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-page",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: () => "+=" + (".landingpage").offsetWidth
    }
  }); */

/* gsap.to(sections, {
    x: () => -(sections.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-page",
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      end: () => "+=" + (".horizontal-page").offsetWidth
    }
  }) */


/* gsap.to(sections, {
    x: () => -(sections.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-page",
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      end: () => "+=" + sections.offsetWidth
    }
  }) */



function App() {

    
    return (
        <div className="horizontal-page">
        <section className="landingpage">
            <div className="pineapple-div">
                <img className="pineapple" src={logo} alt="Pineapple-logo" />
            </div>
            <div className="HW_container">
                <div className="HW_container_context">Hello World!</div>
                <div className="HW_container_context">My name is Robin and im a Front-end developer.</div>
            </div>
            <div className="mouse-div">
                <img className="mouse-img" src={mouse} alt="mouse-scroll" />
            </div>
        </section>

        <section className="landingpage">
            <img className="landingpage_screen" src={QS} alt="Quick Solution page"/>
            <div className="qs_case_container">
                <div className="case_title">01 - Quick Solution</div>
                <div className="case_hashtags">#HTML, #CSS, #Javascript, #ANIMATIONS</div>
                <div className="case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</div>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://www.aftonbladet.se")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage">
            <img className="landingpage_screen" src={Quire} alt="Quire page"/>
            <div className="quire_case_container">
                <div className="case_title">02 - Quire</div>
                <div className="case_hashtags">#HTML, #CSS, #Javascript, #ANIMATIONS</div>
                <div className="case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</div>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://www.aftonbladet.se")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage">
            <img className="landingpage_screen" src={SSS} alt="Service Security Sweden page"/>
            <div className="sss_case_container">
                <div className="case_title">03 - Service Security Sweden</div>
                <div className="case_hashtags">#HTML, #CSS, #Javascript, #ANIMATIONS</div>
                <div className="case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</div>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://www.aftonbladet.se")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage">
            <img className="landingpage_screen" src={KYH} alt="KYH page"/>
            <div className="kyh_case_container">
                <div className="case_title">04 - KYH</div>
                <div className="case_hashtags">#HTML, #CSS, #Javascript, #ANIMATIONS</div>
                <div className="case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</div>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://www.aftonbladet.se")}>Visit page</button>
                </div>
            </div>
        </section>
        
        
        </div>
    );

}

export default App;





/*   // scroll down arrow animation (animation to the mouse)
gsap.to(".arrow", {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true}); */