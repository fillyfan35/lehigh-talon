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

      <h2>News Cards</h2>
      <section className="card-grid">
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
      </section>

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
    </>
  );
}

export default HomePage;
