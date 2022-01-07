import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Tracks from "./components/Tracks";
import PastProjects from "./components/PastProjects";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Landing />
      <About />
      <Tracks />
      <PastProjects />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
