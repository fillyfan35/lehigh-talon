import React from 'react';

function ButtonsPage() {
  return (
    <>
      <h2>Single Button</h2>
      <section className="button-list">
        <p>Optional text can go here and it can be long or short. Optional text can go here and it can be long or short.
          Optional text can go here and it can be long or short. Optional text can go here and it can be long or short.
          Optional text can go here and it can be long or short. Optional text can go here and it can be long or short.
          Optional text can go here and it can be long or short.</p>
        <div className="button-wrapper">
          <a href="#" className="btn btn-gold">Gold Button</a>
        </div>
        {/* end button-wrapper */}
      </section>

      <h2>Two Buttons</h2>
      <section className="button-list">
        <p>Optional text can go here and it can be long or short.</p>
        <div className="button-wrapper">
          <a href="#" className="btn btn-gold">Gold Button</a>
          <a href="#" className="btn btn-navy">Navy Button</a>
        </div>
        {/* end button-wrapper */}
      </section>

      <h2>Three Buttons</h2>
      <section className="button-list">
        <div className="button-wrapper">
          <a href="#" className="btn btn-gold">Gold Button</a>
          <a href="#" className="btn btn-navy">Navy Button</a>
          <a href="#" className="btn btn-dark_teal">Dark Teal Button</a>
        </div>
        {/* end button-wrapper */}
      </section>
    </>
  );
}

export default ButtonsPage;
