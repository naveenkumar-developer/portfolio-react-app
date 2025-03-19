import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../assets/styles/Footer.css"
function Footer(){
    return(
        <>
            <footer className='footer'>
                <div className="container">
                <div className="footer_title">
                    <h5>Naveenkumar</h5>
                </div>
                <div className="footerLinks">
                    <a href="mailto:nkdavid861@gmail.com">
                    <EmailIcon />
                    </a>
                    <a href="https://github.com/naveenkumar-developer">
                    <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/naveenkumardeveloper01">
                    <LinkedInIcon />
                    </a>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;