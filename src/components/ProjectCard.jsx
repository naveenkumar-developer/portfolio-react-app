import "../assets/styles/ProjectCard.css"
function ProjectCard({projectTitle, projectImg, projectDescription, projectLink}){
    return(
        <>
        <div className="ProjectCard scroll-effect-box">
            <div className="imgContainer_projectCard">
                <img src={projectImg} alt="project img" loading="lazy"/>
            </div>
            <div className="projectCard_body">
            <div className="descrition_projectCard">
                <h4>{projectTitle}</h4>
                <p>{projectDescription}</p>
            </div>
            <a href={projectLink}><button className="viewBtn_projectCard">View Project</button></a>
                
            </div>
        </div>

        </>
    )
}

export default ProjectCard;