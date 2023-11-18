import React from 'react';
import Arrow from '../assets/images/Vector.svg';
import Icon from '../assets/images/Frame 87.png';
import Wade from '../assets/images/VectorPicture.png';
import Card4 from '../assets/images/card4 screenshot.png';

const Cards = () => {
  return (
    <div className='card'>
      <div className="card1">
        <div className="tests">
          <span className="testimony">
            <img src={Arrow} alt="" />
            <p>+$22.15 Recieved from Nguyen Shane</p>
          </span>
          <span className="testimony2">
            <img src={Arrow} alt="" />
            <p>+$300.32 Recieved from Cooper Kristin</p>
          </span>
          <span className="testimony">
            <img src={Arrow} alt="" />
            <p>+$50 Recieved from Miles Esther</p>
          </span>
        </div>
        <div className="info">
          <h4>Seamless Payment</h4>
          <p>
            Enjoy secure, seamless transactions that make managing your money a
            breeze.
          </p>
        </div>
      </div>

      {/* card2 */}

      <div className="card2">
        <div className="perks">
          <span className="testimony">
            <img src={Icon} alt="" />
            <p>Cryptocurrency</p>
          </span>
          <span className="testimony">
            <span></span>
            <p>Smart Portfolio Investing</p>
          </span>
          <span className="testimony">
            <span className="colorBox"></span>
            <p>Sustainable Investing</p>
          </span>
        </div>
        <div className="info">
          <h4>Smart Investing</h4>
          <p>
            Grow your wealth confidently with our personalized investment
            solutions, tailored to your financial goals.
          </p>
        </div>
      </div>

      {/* card3  */}
      <div className="card3">
        <div className="perk">
          <div className="testimony">
            <img src={Wade} alt="" />
            <span>
              <h3>Wade Warren</h3>
              <p>Private Health Manager</p>
            </span>
          </div>

          <p className="sendMessage">Send Message</p>
        </div>
        <div className="info">
          <h4>Wealth Management</h4>
          <p>
            Make informed decisions for your financial future with our wealth
            management expertise.
          </p>
        </div>
      </div>

      <div className="card4">
        <div className="perk">
          <img src={Card4} alt="" />
        </div>
        <div className="info">
          <h4>Financial Planning</h4>
          <p>
            Achieve your financial dreams with our comprehensive financial
            planning services, guiding you toward a secure future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
