import "./style.css";

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
              <a href="" target="_blank">
                <img src="../../assets/discord.svg" alt="discord"/>
              </a>
            </div>
            <div id="facebook" className="icon">
              <a href="https://www.facebook.com/triton.hacks" target="_blank">
                <img src="../../assets/fb_icon.svg" alt="facebook"/>
              </a>
            </div>
            <div id="insta" className="icon">
              <a href="https://www.instagram.com/ucsdtritonhacks/" target="_blank">
                <img src="../../assets/insta_icon.svg" alt="instagram"/>
              </a>
            </div>
            <div id="mail" className="icon">
              <a href="mailto:tritonhacks@gmail.com">
                <img src="../../assets/mail_icon.svg" alt="email"/>
              </a>
            </div>
        </div>
    </div>
  );
};

export default Footer;
