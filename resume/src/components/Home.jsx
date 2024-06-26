import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons"



function Home() {
    return (

        <>
        <header className="App-header">
                <div className = "font-face-gm">     
                <h1 className='title'> <code>Alexander Holmes </code></h1>
                </div>
                <div className = "font-face-gm">
                <h3 className='subtitle'><code>Data Analyst</code></h3>
                </div>
            </header>   
            
            <body>
                <div className="stuffContainer">
                    <div className='flex-items' title="Check out my GitHub" >
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderHolmes0" data-testid="github-link">
                        
                           <FontAwesomeIcon icon={faGithub} size="3x" className="fa-icon" />
                        </a>
                    </div>

                    <div className='flex-items' title="Connect on Linkedin" >
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexanderholmes0/" data-testid="linkedin-link">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" className="fa-icon" />

                        </a>
                    </div>
                    <div className='flex-items' title="Email me" >
                        <a target="_blank" rel="noopener noreferrer" href="mailto:aholme27@vols.utk.edu" data-testid="email-link">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" className="fa-icon" />
                        </a>
                    </div>
                    <div className='flex-items' title='View my Resume' >
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/108tV2RLm0dOkFarorkH0Vo32Qe4juKyj/view?usp=sharing" data-testid="resume-link">
                            <FontAwesomeIcon icon={faFile} size="3x" className="fa-icon" />

                        </a>
                    </div>
                </div>




                <details className='detailss' >
                    <summary><code>Notable Github Repos</code></summary>
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
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderHolmes0/Sport_Sched_Viz">
                                <img src="https://github-readme-stats.vercel.app/api/pin/?username=alexanderholmes0&repo=Sport_Sched_Viz" alt='Sport_Sched_Viz' />
                            </a>
                        </div>
                        <div className='card-block'>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexanderHolmes0/Visualize_Metrics">
                                <img src="https://github-readme-stats.vercel.app/api/pin/?username=alexanderholmes0&repo=Visualize_Metrics" alt='Visualize_Metrics' />
                            </a>
                        </div>
                    </div>

                    

                </details>

                <div className="bottomrightt">
                        Inspiration from
                        <a
                            target="_blank" rel="noopener noreferrer" href="https://github.com/adamalston/v2" data-testid="alston-link">
                            <span className="link"> Adam Alston</span>
                        </a>

                    </div>
            
               </body>
            
           
            </>
    );
}
 
export default Home;