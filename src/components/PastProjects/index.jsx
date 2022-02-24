import ProjectCard from "./ProjectCard";
import "./style.css";
import ball from "../../assets/beach-ball.svg";

const PastProjects = () => {
  return (
    <section id="projects">
      {/* example of how you pass props */}
      <ProjectCard name="name" description="description" image={ball} />
    </section>
  );
};

export default PastProjects;
