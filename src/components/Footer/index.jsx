import "./style.css";
import facebook from "../../assets/fb_icon.svg";
import instagram from "../../assets/insta_icon.svg";
import mail from "../../assets/mail_icon.svg";

const Footer = () => {
  return (
    <section id="footer">
      <h1 id="foot-header">Contact Us</h1>
      <div id="icon-box">
        <a
          href="https://www.facebook.com/triton.hacks"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <img className="footer-icon" src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/ucsdtritonhacks/"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <img className="footer-icon" src={instagram} alt="instagram" />
        </a>
        <a href="mailto:tritonhacks@gmail.com" className="icon">
          <img className="footer-icon" src={mail} alt="email" />
        </a>
      </div>
      <div className="footer-links">
        <a href="https://docs.google.com/document/d/15XFLu9cKmQYgjIovn3-t5Ow37imWAC_IvOzRQALUDl0/edit?usp=sharing">
          TritonHacks 2022 Code of Conduct
        </a>
        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>
      </div>
    </section>
  );
};

export default Footer;
