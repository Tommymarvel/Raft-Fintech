import Creditcard from '../assets/images/Component 1.png';
import Document from '../assets/images/document-duplicate.svg';
import Identification from '../assets/images/identification.svg';
import Security from '../assets/images/lock-closed.svg';
import ProfileImage1 from '../assets/images/frame-127.png';
import ProfileImage2 from '../assets/images/Frame 130.png';
import ProfileImage3 from '../assets/images/Frame 136.png';
import ArrowLeft from '../assets/images/heroicons-outline-arrow-small-left.svg';
import ArrowRight from '../assets/images/heroicons-outline-arrow-small-right.svg';

const Introduction = () => {
  return (
    <div className="introduction">
      <p className="heading">Introducing</p>
      <span className="intros">
        <h3>Introducing RAFT&rsquo;s Next-Gen Cards</h3>
      </span>
      <div className="introsparagraph">
        <p>
          Discover RAFT&rsquo;s latest innovation – our new cards. Elevate your
          banking experience with cutting-edge features, security, and
          unprecedented convenience.
        </p>
      </div>

      <span className="creditcard">
        <img src={Creditcard} alt="" />
      </span>
      <div className="benefits">
        <span className="perks">
          <span className="perkmobile">
            <img src={Document} alt="" />
            <p>Contactless Technology</p>
          </span>
          <p className="bullets">
            Our new cards come equipped with contactless technology, allowing
            you to make swift, secure payments with a simple tap.
          </p>
        </span>
        <span className="perks">
          <span className="perkmobile">
            <img src={Identification} alt="" />
            <p>Personalization</p>
          </span>
          <p className="bullets">
            Customize your card to reflect your unique style. Choose from a
            range of designs that suit your personality.
          </p>
        </span>
        <span className="perks">
          <span className="perkmobile">
            <img src={Security} alt="" />
            <p>Enhanced Security</p>
          </span>
          <p className="bullets">
            Your peace of mind is our priority. Our cards feature advanced
            security measures to protect your transactions and data.
          </p>
        </span>
      </div>
      <div className="green profileMobile">
        <h3>Join over 3 million members</h3>
        <p>
          RAFT has transformed my approach to finance. Their smart investing
          options have helped me grow my wealth, and their user-friendly
          platform makes managing my money a breeze. I've never felt more
          confident about my financial future.
        </p>

        <div className="profile">
          <span>
            <h3>Robert Fox</h3>
            <p>Happy Raft User</p>
          </span>
          <span>
            <img src={ProfileImage1} alt="" />
          </span>
        </div>
        <span className="bottomArrow">
          <img src={ArrowLeft} alt="" />
          <img src={ArrowRight} alt="" />
        </span>
      </div>
      <div className="profileDesktop">
        <span className="heading">
          <h3 className="h3">Join over 3 million members</h3>
        </span>

        <div className="reviews">
          <span className="line"></span>
          <div className="green">
            <p>
              RAFT has transformed my approach to finance. Their smart investing
              options have helped me grow my wealth, and their user-friendly
              platform makes managing my money a breeze. I've never felt more
              confident about my financial future.
            </p>

            <div className="profile">
              <span className="name">
                <h3>Robert Fox</h3>
                <p>Happy Raft User</p>
              </span>
              <span className="img">
                <img src={ProfileImage1} alt="" />
              </span>
            </div>
          </div>
          <span className="line"></span>

          <div className="green">
            <p>
              I can't express how grateful I am to RAFT. Their wealth management
              services have been a game-changer for my family's financial
              security. The expert guidance and personalized strategies have
              given us peace of mind, knowing that our future is in capable
              hands.
            </p>

            <div className="profile">
              <span className="name">
                <h3>Cameron Williamson</h3>
                <p>Happy Raft User</p>
              </span>
              <span className="img">
                <img src={ProfileImage2} alt="" />
              </span>
            </div>
          </div>
          <span className="line"></span>
          <div className="green">
            <p>
              RAFT's financial planning services have been a lifeline for me. I
              always struggled with managing my money, but their team crafted a
              tailored plan that addressed my goals and concerns. It's been a
              game-changer in achieving my financial dreams
            </p>

            <div className="profile">
              <span className="name">
                <h3>Esther Howard</h3>
                <p>Happy Raft User</p>
              </span>
              <span className="img">
                <img src={ProfileImage3} alt="" />
              </span>
            </div>
          </div>
          <span className="line"></span>
        </div>

        <span className="bottomArrow">
          <img src={ArrowLeft} alt="" />
          <img src={ArrowRight} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Introduction;
