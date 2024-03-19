import React from 'react';
import lehighLogo from '../img/lehigh_logo_white.svg';

function Footer() {
  return (
    <>
      <footer className="footer global_footer">
        <div className="footer-wrapper">
          <div className="logo">
            <a href="https://www.lehigh.edu"><img src={lehighLogo} alt="Lehigh University logo" /></a>
          </div>
          {/* end logo */}
          <div className="copyright">
            <p>&copy;
              <script>
                document.write(new Date().getFullYear());
              </script> Lehigh University. <a href="https://www1.lehigh.edu/about/copyright?footer">All Rights
                Reserved</a>.
              <a href="https://www1.lehigh.edu/about/privacy?footer">Privacy</a>. <a
                href="https://www1.lehigh.edu/about/serviceagreement?footer">Terms</a>
            </p>
          </div>
          {/* end copyright */}
          <div className="common_links">
            <ul>
              <li><a href="https://www2.lehigh.edu/about/the-perch?footer">The Perch</a></li>
              <li><a href="https://www.lehigh.edu/~www/directory?footer">Directory</a></li>
              <li><a href="https://www1.lehigh.edu/about/maps?footer">Maps</a></li>
              <li><a href="https://www1.lehigh.edu/contactlehigh">Contact</a></li>
              <li><a href="https://www1.lehigh.edu/emergency">Emergency Info</a></li>
              <li><a href="https://www1.lehigh.edu/about/mobilefriendly?footer">Mobile Friendly</a></li>
              <li><a href="https://www.lehigh.edu/~inprv/heoa/index.html">Higher Education Opportunity Act</a></li>
              <li><a href="https://www.lehigh.edu/principlesequity?footer">Equitable Community</a></li>
              <li><a href="https://www.lehigh.edu/nondiscrimination?footer">Non-Discrimination</a></li>
            </ul>
          </div>
          {/* end common_links */}
        </div>
        {/* end footer-wrapper */}
      </footer>
    </>
  );
}

export default Footer;
