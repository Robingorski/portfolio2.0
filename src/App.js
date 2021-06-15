import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.scss';
import Mouse from './component/Mouse';
import Arrow from './component/Arrow';
import Textwriter from './component/Textwriter';
import logo from '../src/assets/pineapple.svg'
import QS from '../src/assets/qs-screen.png';
import GP from '../src/assets/gula_pizzerian.png';
import SSS from '../src/assets/service-security-sweden.png';
import KYH from '../src/assets/kyh-onboarding.png';
import selfie from '../src/assets/selfie.jpg';
import git_logo from '../src/assets/github-logo.svg';
import linkedin_logo from '../src/assets/linkedin-logo.svg';
import AnimatedCursor from "react-animated-cursor";

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
          <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color='39, 39, 39'
            outerAlpha={.4}
            innerScale={0.7}
            outerScale={5}
          />
        <section className="landingpage">
            <div className="pineapple-div">
                <img className="pineapple" src={logo} alt="Pineapple-logo" />
            </div>
            <Textwriter/>
            <Mouse/>
            <Arrow/>
              <div className="page_indicator_container">
              <div className="page_indicator-qs"></div>
              <div className="page_indicator-gp"></div>
              <div className="page_indicator-sss"></div>
              <div className="page_indicator-kyh"></div>
              <div className="page_indicator-about_me"></div>
            </div>
        </section>

        <section className="landingpage" ref={(e) => createPanelsRefs(e, 1)}>
            <img className="landingpage_screen" src={QS} alt="Quick Solution page"/>
            <div className="qs_case_container">
                <h1 className="case_title">01 - Quick Solution</h1>
                <p className="case_hashtags">#HTML, #CSS, #Javascript, #Animations</p>
                <p className="case_context">Everything started with the customer wanting animations on their website. While I started to inspect how to apply the animations, I saw a bad lighthouse score due to a lot of “dead code”. So I re-coded the whole website and added animations to it.</p>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://agitated-quick-solution.netlify.app/")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage" ref={(e) => createPanelsRefs(e, 2)}>
            <img className="landingpage_screen" src={GP} alt="Gula Pizzeria page"/>
            <div className="gp_case_container">
                <h1 className="case_title">02 - Gulapizzeria</h1>
                <p className="case_hashtags">#HTML, #CSS, #Javascript #Google-Maps #Design, #Figma</p>
                <p className="case_context">A new website for my local pizza restaurant. I had completely free hands around design and functions for the website. I decided to make it a single page website, with some easy self navigate buttons for each menu section.</p>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://vigilant-gulan.netlify.app/")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage" ref={(e) => createPanelsRefs(e, 3)}>
            <img className="landingpage_screen" src={SSS} alt="Service Security Sweden page"/>
            <div className="sss_case_container">
                <h1 className="case_title">03 - Service Security Sweden</h1>
                <p className="case_hashtags">#HTML, #CSS, #Javascript #Design</p>
                <p className="case_context">A start-up Company wanted a landing page with short notice. They had no special design preference other than to make it look clean and simple.</p>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("http://www.servicesecurity.se/")}>Visit page</button>
                </div>
            </div>
        </section>

        <section className="landingpage" ref={(e) => createPanelsRefs(e, 4)}>
            <img className="landingpage_screen" src={KYH} alt="KYH page"/>
            <div className="kyh_case_container">
                <h1 className="case_title">04 - KYH Onboarding</h1>
                <p className="case_hashtags">#React, #Tailwind, #Firebase, #Sanity, #Next.js #Figma</p>
                <p className="case_context">A onboarding website for newly admitted students to KYH. It was a team project in school where me and my team created the design, made clickable prototypes in Figma and then build it in React. </p>
                <div className="visit-button_container">
                    <button className="visit-button" onClick={()=> window.open("https://kyh-onboarding.vercel.app/")}>Visit page</button>
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
          <p className="about-me_context">I am a Front End Development in Stockholm, Sweden.</p>
          <p className="about-me_context">Where I enjoy develop clean designs and smart solutions for the web. </p>
        </div>
        <div className="about-me-text_skills">
          <p className="about-me_context">Soft skills - Team Work, Communication, Leadership.</p>
          <p className="about-me_context">Tools - Github, Figma, Visual Studio Code Etc.</p>
          <p className="about-me_context">Hard skills - HTML, CSS, ES6.</p>
        </div>
        <div className="about-me-text_contact">
          <p className="about-me_context">Send me a E-mail:</p>
          <a className="about-me_links" href="mailto:Contact@robingorski.com">Contact@robingorski.com</a>
        </div>
      </div>
      <div className="about-me_link-container">
        <img className="about-me_link-icons" src={git_logo} onClick={()=> window.open("https://github.com/Robingorski")} alt="Github icon" />
        <img className="about-me_link-icons" src={linkedin_logo} onClick={()=> window.open("https://www.linkedin.com/in/robin-gorski/")} alt="Linkedin icon" />
      </div>
        </section>
        
        </div>
    );

}

export default App;