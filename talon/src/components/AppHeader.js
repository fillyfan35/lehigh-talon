// AppHeader.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function AppHeader({ routes }) {
  const location = useLocation();
  let pageTitle = '';

  // Find the matching route and get its pageTitle
  const matchingRoute = routes.find(route => route.path === location.pathname);
  if (matchingRoute) {
    pageTitle = matchingRoute.pageTitle;
  } else {
    pageTitle = 'Default Page Title'; // Set a default title if route not found
  }

  return <Header pageTitle={pageTitle} />;
}

export default AppHeader;
