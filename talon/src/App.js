import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PeoplePage from './components/pages/PeoplePage';
import ButtonsPage from './components/pages/ButtonsPage';

function Website(props) {
  useEffect(() => {
    // Import and use JavaScript functions within the useEffect hook
    const handleScroll = require('./scripts/handle-scroll').handleScroll;
    const hamburgerX = require('./scripts/hamburger').hamburgerX;
    const headerHeight = require('./scripts/header-height').headerHeight;
    const stopScroll = require('./scripts/stop-scroll').stopScroll;
    const dropdownToggles = require('./scripts/dropdowns').dropdownToggles;
    const focusSearch = require('./scripts/focus-search').focusSearch;

    handleScroll();
    hamburgerX();
    headerHeight();
    stopScroll();
    dropdownToggles();
    focusSearch();
  }, []);

  return (
    <>
      <Header />
      <main className="main_content" id="main-content">
        {/* Render children components */}
        {props.children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Website>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components/people" element={<PeoplePage />} />
          <Route path="/components/buttons" element={<ButtonsPage />} />
          {/* Add more routes for other subpages */}
        </Routes>
      </Website>
    </Router>
  );
}

export default App;
export { App };
