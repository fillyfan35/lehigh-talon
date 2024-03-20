// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ButtonsPage from './components/pages/ButtonsPage';
import CardsPage from './components/pages/CardsPage';
import PeoplePage from './components/pages/PeoplePage';
import Website from './components/Website';
import AppHeader from './components/AppHeader'; // Import the AppHeader component
import './styles/styles.scss';

// Define route data
const routesData = [
  { path: '/', pageTitle: 'Home' },
  { path: '/components/buttons', pageTitle: 'Buttons Components Page' },
  { path: '/components/cards', pageTitle: 'Cards Components Page' },
  { path: '/components/people', pageTitle: 'People Components Page' },
  // Add more routes as needed
];

function App() {
  return (
    <Router>
      {/* Include the AppHeader component outside the Routes */}
      <AppHeader routes={routesData} />

      <Routes>
        <Route path="/" element={<Website pageTitle="Home"><HomePage /></Website>} />
        <Route path="/components/buttons" element={<Website pageTitle="Buttons Components Page"><ButtonsPage /></Website>} />
        <Route path="/components/cards" element={<Website pageTitle="Cards Components Page"><CardsPage /></Website>} />
        <Route path="/components/people" element={<Website pageTitle="People Components Page"><PeoplePage /></Website>} />
        {/* Add more routes for other subpages */}
      </Routes>
    </Router>
  );
}

export default App;
