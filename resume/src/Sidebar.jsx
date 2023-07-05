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
    
      <Link className="menu-item" to="/" onClick={handleLinkClick}> <span className='grayscale'>🏡</span> Home </Link>
    
      <br />
      
      <h3>⚒ Shiny Apps ⚒ </h3>
      <hr />

      <Link className="menu-item" to="BlackJackApp" onClick={handleLinkClick}><span className='grayscale'>🃏</span>  Blackjack App   </Link>
        
      
      <Link className="menu-item" to="Senate_Tracker" onClick={handleLinkClick}><span className='grayscale'>📈</span>  Senate Tracker</Link>
        
    
      <Link className="menu-item" to="VisualizeTree" onClick={handleLinkClick}><span className='grayscale'>🌴</span>  Visualize Tree </Link>
        
    
      <Link className="menu-item" to="Meta_Creator" onClick={handleLinkClick}><span className='grayscale'>🤘</span>   Meta Creator </Link>
        
    
      <Link className="menu-item" to="Stroke_Dash" onClick={handleLinkClick}><span className='grayscale'>🏥</span>  Stroke Dash</Link>
      
  
      <Link className="menu-item" to="CentralLimit" onClick={handleLinkClick}><span className='grayscale'>📊</span>  Central Limit </Link>

      <br />
      
      <h3>⚒ Tabelau Dashes ⚒ </h3>
      <hr />
      <Link className="menu-item" to="KrogerDash" onClick={handleLinkClick}><span className='grayscale'>🏪</span>  Kroger Dashboard</Link>
    </Menu>
  );
}

