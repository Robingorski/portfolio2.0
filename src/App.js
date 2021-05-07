import {React, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.scss';
import Mouse from './component/Mouse';
import Textwriter from './component/Textwriter';
import logo from '../src/assets/pineapple.svg'
import QS from '../src/assets/qs-screen.png';
import Quire from '../src/assets/quire-screen.png';
import SSS from '../src/assets/service-security-sweden.png';
import KYH from '../src/assets/kyh-onboarding.png';
import selfie from '../src/assets/selfie.jpg';

gsap.registerPlugin(ScrollTrigger);



function App() {
    
    const panels = useRef([]);
    const panelsContainer = useRef();
    const createPanelsRefs = (panel, index) => {
      panels.current[index] = panel;
    };
  
    useEffect(() => {
      const totalPanels = panels.current.length;
  
      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          end: () => "+=" + panelsContainer.current.offsetWidth
        }
      });
    }, []);

    return (
        <div  className="horizontal-page" ref={panelsContainer}>
        <section className="landingpage">
            <div className="pineapple-div">
                <img className="pineapple" src={logo} alt="Pineapple-logo" />
            </div>
            <Textwriter/>
            <Mouse/>
            <div className="page_indicator_container">
              <div className="page_indicator-qs"></div>
              <div className="page_indicator-quire"></div>
              <div className="page_indicator-sss"></div>
              <div className="page_indicator-kyh"></div>
              <div className="page_indicator-about_me"></div>
            </div>
        </section>

        <section className="landingpage" ref={(e) => createPanelsRefs(e, 1)}>
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

        <section className="landingpage" ref={(e) => createPanelsRefs(e, 2)}>
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

        <section className="landingpage" ref={(e) => createPanelsRefs(e, 3)}>
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

        <section className="landingpage" ref={(e) => createPanelsRefs(e, 4)}>
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
        
        <section className="landingpage about-me" ref={(e) => createPanelsRefs(e, 5)}>
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