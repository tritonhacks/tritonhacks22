import "./style.css";
import acm from "../../assets/acm.png";
import csforeach from "../../assets/csforeach.png";
import dsss from "../../assets/dsss.png";
import ieee from "../../assets/ieee.png";
import deckard from "../../assets/deckard.png";
import ucsdjsoe from "../../assets/ucsdjsoe.png";
import vgdc from "../../assets/vgdc.png";

const Sponsors = () => {
  return (
    <section id="sponsors-wrapper">
      <h1 id="sponsors">Sponsors</h1>
      <p id="sponsor-us">
        Interested in sponsoring us? Email us at&nbsp;
        <span>
          <a id="email" href="mailto:tritonhacks@gmail.com">
            tritonhacks@gmail.com
          </a>
        </span>
        .
      </p>
      <div id="sponsor-images">
        <img src={ucsdjsoe} alt="UCSD Jacobs School of Engineering"></img>
        <img src={deckard} alt="Deckard Technologies"></img>
      </div>
      <h1 id="partners">Partners</h1>
      <div id="partner-images">
        <img src={csforeach} alt="CSForEach"></img>
        <img src={acm} alt="Association for Computing Machinery"></img>
        <img src={dsss} alt="Data Science Student Society"></img>
        <img
          src={ieee}
          alt="Institute of Electrical and Electronics Engineers"
        ></img>
        <img src={vgdc} alt="Video Game Development Club"></img>
      </div>
    </section>
  );
};

export default Sponsors;
