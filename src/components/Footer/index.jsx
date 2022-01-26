import "./style.css";
import discord from "../../assets/discord.svg";
import facebook from "../../assets/fb_icon.svg";
import instagram from "../../assets/insta_icon.svg";
import mail from "../../assets/mail_icon.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div>
        <h1 id="h1">
          Contact Us
        </h1>
      </div>
        <div id="icon-box">
            <div id="discord" className="icon">
              <a href="" target="_blank" rel="noreferrer">
                <img src={discord} alt="discord"/>
              </a>
            </div>
            <div id="facebook" className="icon">
              <a href="https://www.facebook.com/triton.hacks" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook"/>
              </a>
            </div>
            <div id="insta" className="icon">
              <a href="https://www.instagram.com/ucsdtritonhacks/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram"/>
              </a>
            </div>
            <div id="mail" className="icon">
              <a href="mailto:tritonhacks@gmail.com">
                <img src={mail} alt="email"/>
              </a>
            </div>
        </div>
    </div>
  );
};

export default Footer;
