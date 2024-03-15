import Header from './components/Header';
import './styles/styles.scss';
import React, { useEffect } from 'react';
import { handleScroll } from './scripts/handle-scroll';
import { hamburgerX } from './scripts/hamburger';
import { headerHeight } from './scripts/header-height';
import { stopScroll } from './scripts/stop-scroll';
import { initializeDropdownToggles } from './scripts/dropdowns';
import { focusSearch } from './scripts/focus-search';

function Website() {
  useEffect(() => {
    handleScroll();
    hamburgerX();
    headerHeight();
    stopScroll();
    initializeDropdownToggles();
    focusSearch();
  }, []);

  return (
    <siteScripts />,
    <Header />
  );
}

export default Website;
