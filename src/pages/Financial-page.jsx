import FinImage from '../assets/images/Frame 1000001580.png';
import FinImageBig from '../assets/images/Frame 1000001580-big.png';
import BankNotes from '../assets/images/banknotes.svg';
import CircleStack from '../assets/images/circle-stack.svg';
import ArrowLeftRight from '../assets/images/arrows-right-left.svg';
import SpendBetter from '../assets/images/Frame 35.png';
import InvestBetter from '../assets/images/Frame 1000001583.png';
import SpendBetterBig from '../assets/images/Frame 35-big.png';
import InvestBetterBig from '../assets/images/Frame 89.png';
import Smiles from '../assets/images/Frame 150.png';
import SmilesBig from '../assets/images/Frame 150-big.png';

const FinancialPage = () => {
  return (
    <div className="financial-page">
      <span className="intro">
        <h3>Your Financial Freedom, Your Way</h3>
      </span>

      <p className="intro-paragraph">
        We believe that managing your finances should be effortless and
        cost-effective. That&rsquo;s why we offer you the freedom you deserve
      </p>
      <span className="fin-image">
        <img src={FinImage} alt="" className="mobileimg" />
        <img src={FinImageBig} alt="" className="tabletimg" />
      </span>

      <section>
        <div className="benefits">
          <span className="perk">
            <span className="perkmobile">
              <img src={BankNotes} alt="" />
              <p>No minimum balance fees</p>
            </span>
            <p className="bullets">
              Say goodbye to minimum balance fees. Your account, your balance—no
              hidden charges
            </p>
          </span>
          <span className="perk">
            <span className="perkmobile">
              <img src={CircleStack} alt="" />
              <p>No monthly fees</p>
            </span>
            <p className="bullets">
              Bank with us without worrying about monthly fees. Keep more of
              your money where it belongs—in your account
            </p>
          </span>
          <span className="perk">
            <span className="perkmobile">
              <img src={ArrowLeftRight} alt="" />
              <p>No bank transfer fees</p>
            </span>
            <p className="bullets">
              Seamlessly transfer funds without the extra cost. Send and receive
              money with zero bank transfer fees.
            </p>
          </span>
        </div>
      </section>
      <section>
        <div className="green">
          <p className="bigtext" >
            Smart investments, secure payments, and expert guidance, all in one
            place.
          </p>
        </div>
        <div className="secondheading">
          <h3 className="intro2">Confidently Shape Your Financial Future</h3>
          <p className="intro2paragragh">
            At RAFT, we empower you to confidently shape your financial
            future.Our modern approach simplifies saving and investing, making
            it easier than ever.
          </p>
        </div>
        <div className="benefitimage">
          <img src={SpendBetter} alt="" className="mobile" />
          <img src={InvestBetter} alt="" className="mobile" />
          <img src={SpendBetterBig} alt="" className="desktop" />
          <img src={InvestBetterBig} alt="" className="desktop" />
        </div>
        <div className="reviews">
          <span>
            <p className="head">50+</p>
            <p className="sub"> CITIES</p>
          </span>
          <span>
            <p className="head">50,000+</p>
            <p className="sub">TRANSACTIONS</p>
          </span>
          <span>
            <p className="head">3M+</p>
            <p className="sub">USER</p>
          </span>
          <span>
            <p className="head">5</p>
            <p className="sub">USER RATINGS</p>
          </span>
        </div>
        <span className="smilesimage">
          <img src={SmilesBig} alt="" className="tabletimg" />
          <img src={Smiles} alt="" className="mobileimg" />
        </span>
      </section>
    </div>
  );
};

export default FinancialPage;
