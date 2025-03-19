import { NavLink } from "react-router-dom";
import "../assets/styles/Info.css"
function Info(){
return(
    <>
    <div className="info_wrapper">

    <div className="info_container ">
        <h3>Let's work together on your next project</h3>
        <p>As a passionate frontend fresher, I'm eager to collaborate and contribute to your next project. Whether it's designing responsive interfaces, building user-friendly websites, or turning ideas into visually engaging digital experiences, I’m excited to bring value with creativity and dedication. Let’s work together to create something remarkable!</p>
        <NavLink className="header_link"  to="/contact">
        <button className="contactBtn">
        Contact
        </button>
        </NavLink>
    </div>
    </div>

    </>
)
}

export default Info;