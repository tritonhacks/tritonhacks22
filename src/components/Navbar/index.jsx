import "./style.css";

let keys = 0;

const Navbar = () => {
  // Edit links here
  const links = [
    {
      id: "about",
      displayText: "About",
    },
    {
      id: "projects",
      displayText: "Projects",
    },
    {
      id: "sponsors",
      displayText: "Sponsors",
    },
  ];

  const anchors = links.map((link) => {
    return (
      <a href={`#${link.id}`} key={`nav${keys++}`}>
        {link.displayText}
      </a>
    );
  });

  return (
    <div className="navbar-container">
      <a href="/" className="navbar-title">
        TritonHacks
      </a>
      <div className="navbar-links">{anchors}</div>
    </div>
  );
};

export default Navbar;
