import React from 'react';
import './App.scss';
import Mouse from './component/Mouse';
import Textwriter from './component/Textwriter';
import logo from '../src/assets/pineapple.svg'
import QS from '../src/assets/qs-screen.png';
import Quire from '../src/assets/quire-screen.png';
import SSS from '../src/assets/service-security-sweden.png';
import KYH from '../src/assets/kyh-onboarding.png';
import selfie from '../src/assets/selfie.jpg';







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

  /* gsap.fromTo('#cursor', {autoAlpha: 0, x:-10}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});

let texteditor = gsap.to("#text", {text: {value: "this is a custom text"}, duration: 5, delay: 1, ease: "none"})
 */


function App() {

    
    return (
        <div className="horizontal-page">
        <section className="landingpage">
            <div className="pineapple-div">
                <img className="pineapple" src={logo} alt="Pineapple-logo" />
            </div>
            <div className="HW_container">
              <Textwriter/>
                <div className="HW_container_context">My name is Robin and im a Front-end developer.</div>
            </div>
            <Mouse/>
            <div className="page_indicator_container">
              <div className="page_indicator-qs"></div>
              <div className="page_indicator-quire"></div>
              <div className="page_indicator-sss"></div>
              <div className="page_indicator-kyh"></div>
              <div className="page_indicator-about_me"></div>
            </div>

        </section>

        <section className="landingpage">
            <img className="landingpage_screen" src={QS} alt="Quick Solution page"/>
            <div className="qs_case_container">
                <h1 className="case_title">01 - Quick Solution</h1>
                <p className="case_hashtags">#HTML, #CSS, #Javascript, #ANIMATIONS</p>
                <p className="case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</p>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://www.aftonbladet.se")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage">
            <img className="landingpage_screen" src={Quire} alt="Quire page"/>
            <div className="quire_case_container">
                <h1 className="case_title">02 - Quire</h1>
                <p className="case_hashtags">#HTML, #CSS, #Javascript, #ANIMATIONS</p>
                <p className="case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</p>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://www.aftonbladet.se")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage">
            <img className="landingpage_screen" src={SSS} alt="Service Security Sweden page"/>
            <div className="sss_case_container">
                <h1 className="case_title">03 - Service Security Sweden</h1>
                <p className="case_hashtags">#HTML, #CSS, #Javascript, #ANIMATIONS</p>
                <p className="case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</p>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://www.aftonbladet.se")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage">
            <img className="landingpage_screen" src={KYH} alt="KYH page"/>
            <div className="kyh_case_container">
                <h1 className="case_title">04 - KYH</h1>
                <p className="case_hashtags">#HTML, #CSS, #Javascript, #ANIMATIONS</p>
                <p className="case_context">Customer wanted animations on there site. While i starting to inspect how to apply the animations i saw a bad lighthouse score due to a lot of “deadcode”. So i re-coded the whole site and added animations.</p>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://www.aftonbladet.se")}>Visit page</button>
                </div>
            </div>
        </section>
        
        <section className="about-me">
      <img className="selfie-img" src={selfie} alt="selfie" />
      <div className="about-me-text_container">
        <div>
          <h4>Robin Gorski</h4>
          <p className="about-me_context"> - Hello stranger!</p>
        </div>
        <div>
          <p className="about-me_context">I am currently studying Front End Development in Stockholm, Sweden.</p>
          <p className="about-me_context">Where I enjoy develop clean designs and smart solutions for the web. </p>
        </div>
        <div className="about-me-text_skills">
          <p className="about-me_context">Soft skills - Team Work, Communication, Leadership.</p>
          <p className="about-me_context">Tools - Github, Figma, Visual Studio Code Etc.</p>
          <p className="about-me_context">Hard skills - HTML, CSS, ES6.</p>
        </div>
        <div className="about-me-text_contact">
          <p className="about-me_context">Check out my Github:</p>
          <a className="about-me_links" href="https://github.com/Robingorski">www.Github.com/RobinGorski</a>
          <p className="about-me_context">Or if you are intressed about what i've done erlier in my career, check my LinkedIn:</p>
          <a className="about-me_links" href="https://www.linkedin.com/in/robin-gorski/">www.linkedin.com/in/Robin-Gorski</a>
          <p className="about-me_context">Wanna collaborate with me?</p>
          <p className="about-me_context">Send me a E-mail:</p>
          <a className="about-me_links" href="mailto:Contact@robingorski.com">Contact@robingorski.com</a>
        </div>
      </div>
        </section>
        
        </div>
    );

}

export default App;





/*   // scroll down arrow animation (animation to the mouse)
gsap.to(".arrow", {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true}); */