import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import lehighLogo from '../img/lehigh_logo.png';
import stainedGlassImage from '../img/stainedglass.jpg';


function Header(props) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== ''); // Split path and remove empty segments

  // Check if the current location is the HomePage
  const isHomePage = location.pathname === '/';

  return (
    <>
      <a href="#main-content" className="focusable skip-link">Skip to main content</a>
      <header>
        {/* UCPA Emergency Banner Alert */}
        <div id="emergencyalert">
          <div id="AppArmorAlertID_2"></div>
          {/* <script type="text/javascript" src="//lehigh.apparmor.com/Notifications/Feeds/Javascript/?AlertID=2"
            async></script> */}
        </div>
        {/* End UCPA Emergency Banner Alert */}
        <div className="department_bar">
          <div className="department_wrapper">
            <a href="/">Department Name Here Department Name Here</a>
          </div>
          {/* end department_wrapper */}
        </div>
        {/* end department_bar */}
        <div className="menu_bar">
          <div className="menu_wrapper">
            <div className="menu navbar">
              <button className="navbar-toggler nav-toggle" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <div className="navbar main_nav">
                <div className="collapse navbar-collapse main_nav_wrapper" id="navbarSupportedContent"
                  style={{
                    background: `linear-gradient(90deg, rgba(33, 18, 5, 1.0), rgba(33, 18, 5, 1.0), rgba(33, 18, 5, 0.95), rgba(33, 18, 5, 0.9)), url(${stainedGlassImage})`
                  }}>
                  <div className="nav-container">
                    <form className="header-search" role="search">
                      <input className="form-control search_box" id="search_box" type="search" placeholder="Search"
                        aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit"><i
                        className="fa-solid fa-magnifying-glass"></i><span className="sr-only">Search</span></button>
                    </form>
                    <div className="nav-container-wrapper">
                      <nav className="main_menu">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">Component List <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/components/buttons">Buttons</a></li>
                              <li><a className="dropdown-item" href="/components/call-to-action">Call-To-Action</a></li>
                              <li><a className="dropdown-item" href="/components/cards">Cards</a></li>
                              <li><a className="dropdown-item" href="/components/heros">Heros</a></li>
                              <li><a className="dropdown-item" href="/components/people">People</a></li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">Creative Inquiry <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Creative Inquiry 101</a></li>
                              <li><a className="dropdown-item" href="#">Why Creative Inquiry?</a></li>
                              <li><a className="dropdown-item" href="#">Fruits of Creative Inquiry</a></li>
                              <li><a className="dropdown-item" href="#">Student Outcomes</a></li>
                              <li><a className="dropdown-item" href="#">Why Inquiry to Impact?</a></li>
                              <li><a className="dropdown-item" href="#">Lehigh Expo</a></li>
                            </ul>
                          </li>

                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">Lehigh 360 <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li className="dropdown"><a className="dropdown-item" href="#">AccelerateX</a>
                                <ul className="dropdown-menu submenu">
                                  <li><a className="dropdown-item" href="#">Design Labs Maker Bootcamp</a></li>
                                  <li><a className="dropdown-item" href="#">Sustainable Happiness Institute</a></li>
                                </ul>
                              </li>
                              <li><a className="dropdown-item" href="#">Lehigh 360: High-Impact Programs Database</a></li>
                              <li className="dropdown"><a className="dropdown-item" href="#">Long Item</a>
                                <ul className="dropdown-menu submenu">
                                  <li><a className="dropdown-item" href="#">Design Labs Maker Bootcamp</a></li>
                                  <li><a className="dropdown-item" href="#">Sustainable Happiness Institute</a></li>
                                  <li><a className="dropdown-item" href="#">Sustainable</a></li>
                                  <li><a className="dropdown-item" href="#">Happiness</a></li>
                                  <li><a className="dropdown-item" href="#">Institute</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">CI Programs <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Mountaintop Summer Experience</a></li>
                              <li><a className="dropdown-item" href="#">Data for Impact Summer Institute</a></li>
                              <li><a className="dropdown-item" href="#">Inquiry to Impact Projects</a></li>
                              <li><a className="dropdown-item" href="#">Creative Inquiry Projects</a></li>
                              <li><a className="dropdown-item" href="#">Creative Scholarship Institute</a></li>
                              <li><a className="dropdown-item" href="#">LearnX | MakeX | SprintX</a></li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">Impact Fellowships <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Global Social Impact Fellowship</a></li>
                              <li><a className="dropdown-item" href="#">Lehigh Valley Social Impact
                                Fellowship</a></li>
                              <li><a className="dropdown-item" href="#">Campus Sustainable Impact Fellowship</a>
                              </li>
                              <li><a className="dropdown-item" href="#">Silicon Valley Social Impact
                                Fellowship</a></li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">Outreach <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Impact-Focused Education Unconference</a>
                              </li>
                              <li><a className="dropdown-item" href="#">TESSI Institute</a></li>
                              <li><a className="dropdown-item" href="#">Projects for Peace</a></li>
                            </ul>
                          </li>
                          <li className="nav-item"><a className="nav-link title" href="#">Outreach Super Long Title is Cool</a></li>
                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">Outreach 3 <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Impact-Focused Education Unconference</a>
                              </li>
                              <li><a className="dropdown-item" href="#">TESSI Institute</a></li>
                              <li><a className="dropdown-item" href="#">Projects for Peace</a></li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">Outreach 4 <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Impact-Focused Education Unconference</a>
                              </li>
                              <li><a className="dropdown-item" href="#">TESSI Institute</a></li>
                              <li><a className="dropdown-item" href="#">Projects for Peace</a></li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown"><a className="nav-link title dropdown-toggle" href="#" role="button"
                            aria-expanded="false">Outreach 5 <i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Impact-Focused Education Unconference</a>
                              </li>
                              <li><a className="dropdown-item" href="#">TESSI Institute</a></li>
                              <li><a className="dropdown-item" href="#">Projects for Peace</a></li>
                            </ul>
                          </li>
                          <li className="nav-item"><a className="nav-link title" href="#">News</a></li>
                        </ul>
                      </nav>
                      {/* end main_menu */}
                      <div className="quick_nav">
                        <ul className="navbar-nav quick-links-nav">
                          <li className="nav-item"><a className="nav-link btn" href="#">Quick Link 1</a></li>
                          <li className="nav-item"><a className="nav-link btn" href="#">Quick Link Long Link</a></li>
                          <li className="nav-item"><a className="nav-link btn" href="#">Quick Link 3</a></li>
                          <li className="nav-item"><a className="nav-link btn" href="#">Quick Link 4</a></li>
                        </ul>
                      </div>
                      {/* end quick_nav */}
                    </div>
                  </div>
                  {/* end nav-container */}
                </div>
              </div>
            </div>
            {/* end menu */}
            <div className="logo">
              <img src={lehighLogo} alt="Lehigh University logo" />
            </div>
            {/* end logo */}
            <div className="search">
              <div className="fa-solid fa-magnifying-glass search_btn navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span className="sr-only">Search</span></div>
            </div>
            {/* end search */}
          </div>
        </div>
      </header>

      {/* Conditionally render breadcrumbs outside header */}
      {!isHomePage && (
        <section className="breadcrumb-section">
          <div className="breadcrumb-wrapper">
            <nav className="breadcrumb-nav">
              <ul className="breadcrumbs">
                <li id="home"><Link to="/"><i className="fa-solid fa-house-chimney"></i><span className="sr-only">home</span></Link></li>
                {pathSegments.map((segment, index) => (
                  <li key={index}>
                    {index === pathSegments.length - 1 ? (
                      <span>{segment}</span>
                    ) : (
                      <Link to={`/${segment}`}>{segment}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <h1>{props.pageTitle}</h1>
          </div>
          {/* breadcrumb-wrapper */}
        </section>
      )}
    </>
  );
}

export default Header;
