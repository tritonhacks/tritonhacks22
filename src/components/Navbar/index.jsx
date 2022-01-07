import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/" className="navbar-title">
        TritonHacks
      </a>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#sponsors">Sponsors</a>
      </div>
    </div>
  );
};

export default Navbar;
