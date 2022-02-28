import "./style.css";

const ProjectCard = ({ image, name, description, link, id }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="project-card">
        <img className="image" src={image} alt={name}/>
        <p className="name" id={id}> {name} </p>
        <p className="description">{description}</p>
      </div>
      </a>
  );
};

export default ProjectCard;
