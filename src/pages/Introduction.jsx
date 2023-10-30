import Creditcard from '../assets/images/Component 1.png'
import Document from '../assets/images/document-duplicate.svg';
import Identification from '../assets/images/identification.svg';
import Security from '../assets/images/lock-closed.svg';
import Green from '../assets/images/Frame 1000001585.png';
import GreenBig from '../assets/images/Frame 83.png'

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
      <span className="green">
        <img src={Green} alt="" className="mobile" />
        <img src={GreenBig} alt="" className="desktop" />
      </span>
    </div>
  );
}

export default Introduction;
