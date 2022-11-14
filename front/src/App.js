import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from './pages/StartPage';
import WalletPage from './pages/WalletPage';
import GrowingFarmPage from './pages/GrowingFarmPage';
import StakingFarmPage from './pages/StakingFarmPage';
import TestPage from './pages/TestPage';
import StealPage from './pages/StealPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<StartPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/growing" element={<GrowingFarmPage />} />
          <Route path="/staking" element={<StakingFarmPage />} />
          <Route path="/steal" element={<StealPage /> } />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
