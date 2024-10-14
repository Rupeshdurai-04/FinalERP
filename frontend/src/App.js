import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FinancePage from './components/FinancePage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';
import SupplyChainManagement from './components/SupplyChainManagement';
import Inventory from './components/Inventory';
import HumanResources from './components/HumanResources';
import CRMPage from './components/CRMPage';
import WorkforceManagement from './components/WorkforceManagement';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/finance" element={<FinancePage />} />
          <Route path='/supply-chain' element={<SupplyChainManagement />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/crm' element={<CRMPage />} />
          <Route path='/human-resources' element={<HumanResources />} />
          <Route path='/WorkForce Management' element={<WorkforceManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
