import React from 'react';
import alumniBuildingImg from '../../img/alumnibuilding.jpg';

function HerosPage() {
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
    </>
  );
}

export default HerosPage;
