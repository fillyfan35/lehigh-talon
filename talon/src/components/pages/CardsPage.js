import React from 'react';
import libraryImg from '../../img/library.jpg';

function CardsPage() {
  return (
    <>
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
    </>
  );
}

export default CardsPage;
