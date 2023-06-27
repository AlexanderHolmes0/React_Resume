import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons"



function App() {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">

            <header className="App-header">
                <Particles options={particlesOptions} init={particlesInit} />
                <h1 className='title'><code>Alexander Holmes</code></h1>
                <h3 classname='title3'><code>MSBA Candidate at UT-Knoxville</code></h3>
            </header>
            <body>
                <div className="stuffContainer">
                    <div className='flex-items' title="Check out my GitHub" >
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderHolmes0" data-testid="github-link">
                            
                           <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: "#ffffff" }} className="fa-icon" />
                        </a>
                    </div>

                    <div className='flex-items' title="Connect on Linkedin" >
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aholmes0/" data-testid="linkedin-link">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" className="fa-icon" />

                        </a>
                    </div>
                    <div className='flex-items' title="Email me" >
                        <a target="_blank" rel="noopener noreferrer" href="mailto:aholme27@vols.utk.edu" data-testid="email-link">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" className="fa-icon" />
                        </a>
                    </div>
                    <div className='flex-items' title='View my Resume' >
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/124OHZe1soZRCrN9I4ZNGVpgzh6WTsO0S/view?usp=sharing" data-testid="resume-link">
                            <FontAwesomeIcon icon={faFile} size="3x" className="fa-icon" />

                        </a>
                    </div>
                </div>




                <details className='detailss'>
                    <summary className='titles'>Projects</summary>
                    <div className="card">
                        <div className='card-block'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderHolmes0/BlackJackApp">
                                <img src="https://github-readme-stats.vercel.app/api/pin/?username=alexanderholmes0&repo=BlackJackApp" alt='BlackJackApp' />
                            </a>
                        </div>
                        <div className='card-block'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderHolmes0/Senate_Tracker">
                                <img src="https://github-readme-stats.vercel.app/api/pin/?username=alexanderholmes0&repo=Senate_Tracker" alt='Senate_Tracker' />
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className='card-block'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderHolmes0/Stroke_Dash">
                                <img src="https://github-readme-stats.vercel.app/api/pin/?username=alexanderholmes0&repo=VisualizeTree" alt='Stroke_Dash' />
                            </a>
                        </div>
                        <div className='card-block'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderHolmes0/VisualizeTree">
                                <img src="https://github-readme-stats.vercel.app/api/pin/?username=alexanderholmes0&repo=RaceXGBs" alt='VisualizeTree' />
                            </a>
                        </div>
                    </div>

                    <div className="bottomrightt">
                        Inspiration from
                        <a
                            target="_blank" rel="noopener noreferrer" href="https://github.com/adamalston/v2" data-testid="alston-link">
                            <span className="link"> Adam Alston</span>
                        </a>

                    </div>

                </details>
            </body>

        </div>
    );
}

export default App
