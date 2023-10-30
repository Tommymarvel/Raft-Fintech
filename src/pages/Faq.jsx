import Arrowdown from '../assets/images/chevron-down.svg';

const Faq = () => {
  return (
    <div className="faq">
      <span className='h3'>
        <h3>Frequently asked questions</h3>
      </span>
      <div className="questions">
        <span>
          <p>How do I create an account with RAFT?</p>
          <img src={Arrowdown} alt="" />
        </span>
        <div className="line"></div>
        <span>
          <p>How does RAFT ensure the security of my financial data?</p>
          <img src={Arrowdown} alt="" />
        </span>
        <div className="line"></div>
        <span>
          <p>What types of transactions can I perform with RAFT?</p>
          <img src={Arrowdown} alt="" />
        </span>
        <div className="line"></div>
        <span>
          <p>What benefits does RAFT offer for wealth management?</p>
          <img src={Arrowdown} alt="" />
        </span>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Faq;
