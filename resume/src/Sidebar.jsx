import { useState } from 'react';
import './Sidebar.css';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'


export default function SidebarMenu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)} right>

      <Link className="menu-item" to="/" onClick={handleLinkClick}> <h3><span className='grayscale'>🏡</span> Home</h3> </Link>

      <br />

      <h3> <img src='https://www.jumpingrivers.com/blog/accessible-shiny-standards-wcag/featured.png' height='40px'></img>
        <a className="nodeco" target="_blank" rel="noopener noreferrer" href='https://shiny.posit.co/'> Shiny Apps</a></h3>
      <hr />

      {/* <Link className="menu-item" to="BlackJackApp" onClick={handleLinkClick} ><span className='grayscale'>🃏</span>  Blackjack App   </Link> */}

      <a className="menu-item" target="_blank" rel="noopener noreferrer" href='https://aholmes23.shinyapps.io/BlackJackApp/'> <span className='grayscale'>🃏</span>  Blackjack App </a>

      <a className="menu-item" target="_blank" rel="noopener noreferrer" href='https://aholmes25.shinyapps.io/Viz_Sched_App/'> <span className='grayscale'>🗺️</span>  Sports Schedule Viz </a>

      <Link className="menu-item" to="Senate_Tracker" onClick={handleLinkClick}><span className='grayscale'>🕵️‍♂️</span>  Senate Tracker</Link>


      <Link className="menu-item" to="VisualizeTree" onClick={handleLinkClick}><span className='grayscale'>🌴</span>  Visualize Tree </Link>


      <Link className="menu-item" to="Meta_Creator" onClick={handleLinkClick}><span className='grayscale'>🤘</span>   Meta Creator </Link>


      <Link className="menu-item" to="Stroke_Dash" onClick={handleLinkClick}><span className='grayscale'>🏥</span>  Stroke Dash</Link>


      <Link className="menu-item" to="CentralLimit" onClick={handleLinkClick}><span className='grayscale'>📊</span>  Central Limit </Link>

      <Link className="menu-item" to="InventorySimulation" onClick={handleLinkClick}><span className='grayscale'>🏭</span> Inventory Simulation</Link>
      <br />

      <h3> <img src='https://images.ctfassets.net/spoqsaf9291f/5M2QHtaWvuvEUU2V8MNVXH/f780593bab58709f95404d27bcb4e5d4/tableau-software.svg' height='40px'></img>
        <a className="nodeco" target="_blank" rel="noopener noreferrer" href='https://www.tableau.com/'> Tabelau Vizzes </a></h3>
      <hr />
      <Link className="menu-item" to="KrogerDash" onClick={handleLinkClick}><span className='grayscale'> 🛒 </span>  Kroger</Link>
      <Link className="menu-item" to="KickstarterDash" onClick={handleLinkClick}><span className='grayscale'>
        <img src='https://cdn.icon-icons.com/icons2/2429/PNG/512/kickstarter_logo_icon_147271.png' height='25px'></img>
      </span> Kickstarter</Link>
      <br />


      <h3> <img src='https://workable-application-form.s3.amazonaws.com/advanced/production/61557f91d9510741dc62e7f8/c3635b59-a3d2-444a-b636-a9d0061dcdde' height='25px'></img>
        <a className="nodeco" target="_blank" rel="noopener noreferrer" href='https://huggingface.co'> Hugging Face </a></h3>
      <hr />
      <Link className="menu-item" to="FakeNews" onClick={handleLinkClick}><span className='grayscale'>
        <img src='https://pypi-camo.freetls.fastly.net/a95ef5913dc4cc84d2155ff690a0fa0d4c33d7e2/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f67726164696f2d6170702f67726164696f2f6d61696e2f726561646d655f66696c65732f67726164696f2e737667' height='25px'></img>
      </span>  Fake News Detector </Link>

      <a className="menu-item" target="_blank" rel="noopener noreferrer" href='https://huggingface.co/AlexanderHolmes0/Fake-News-Detector'> 
      <span className='grayscale'>📃</span> Fake News DistilBERT </a>

      <Link className="menu-item" to="RaceXGBS" onClick={handleLinkClick}><span className='grayscale'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png' height='25px'></img>
      </span>  Race Models </Link>

      <a className="menu-item" target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1T_eeD9OpME3b0wlAO_3szS0-mA6MK2Ua/view?usp=sharing'> 
      <span className='grayscale'>📃</span>  Pakistani Used Car Sales </a>

    </Menu>
  );
}

