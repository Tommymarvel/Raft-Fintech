import Vuesax from '../assets/images/import.png';
import Bar from '../assets/images/bars-3.svg';
import Chevron from '../assets/images/chevron-right.svg';
import Frame1 from '../assets/images/Frame 31.png';
import FrameBig from '../assets/images/Frame 31-big.png';
import Bloomberg from '../assets/images/bloomberg-1.svg';
import Cnbc from '../assets/images/cnbc-1.svg';
import Reuter from '../assets/images/reuters-2-1 1.svg';
import CNN from '../assets/images/cnn-logo 1.svg';
import Forbes from '../assets/images/Forbes_logo 1.svg'
import Background from '../assets/images/Vector.png'

const Navbar = () => {
  return (
    <header className="homepage">
      <nav>
        <ul className="logo">
          <li>
            <img src={Vuesax} alt="Logo" />
          </li>
          <li>Raft</li>
        </ul>
        <ul className="middlenav">
          <li>Solution</li>
          <li>Learn</li>
          <li>About</li>
        </ul>
        <ul className="loginnav">
          <li>Login</li>
          <li>Get Started</li>
        </ul>
        <ul className="menu">
          <li>
            <img src={Bar} alt="Menu Icon" />
          </li>
        </ul>
      </nav>
      <div className='overlay'>
        <img src={Background} alt="" className="netbackground" />
        <section className="main-content">
          <span className="chevron">
            <p>Introducing Raft Cards</p>
            <img src={Chevron} alt="Chevron Icon" />
          </span>
          <h1>Building the future of banking.</h1>
          <p className="p1">
            Experience the future of banking with RAFT. We&apos;re here to
            empower your financial journey.
          </p>
          <p className="p2">
            <a href="#get-started">Get Started</a>
          </p>
        </section>
      </div>

      <figure className="image-frame">
        <img src={FrameBig} alt="Image Frame" className="tabletimg" />
        <img src={Frame1} alt="Image Frame" className="mobileimg" />
      </figure>
      <section className="featured-in">
        <p>Featured and seen in</p>
        <div className="logos">
          <img src={Forbes} alt="Forbes Logo" className="extra" />
          <img src={Cnbc} alt="CNBC Logo" />
          <img src={Bloomberg} alt="Bloomberg Logo" />
          <img src={Reuter} alt="Reuters Logo" />
          <img src={CNN} alt="CNN Logo" className="extra" />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
