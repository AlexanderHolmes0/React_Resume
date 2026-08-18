import { Suspense, lazy, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import particlesOptions from './particles.json';
import Layout from './components/Layout';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const BlackJack = lazy(() => import('./components/BlackJackApp'));
const SenateTracker = lazy(() => import('./components/SenateTracker'));
const VizTree = lazy(() => import('./components/VisualizeTree'));
const MetaCreator = lazy(() => import('./components/Meta_Creator'));
const StrokeDash = lazy(() => import('./components/Stroke_Dash'));
const CentralLim = lazy(() => import('./components/CentralLimit'));
const Kroger = lazy(() => import('./components/KrogerDash'));
const Kickstart = lazy(() => import('./components/KickstarterDash'));
const XGB = lazy(() => import('./components/RaceXGBS'));
const InventorySimulation = lazy(() => import('./components/InventorySimulation'));
const FakeNews = lazy(() => import('./components/FakeNews'));

const routeFallback = <div className="appbox">Loading...</div>;

export default function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />

      <Router>
        <Suspense fallback={routeFallback}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="BlackJackApp" element={<BlackJack />} />
              <Route path="Senate_Tracker" element={<SenateTracker />} />
              <Route path="VisualizeTree" element={<VizTree />} />
              <Route path="Meta_Creator" element={<MetaCreator />} />
              <Route path="Stroke_Dash" element={<StrokeDash />} />
              <Route path="CentralLimit" element={<CentralLim />} />
              <Route path="KrogerDash" element={<Kroger />} />
              <Route path="KickstarterDash" element={<Kickstart />} />
              <Route path="RaceXGBS" element={<XGB />} />
              <Route path="InventorySimulation" element={<InventorySimulation />} />
              <Route path="FakeNews" element={<FakeNews />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}


