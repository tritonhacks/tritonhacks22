import ProjectCard from "./ProjectCard";
import "./style.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const PastProjects = () => {
  return (
    <section id="projects">
      <h1 id="projects-header">Past Projects Showcase</h1>
      <h2 id="subheader">Tritonhacks 2021</h2>
      <div id="project-cards">
        {/* example of how you pass props */}
        <ProjectCard name="Whalien 52" id="whalien" image={project1} link="https://devpost.com/software/whalien-52-9a5i83"
        description="Whalien 52 serves to bring awareness and quantify both plastic footprints as well as the impact of efforts in preventing more plastic pollution through calculator and tracker features."/>
        <ProjectCard name="Serene Study" id="study" image={project2} link="https://devpost.com/software/serene-study"
        description="Use this app to have an efficient and organized study session!"/>
        <ProjectCard name="Location Comparison" id="location" image={project3} link="https://devpost.com/software/location-comparison"
        description="In today’s restaurant and hotel market, it’s hard to find the best meal for the best price. Introducing Location Comparison, your one-stop shop for finding restaurants and hotels in different cities."/>
      </div>
      <a href="https://tritonhacks-2021.devpost.com/project-gallery" id="see-more">see more projects</a>
    </section>
  );
};

export default PastProjects;
