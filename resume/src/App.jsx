import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Blackjack from './components/BlackJackApp';
import Home from './components/Home';
import SenateTracker from './components/SenateTracker';
import VizTree from './components/VisualizeTree';
import MetaCreator from './components/Meta_Creator';
import StrokeDash from './components/Stroke_Dash';
import CentralLim from './components/CentralLimit';
import './App.css';




function App() {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
<Particles options={particlesOptions} init={particlesInit} />
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="BlackJackApp" element={<Blackjack />} />
          <Route path="Senate_Tracker" element={<SenateTracker />} />
          <Route path="VisualizeTree" element={<VizTree />} />
          <Route path="Meta_Creator" element={<MetaCreator />} />
          <Route path="Stroke_Dash" element={<StrokeDash />} />
          <Route path="Stroke_Dash" element={<StrokeDash />} />
          <Route path="CentralLimit" element={<CentralLim />} />
        </Route>
      </Routes>
    </BrowserRouter>

        </div>
    );
}

export default App
