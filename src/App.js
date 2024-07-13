import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Overview } from './components/Overview';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { RightPanel } from './components/RightPanel';
import { CssBaseline } from '@mui/material';
import { Dashboard } from './components/Dashboard';
import { Pages } from './components/Pages';

function App() {
  return (
    <BrowserRouter basename='/'>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Dashboard>
        <Routes>
          <Route path="pages/" element={<Pages />}>
            <Route path="overview/" element={<Overview />} />
          </Route>
        </Routes>
      </Dashboard>
      <RightPanel />
    </BrowserRouter>
  );
}

export default App;
