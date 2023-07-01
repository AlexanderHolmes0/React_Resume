
import './Sidebar.css';
import { bubble as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'

export default function menu () {
  return (
    <Menu>
    
      <Link className="menu-item" to="/Home">Home</Link>
    
      <br />
      
      <h3>Embedded Projects</h3>
      <hr />

      <Link className="menu-item" to="/BlackJackApp">Blackack App </Link>
        
      
      <Link className="menu-item" to="/Senate_Tracker">Senate Tracker </Link>
        
    
      <Link className="menu-item" to="/VisualizeTree">Visualize Tree </Link>
        
    
      <Link className="menu-item" to="/Meta_Creator">Meta Creator </Link>
        
    
      <Link className="menu-item" to="/Stroke_Dash">Stroke Dash </Link>
      
  
      <Link className="menu-item" to="/CentralLimit">Central Limit </Link>
    </Menu>
  );
}

