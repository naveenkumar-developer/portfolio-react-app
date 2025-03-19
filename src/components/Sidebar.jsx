import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { NavLink } from 'react-router-dom';
import "../assets/styles/Sidebar.css"
function Sidebar({recieveData}){
    return(
        <>
        <div className={`sideBar_container ${recieveData ? "openSidebar" : "hideSidebar"}`}>
            <div className="sideBar_title">
                Naveenkumar Portfolio
            </div>
            <div className="sidebarItem">
                <NavLink to="/portfolio-react-app/" className="sidebarlink">
                <HomeIcon /> Home
                </NavLink>
            </div>
            <div className="sidebarItem">
                <NavLink to="/about" className="sidebarlink">
                <ListAltIcon /> About
                </NavLink>

            </div>
            <div className="sidebarItem">
                <NavLink to="/projects" className="sidebarlink">
                <ComputerIcon /> Projects
                </NavLink>
            </div>
            <div className="sidebarItem">
                <NavLink to="/contact" className="sidebarlink">
                <ContactPageIcon /> Contact
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Sidebar;