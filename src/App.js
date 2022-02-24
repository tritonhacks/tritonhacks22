import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Prizes from "./components/Prizes";
import PastProjects from "./components/PastProjects";
import Sponsors from "./components/Sponsors";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Landing />
      <Countdown />
      <About />
      {/* <Prizes /> */}
      <PastProjects />
      <Schedule />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
