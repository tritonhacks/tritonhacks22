import "./style.css";
import acm from "../../assets/acm.png";
import csforeach from "../../assets/csforeach.png";
import dsss from "../../assets/dsss.png";
import deckard from "../../assets/deckard.png";
import vgdc from "../../assets/vgdc.png";
import s1 from "../../assets/sponsor-1.webp";
import s2 from "../../assets/sponsor-2.png";
import s3 from "../../assets/sponsor-3.png";
import s4 from "../../assets/sponsor-4.png";
import s6 from "../../assets/sponsor-6.png";
import s7 from "../../assets/sponsor-7.png";

const Sponsors = () => {
  return (
    <section id="sponsors-wrapper">
      <h1 id="sponsors">Sponsors</h1>
      <div id="sponsor-images">
        <a href="https://www.deckard.com/">
          <img src={deckard} alt="Deckard Technologies"></img>
        </a>

        <a href="https://nfinit.com/">
          <img src={s1} alt="Nfinit Data Centers"></img>
        </a>

        <a href="https://cse.ucsd.edu/">
          <img src={s3} alt="UC San Diego Computer Science and Engineering" />
        </a>

        <a href="https://github.com">
          <img src={s4} alt="Github" />
        </a>
        <a href="https://mlh.io">
          <img src={s6} alt="Major League Hacking" />
        </a>
        <a href="https://maxentric.com/">
          <img src={s7} alt="MaXentric" />
        </a>
        <a href="https://www.digitalocean.com/">
          <img src={s2} alt="Digital Ocean"></img>
        </a>
      </div>
      <p id="sponsor-us">
        Interested in sponsoring us? Email us at&nbsp;
        <span>
          <a id="email" href="mailto:tritonhacks@gmail.com">
            tritonhacks@gmail.com
          </a>
        </span>
        .
      </p>
      <h1 id="partners">Partners</h1>
      <div id="partner-images">
        <a href="https://csforeach.ucsd.edu/">
          <img src={csforeach} alt="CS foreach"></img>
        </a>
        <a href="https://acmucsd.com/">
          <img src={acm} alt="Association for Computing Machinery"></img>
        </a>
        <a href="https://vgdc.dev/">
          <img src={vgdc} alt="Video Game Development Club"></img>
        </a>
        <a href="https://ds3.ucsd.edu/">
          <img src={dsss} alt="Data Science Student Society"></img>
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
