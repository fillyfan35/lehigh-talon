// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PeoplePage from './components/pages/PeoplePage';
import ButtonsPage from './components/pages/ButtonsPage';
import Website from './components/Website';
import AppHeader from './components/AppHeader'; // Import the AppHeader component
import './styles/styles.scss';

// Define route data
const routesData = [
  { path: '/', pageTitle: 'Home' },
  { path: '/components/people', pageTitle: 'People' },
  { path: '/components/buttons', pageTitle: 'Buttons Hi' },
  // Add more routes as needed
];

function App() {
  return (
    <Router>
      {/* Include the AppHeader component outside the Routes */}
      <AppHeader routes={routesData} />

      <Routes>
        <Route path="/" element={<Website pageTitle="Home"><HomePage /></Website>} />
        <Route path="/components/people" element={<Website pageTitle="People"><PeoplePage /></Website>} />
        <Route path="/components/buttons" element={<Website pageTitle="Buttons Hi"><ButtonsPage /></Website>} />
        {/* Add more routes for other subpages */}
      </Routes>
    </Router>
  );
}

export default App;
