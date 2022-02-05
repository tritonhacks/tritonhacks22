import "./style.css";
import discord from "../../assets/discord.svg";
import facebook from "../../assets/fb_icon.svg";
import instagram from "../../assets/insta_icon.svg";
import mail from "../../assets/mail_icon.svg";

const Footer = () => {
  return (
    <div id="footer">
      <h1 id="foot-header">
        Contact Us
      </h1>
      <div id="icon-box">
        <a href="#footer" target="_blank" rel="noreferrer" className="icon">
          <img src={discord} alt="discord"/>
        </a>
        <a href="https://www.facebook.com/triton.hacks" target="_blank" rel="noreferrer" className="icon">
          <img src={facebook} alt="facebook"/>
        </a>
        <a href="https://www.instagram.com/ucsdtritonhacks/" target="_blank" rel="noreferrer" className="icon">
          <img src={instagram} alt="instagram"/>
        </a>
        <a href="mailto:tritonhacks@gmail.com" className="icon">
          <img src={mail} alt="email"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
