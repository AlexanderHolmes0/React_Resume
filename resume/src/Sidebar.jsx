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
    
      <Link className="menu-item" to="/" onClick={handleLinkClick}>🏡 Home </Link>
    
      <br />
      
      <h3>⚒ Embedded Projects ⚒</h3>
      <hr />

      <Link className="menu-item" to="BlackJackApp" onClick={handleLinkClick}>🃏 Blackjack App    </Link>
        
      
      <Link className="menu-item" to="Senate_Tracker" onClick={handleLinkClick}>📈 Senate Tracker</Link>
        
    
      <Link className="menu-item" to="VisualizeTree" onClick={handleLinkClick}>🌴 Visualize Tree </Link>
        
    
      <Link className="menu-item" to="Meta_Creator" onClick={handleLinkClick}>🤘  Meta Creator </Link>
        
    
      <Link className="menu-item" to="Stroke_Dash" onClick={handleLinkClick}>🏥 Stroke Dash </Link>
      
  
      <Link className="menu-item" to="CentralLimit" onClick={handleLinkClick}>📊 Central Limit </Link>
    </Menu>
  );
}

