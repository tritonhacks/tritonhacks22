import "./style.css";

let keys = 0;

const Navbar = () => {
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

  return (
    <div className="navbar-container">
      <a href="/" className="navbar-title">
        TritonHacks
      </a>
      <div className="navbar-links">
        {links.map((link) => (
          <a
            id={link.id}
            className="underline"
            href={`#${link.id}`}
            key={`nav${keys++}`}
          >
            {link.displayText}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
