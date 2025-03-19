import projectImg1 from "../assets/images/projectImg1.png"
import projectImg2 from "../assets/images/projectImg2.png"
import projectImg3 from "../assets/images/projectImg3.png"
import projectImg4 from "../assets/images/projectImg4.png"
import projectImg5 from "../assets/images/projectImg5.png"
import projectImg6 from "../assets/images/projectImg6.png"
import projectImg7 from "../assets/images/projectImg7.png"
import projectImg8 from "../assets/images/projectImg8.png"
import ProjectCard from "./ProjectCard";
import "../assets/styles/Project.css"
function Project(){
    const projectList=[
        {
            projectTitle: "E-shop",
            projectImg:projectImg1,
            projectDescription:"React App, Responsive, cart functionality",
            projectLink:"https://naveenkumar-developer.github.io/e-shop-react-app/"
        },
        {
            projectTitle: "Form validation",
            projectImg:projectImg2,
            projectDescription:"html, css, javascript, Responsive, Error handling",
            projectLink:"https://naveenkumar-developer.github.io/formValidationWithRWD/"
        },
        {
            projectTitle: "Random Password Generator",
            projectImg:projectImg3,
            projectDescription:"html, css, javascript, Responsive, Error handling",
            projectLink:"https://naveenkumar-developer.github.io/RandomPasswordGenerator/"
        },
        {
            projectTitle: "QR code generator",
            projectImg:projectImg4,
            projectDescription:"html, css, javascript, GoQR.me API, Responsive",
            projectLink:"https://naveenkumar-developer.github.io/QRcodeGenerator/"

        },
        {
            projectTitle: "Stop watch",
            projectImg:projectImg5,
            projectDescription:"html, css, javascript, Responsive, Dom features.",
            projectLink:"https://naveenkumar-developer.github.io/StopWatch/"
        },
        {
            projectTitle: "Image slider",
            projectImg:projectImg6,
            projectDescription:"html, css, javascript, largescreen, smooth scrolling effect",
            projectLink:"https://naveenkumar-developer.github.io/imageSlider/"
        },
        {
            projectTitle: "Weather Application",
            projectImg:projectImg7,
            projectDescription:"html, css, javascript, WeatherAPI api integration, LargeScreen ",
            projectLink:"https://naveenkumar-developer.github.io/weatherApplication/"
        },
        {
            projectTitle: "Todo list",
            projectImg:projectImg8,
            projectDescription:"html, css, javascript, LargeScreen ",
            projectLink:"https://naveenkumar-developer.github.io/Todolist/"
        },
    ]
    return(
        <>
        <div className="projectPage p-3">
            <h1 className="pt-5">Projects</h1>
        <div className="projectCards_container mt-5">
            {projectList.map( (item, index)=>(
                <ProjectCard key={index} {...item}/>
            ))}
        </div>
        </div>

        </>
    )
}

export default Project;