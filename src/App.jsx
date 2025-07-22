import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router';
import GtSavingsBankRoutes from './routes/GtSavingsBankRoutes';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<GtSavingsBankRoutes />} />
    </Routes>
  );
}

export default App;
