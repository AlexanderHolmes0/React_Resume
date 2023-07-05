import { useState } from 'react';
import './Sidebar.css';
import { bubble as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'


export default function menu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)} right>
    
      <Link className="menu-item" to="/" onClick={handleLinkClick}> <h3><span className='grayscale'>🏡</span> Home</h3> </Link>
    
      <br />
      
      <h3> <img src='https://www.jumpingrivers.com/blog/accessible-shiny-standards-wcag/featured.png' height='40px'></img> Shiny Apps  </h3>
      <hr />

      <Link className="menu-item" to="BlackJackApp" onClick={handleLinkClick}><span className='grayscale'>🃏</span>  Blackjack App   </Link>
        
      
      <Link className="menu-item" to="Senate_Tracker" onClick={handleLinkClick}><span className='grayscale'>📈</span>  Senate Tracker</Link>
        
    
      <Link className="menu-item" to="VisualizeTree" onClick={handleLinkClick}><span className='grayscale'>🌴</span>  Visualize Tree </Link>
        
    
      <Link className="menu-item" to="Meta_Creator" onClick={handleLinkClick}><span className='grayscale'>🤘</span>   Meta Creator </Link>
        
    
      <Link className="menu-item" to="Stroke_Dash" onClick={handleLinkClick}><span className='grayscale'>🏥</span>  Stroke Dash</Link>
      
  
      <Link className="menu-item" to="CentralLimit" onClick={handleLinkClick}><span className='grayscale'>📊</span>  Central Limit </Link>

      <br />
      
      <h3> <img src='https://images.ctfassets.net/spoqsaf9291f/5M2QHtaWvuvEUU2V8MNVXH/f780593bab58709f95404d27bcb4e5d4/tableau-software.svg' height='40px'></img> Tabelau Vizzes  </h3>
      <hr />
      <Link className="menu-item" to="KrogerDash" onClick={handleLinkClick}><span className='grayscale'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/200px-Kroger_logo_%281961-2019%29.svg.png' height='20px'></img>
        </span>  Kroger</Link>
      <Link className="menu-item" to="YoutubeDash" onClick={handleLinkClick}><span className='grayscale'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png' height='20px'></img></span> Youtube</Link>
      <Link className="menu-item" to="KickstarterDash" onClick={handleLinkClick}><span className='grayscale'>
      <img src='https://cdn.icon-icons.com/icons2/2429/PNG/512/kickstarter_logo_icon_147271.png' height='25px'></img>
      </span> Kickstarter</Link>
    </Menu>
  );
}

