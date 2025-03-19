import { projectFullList } from "../store/ProjectList";
import "../assets/styles/ProjectPage.css";
function ProjectPage() {
  return (
    <>
      <div className="projectPage_container">
        {projectFullList.map( (item, index)=>(
        <div className="projectCard_projectPage appearBox" key={index}>
        <div className="img_container">
          <img src={item.projectImg} alt="project image" />
          </div>
          <div className="projectBody_projectPage">
            <h5>{item.projectTitle}</h5>
            <p>{item.projectDescription}</p>
            <a href={item.projectLink}>
            <button type="button">View Project</button>
            </a>
        </div>
      </div>
        ))}
      </div>
    </>
  );
}

export default ProjectPage;
