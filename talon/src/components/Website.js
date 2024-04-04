import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

// Sample data structure representing parent pages and their corresponding siblings
const siblingsData = {
  '/components': [
    { path: '/components/buttons', pageTitle: 'Buttons' },
    { path: '/components/call-to-action', pageTitle: 'Call-To-Action' },
    { path: '/components/cards', pageTitle: 'Cards' },
    { path: '/components/heros', pageTitle: 'Heros' },
    { path: '/components/people', pageTitle: 'People' },
  ],
  // Add more entries as needed
};

function Website({ pageTitle, children }) {
  useEffect(() => {
    // Import and use JavaScript functions within the useEffect hook
    const handleScroll = require('../scripts/handle-scroll').handleScroll;
    const hamburgerX = require('../scripts/hamburger').hamburgerX;
    const hamburgerSideX = require('../scripts/side-hamburger').hamburgerSideX;
    const headerHeight = require('../scripts/header-height').headerHeight;
    const stopScroll = require('../scripts/stop-scroll').stopScroll;
    const dropdownToggles = require('../scripts/dropdowns').dropdownToggles;
    const focusSearch = require('../scripts/focus-search').focusSearch;

    handleScroll();
    hamburgerX();
    hamburgerSideX();
    headerHeight();
    stopScroll();
    dropdownToggles();
    focusSearch();
  }, []);

  // Check if the current location is the HomePage
  const location = useLocation();
  const currentPath = location.pathname;
  const isHomePage = location.pathname === '/';

  // Extract the parent path to find siblings
  const parentPath = '/components'; // Update this to your actual parent path

  // Get siblings based on the current page's path
  const siblings = siblingsData[parentPath] || [];

  return (
    <>
      <main className={`main_content${!isHomePage ? ' sidebar-present' : ''}`} id="main-content">
        <div className="content-wrapper">
          {/* Render children components */}
          {children}
        </div>
        {/* end content-wrapper */}
        {!isHomePage && (
          <div className="sidebar">
            <div className="toggler-wrapper">
              <button className="sidenavbar-toggler nav-toggle" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle side navigation">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <h2>In This Section</h2>
            </div>
            {/* end toggler-wrapper */}
            <nav className="sidebar-nav">
              <ul>
                {siblings.map(sibling => (
                  <li key={sibling.path} className="nav-item">
                    <Link to={sibling.path}>{sibling.pageTitle}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Website;
