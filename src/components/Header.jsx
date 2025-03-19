import resume from "../assets/resume/Naveenkumar.pdf";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import "../assets/styles/Header.css"
function Header({sideBarFunc, sidebarStatus}){
    return(
        <>
        <header>
            <div className="header_1">
                <div className="title_container">
                    <h1>Naveenkumar.</h1>
                </div>
                <a href={resume} download={resume}>
                    <button className="downloadBtn" type="button">Download CV</button>
                </a>
            </div>
            <nav className="nav_largerScreen ">
                <ul>
                    <li><NavLink className="header_link" to="/">Home</NavLink></li>
                    <li><NavLink className="header_link"  to="/about">About</NavLink></li>
                    <li><NavLink className="header_link"  to="/projects">Projects</NavLink></li>
                    <li><NavLink className="header_link"  to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="menuIcon_container">
                {(sidebarStatus) ? <CloseIcon className="menuIconBtn" role="button" onClick={sideBarFunc}/> : <MenuIcon className="menuIconBtn" role="button" onClick={sideBarFunc}/>}
            </div>
        </header>
        </>
    )
}

export default Header;