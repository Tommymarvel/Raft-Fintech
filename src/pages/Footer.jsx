import Chevron from '../assets/images/import.png';
import Raft from '../assets/images/Raft.png';
import Playstore from '../assets/images/Frame 70.png';
import Arrowdown from '../assets/images/chevron-down.svg';
import Copyright from '../assets/images/ph_copyright-light.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="logos">
        <img src={Chevron} alt="" />
        <img src={Raft} alt="" />
      </span>
      <div className="line"></div>
      <div className="tabletfooter">
        <span className="playstore">
          <img src={Playstore} alt="" />
        </span>

        <div className="lists">
          <span className="about">
            <p>About Us</p>
            <ul>
              <li>Our company</li>
              <li>Careers</li>
              <li>Press kits</li>
            </ul>
          </span>
          <span className="legal">
            <p>Legal</p>
            <ul>
              <li>Term of use</li>
              <li>Privacy policy</li>
              <li>About us</li>
            </ul>
          </span>
          <span className="support">
            <p>Support</p>
            <ul>
              <li>Contact us</li>
              <li>FAQ</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="companyinfo">
        <span>
          <p>English(United Kingdom)</p>
          <img src={Arrowdown} alt="" />
        </span>
        <span>
          <img src={Copyright} alt="" />
          <p>Raft Corp,LLC</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
