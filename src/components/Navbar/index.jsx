import "./style.css";

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

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/" className="navbar-title">
        TritonHacks
      </a>
      <div className="navbar-links">
        {links.map((link, key) => (
          <a
            id={link.id}
            className="underline"
            href={`#${link.id}`}
            key={`nav${key}`}
          >
            {link.displayText}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
