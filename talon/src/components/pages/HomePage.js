import React from 'react';
import alumniBuildingImg from '../../img/alumnibuilding.jpg';
import snowImg from '../../img/snow.jpg';
import libraryImg from '../../img/library.jpg';

function HomePage() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${alumniBuildingImg})` }}>
        <div className="mobile_hero_img">
          <img src={alumniBuildingImg} alt="" />
        </div>
        <div className="hero_content">
          <h1>This is a Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac imperdiet mauris. Donec dictum maximus
            egestas. Etiam et lacus nec lacus consequat ullamcorper ac eu erat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Praesent eu sapien eu sapien molestie imperdiet. Morbi tincidunt dolor non ipsum accumsan, ac
            consequat neque pharetra.</p>
        </div>
      </section>

      <section className="stats">
        <h2>Stats</h2>
        <div className="stats-wrapper">
          <div className="stat">
            <div className="stat-inner-wrapper">
              <div className="value">
                <i className="fa-solid fa-basketball"></i>
                100%
              </div>{/* end value */}
              <div className="detail">
                <p>Shots missed you don't take</p>
              </div>{/* end detail */}
            </div>{/* end stat-inner-wrapper */}
          </div>{/* end stat */}

          <div className="stat">
            <div className="stat-inner-wrapper">
              <div className="value">
                <i className="fa-solid fa-graduation-cap"></i>
                102
              </div>{/* end value */}
              <div className="detail">
                <p>Majors Lehigh University provides</p>
              </div>{/* end detail */}
            </div>{/* end stat-inner-wrapper */}
          </div>{/* end stat */}

          <div className="stat">
            <div className="stat-inner-wrapper">
              <div className="value">
                <i className="fa-solid fa-ticket"></i>
                15,000+
              </div>{/* end value */}
              <div className="detail">
                <p>IT Tickets answered by LTS</p>
              </div>{/* end detail */}
            </div>{/* end stat-inner-wrapper */}
          </div>{/* end stat */}
        </div>{/* end stats-wrapper */}

      </section>

      <section className="card-grid">
        <h2>News Cards</h2>
        <div className='card-grid-wrapper'>
          <div className="card news">
            <img src={libraryImg} alt="" />
            <div className="card-body">
              <h3 className="card-title">News Card title</h3>
              <p className="card-date"><i className="fa-regular fa-calendar"></i> February 13, 2024</p>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <div className="card-buttons">
                <a href="#" className="btn btn-navy">Go Somewhere</a>
              </div>
              {/* end card-buttons */}
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}

          <div className="card news">
            <div className="card-body">
              <h3 className="card-title">News Card title: No Image</h3>
              <p className="card-date"><i className="fa-regular fa-calendar"></i> February 13, 2024</p>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <div className="card-buttons">
                <a href="#" className="btn btn-navy">Go Somewhere</a>
              </div>
              {/* end card-buttons */}
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        {/* end card-grid-wrapper */}
      </section>

      <section>
        <h2>Call to Actions</h2>
        <div className="card cta">
          <div className="card-body">
            <h2 className="card-title">Call to Action with One Button</h2>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <div className="card-buttons">
              <a href="#" className="btn btn-navy">Go Somewhere</a>
            </div>
            {/* end card-buttons */}
          </div>
          {/* end card-body */}
        </div>
        {/* end card */}
      </section>

      <section>
        <div className="card cta">
          <div className="card-body">
            <h2 className="card-title">Call to Action with Two Buttons</h2>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <div className="card-buttons">
              <a href="#" className="btn btn-navy">Go Somewhere</a>
              <a href="#" className="btn btn-navy">Go Somewhere Else</a>
            </div>
            {/* end card-buttons */}
          </div>
          {/* end card-body */}
        </div>
        {/* end card */}
      </section>

      <section>
        <div className="card cta">
          <div className="card-body">
            <h2 className="card-title">Call to Action with Three Buttons</h2>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <div className="card-buttons">
              <a href="#" className="btn btn-navy">Go Somewhere</a>
              <a href="#" className="btn btn-navy">Go Somewhere Else</a>
              <a href="#" className="btn btn-navy">Go Anywhere</a>
            </div>
            {/* end card-buttons */}
          </div>
          {/* end card-body */}
        </div>
        {/* end card */}
      </section>

      <section>
        <div className="card cta-img">
          <img src={snowImg} className="card-img-top" alt="" />
          <div className="card-body">
            <h2 className="card-title">Call to Action: Image</h2>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <div className="card-buttons">
              <a href="#" className="btn btn-navy">Go Somewhere</a>
              <a href="#" className="btn btn-navy">Go Somewhere Else</a>
              <a href="#" className="btn btn-navy">Go Anywhere</a>
            </div>
            {/* end card-buttons */}
          </div>
          {/* end card-body */}
        </div>
        {/* end card */}
      </section>
    </>
  );
}

export default HomePage;
