
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
      <a className="menu-item" href="/BlackJackApp">
        Blackack App
      </a>
      <a className="menu-item" href="/Senate_Tracker">
        Senate Tracker
      </a>
      <a className="menu-item" href="/VisualizeTree">
        Visualize Tree
      </a>
      <a className="menu-item" href="/Meta_Creator">
        Meta Creator
      </a>
      <a className="menu-item" href="/Stroke_Dash">
        Stroke Dash
      </a>
      <a className="menu-item" href="/CentralLimit">
        Central Limit
      </a>
    </Menu>
  );
}

