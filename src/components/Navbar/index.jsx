import "./style.css";
import Logo from "../../assets/Logo.png";

const links = [
  {
    id: "about",
    displayText: "About",
  },
  {
    id: "projects",
    displayText: "Past Projects",
  },
  {
    id: "sponsors",
    displayText: "Sponsors",
  },
];

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/" className="navbar-title">
        <img src={Logo} alt="" />
        MAY 21-22, 2022
      </a>
      <div className="navbar-links">
        {links.map((link, key) => (
          <a className="underline" href={`#${link.id}`} key={`nav${key}`}>
            {link.displayText}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
