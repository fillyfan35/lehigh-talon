import React from 'react';
import silhoutteImg from '../../img/silhoutte.jpg';

function PeoplePage() {
  return (
    <>
      <section className="people_directory-column">
        <h2>Directory Listing - Column</h2>
        <div className="card card-bio">
          <div className="card-img">
            <img src={silhoutteImg} alt="" />
          </div>
          <div className="card-body">
            <div className="card-header">
              <h3>
                <a href="#">Joe Cool</a>
              </h3>
              <div className="bio-title">
                <span className="title">Senior Systems Engineer</span>
                <span className="subtitle">Systems Engineering</span>
              </div>
              {/* end bio-title */}
            </div>
            <div className="card-metatags">
              <span className="meta tertiary"><a href="mailto:email123@lehigh.edu"><i className="fa-solid fa-envelope"></i><span
                className="meta-title">email123@lehigh.edu</span></a></span>
              <span className="meta tertiary">
                <i className="fa-solid fa-phone-volume"></i>
                610-758-5555
              </span>
            </div>
            {/* end card-metatags */}
          </div>
          {/* end card-body */}
        </div>
        {/* end card-bio */}

        <div className="card card-bio">
          <div className="card-img">
            <img src={silhoutteImg} alt="" />
          </div>
          <div className="card-body">
            <div className="card-header">
              <h3>
                <a href="#">Flying Ace</a>
              </h3>
              <div className="bio-title">
                <span className="title">Senior Systems Engineer</span>
                <span className="subtitle">Systems Engineering</span>
              </div>
              {/* end bio-title */}
            </div>
            <div className="card-metatags">
              <span className="meta tertiary"><a href="mailto:email123@lehigh.edu"><i className="fa-solid fa-envelope"></i><span
                className="meta-title">email123@lehigh.edu</span></a></span>
              <span className="meta tertiary">
                <i className="fa-solid fa-phone-volume"></i>
                610-758-5555
              </span>
            </div>
            {/* end card-metatags */}
          </div>
          {/* end card-body */}
        </div>
        {/* end card-bio */}

        <div className="card card-bio">
          <div className="card-img">
            <img src={silhoutteImg} alt="" />
          </div>
          <div className="card-body">
            <div className="card-header">
              <h3>
                <a href="#">Snoopy Brown</a>
              </h3>
              <div className="bio-title">
                <span className="title">Senior Systems Engineer</span>
                <span className="subtitle">Systems Engineering</span>
              </div>
              {/* end bio-title */}
            </div>
            <div className="card-metatags">
              <span className="meta tertiary"><a href="mailto:email123@lehigh.edu"><i className="fa-solid fa-envelope"></i><span
                className="meta-title">email123@lehigh.edu</span></a></span>
              <span className="meta tertiary">
                <i className="fa-solid fa-phone-volume"></i>
                610-758-5555
              </span>
            </div>
            {/* end card-metatags */}
          </div>
          {/* end card-body */}
        </div>
        {/* end card-bio */}

        <div className="card card-bio">
          <div className="card-img">
            <img src={silhoutteImg} alt="" />
          </div>
          <div className="card-body">
            <div className="card-header">
              <h3>
                <a href="#">Beagle Scout</a>
              </h3>
              <div className="bio-title">
                <span className="title">Senior Systems Engineer</span>
                <span className="subtitle">Systems Engineering</span>
              </div>
              {/* end bio-title */}
            </div>
            <div className="card-metatags">
              <span className="meta tertiary"><a href="mailto:email123@lehigh.edu"><i className="fa-solid fa-envelope"></i><span
                className="meta-title">email123@lehigh.edu</span></a></span>
              <span className="meta tertiary">
                <i className="fa-solid fa-phone-volume"></i>
                610-758-5555
              </span>
            </div>
            {/* end card-metatags */}
          </div>
          {/* end card-body */}
        </div>
        {/* end card-bio */}
      </section>

      <section className="people_directory-grid">
        <h2>Directory Listing - Grid</h2>
        <div className="grid-wrapper">
          <div className="card card-bio">
            <div className="card-img">
              <img src={silhoutteImg} alt="" />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3>
                  <a href="#">Joe Cool</a>
                </h3>
                <div className="bio-title">
                  <span className="title">Senior Systems Engineer</span>
                  <span className="subtitle">Systems Engineering</span>
                </div>
                {/* end bio-title */}
              </div>
              <div className="card-metatags">
                <span className="meta tertiary"><a href="mailto:email123@lehigh.edu"><i className="fa-solid fa-envelope"></i><span
                  className="meta-title">email123@lehigh.edu</span></a></span>
                <span className="meta tertiary">
                  <i className="fa-solid fa-phone-volume"></i>
                  610-758-5555
                </span>
              </div>
              {/* end card-metatags */}
            </div>
            {/* end card-body */}
          </div>
          {/* end card-bio */}

          <div className="card card-bio">
            <div className="card-img">
              <img src={silhoutteImg} alt="" />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3>
                  <a href="#">Flying Ace</a>
                </h3>
                <div className="bio-title">
                  <span className="title">Senior Systems Engineer</span>
                  <span className="subtitle">Systems Engineering</span>
                </div>
                {/* end bio-title */}
              </div>
              <div className="card-metatags">
                <span className="meta tertiary"><a href="mailto:email123@lehigh.edu"><i className="fa-solid fa-envelope"></i><span
                  className="meta-title">email123@lehigh.edu</span></a></span>
                <span className="meta tertiary">
                  <i className="fa-solid fa-phone-volume"></i>
                  610-758-5555
                </span>
              </div>
              {/* end card-metatags */}
            </div>
            {/* end card-body */}
          </div>
          {/* end card-bio */}

          <div className="card card-bio">
            <div className="card-img">
              <img src={silhoutteImg} alt="" />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3>
                  <a href="#">Snoopy Brown</a>
                </h3>
                <div className="bio-title">
                  <span className="title">Senior Systems Engineer</span>
                  <span className="subtitle">Systems Engineering</span>
                </div>
                {/* end bio-title */}
              </div>
              <div className="card-metatags">
                <span className="meta tertiary"><a href="mailto:email123@lehigh.edu"><i className="fa-solid fa-envelope"></i><span
                  className="meta-title">email123@lehigh.edu</span></a></span>
                <span className="meta tertiary">
                  <i className="fa-solid fa-phone-volume"></i>
                  610-758-5555
                </span>
              </div>
              {/* end card-metatags */}
            </div>
            {/* end card-body */}
          </div>
          {/* end card-bio */}

          <div className="card card-bio">
            <div className="card-img">
              <img src={silhoutteImg} alt="" />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3>
                  <a href="#">Beagle Scout</a>
                </h3>
                <div className="bio-title">
                  <span className="title">Senior Systems Engineer</span>
                  <span className="subtitle">Systems Engineering</span>
                </div>
                {/* end bio-title */}
              </div>
              <div className="card-metatags">
                <span className="meta tertiary"><a href="mailto:email123@lehigh.edu"><i className="fa-solid fa-envelope"></i><span
                  className="meta-title">email123@lehigh.edu</span></a></span>
                <span className="meta tertiary">
                  <i className="fa-solid fa-phone-volume"></i>
                  610-758-5555
                </span>
              </div>
              {/* end card-metatags */}
            </div>
            {/* end card-body */}
          </div>
          {/* end card-bio */}
        </div>
        {/* end grid-wrapper */}
      </section>
    </>
  );
}

export default PeoplePage;
