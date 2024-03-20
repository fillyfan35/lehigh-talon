import React, { useEffect } from 'react';
// import Header from './Header';
import Footer from './Footer';

function Website({ pageTitle, children }) {
  useEffect(() => {
    // Import and use JavaScript functions within the useEffect hook
    const handleScroll = require('../scripts/handle-scroll').handleScroll;
    const hamburgerX = require('../scripts/hamburger').hamburgerX;
    const headerHeight = require('../scripts/header-height').headerHeight;
    const stopScroll = require('../scripts/stop-scroll').stopScroll;
    const dropdownToggles = require('../scripts/dropdowns').dropdownToggles;
    const focusSearch = require('../scripts/focus-search').focusSearch;

    handleScroll();
    hamburgerX();
    headerHeight();
    stopScroll();
    dropdownToggles();
    focusSearch();
  }, []);

  return (
    <>
      {/* <Header pageTitle={pageTitle} /> */}
      <main className="main_content" id="main-content">
        {/* Render children components */}
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Website;
