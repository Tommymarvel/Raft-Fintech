import Frame1 from '../assets/images/Frame 88.svg';
import Frame2 from '../assets/images/Frame 1000001576.png';
import Frame3 from '../assets/images/Frame 1000001577.png';
import Frame4 from '../assets/images/Frame 1000001578.png';
import Framebig1 from '../assets/images/Frame 88.png';
import Framebig2 from '../assets/images/Frame 32.png';
import Framebig3 from '../assets/images/Frame 34.png';
import Framebig4 from '../assets/images/Frame 36.png';
import Cards from './Cards';


const Elevatepage = () => {
  return (
    <div className="elevatepage">
      <span className="intro">
        <h2>Elevate Your Financial Journey with RAFT</h2>
      </span>

      <p className="introparagraph">
        RAFT offers a world of financial possibilities. From investments to
        payments,  we&rsquo;ve got you covered. Join us and unlock your
        financial potential today.
      </p>
      < Cards />
      {/* <div className="frames">
        <img src={Frame1} alt="seamless payment" />
        <img src={Frame2} alt="smart investing" />
        <img src={Frame3} alt="wealth management" />
        <img src={Frame4} alt="financial planning" />
      </div> */}
      <div className="framesbig">
        <img src={Framebig1} alt="seamless payment" />
        <img src={Framebig2} alt="smart investing" />

        <img src={Framebig4} alt="financial planning" />
        <img src={Framebig3} alt="wealth management" />
      </div>
    </div>
  );
};

export default Elevatepage;
