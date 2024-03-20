import React from 'react';
import snowImg from '../../img/snow.jpg';

function CtaPage() {
  return (
    <>
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

export default CtaPage;
