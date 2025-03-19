import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../assets/styles/About.css";
function About() {
  return (
    <>
      <div className="aboutPage_container">
        <h3>About me</h3>
        <h4>Turning ideas into engaging digital experiencs</h4>
        <div className="flex_container container ">

        <div className="who_i_am box ">
          <h5>Who i am</h5>
          <p>
            Hi, I’m Naveenkumar, a passionate Frontend Developer with a knack
            for crafting intuitive and visually appealing user interfaces. My
            journey in web development began with a curiosity for design and
            functionality, which quickly evolved into a deep love for creating
            digital experiences.
          </p>
        </div>

        <div className="skills_and_expertise box ">
          <h5>Skills and Expertise</h5>
          <p>
            Over the years, I’ve honed my skills in HTML, CSS, JavaScript, and
            React.js, building dynamic and responsive web applications. I have
            developed around 25+ frontend projects that showcase my creativity
            and technical expertise, ranging from e-commerce platforms to
            productivity tools.
          </p>
        </div>

        <div className="educational_background box ">
          <h5>Educational Background</h5>
          <p>
            I’m a graduate of Information Technology from AG Arts and Science
            College and have completed a frontend development bootcamp at Qtree
            Technologies, where I earned a certification in React.js. My
            educational background and hands-on project experience have equipped
            me with the skills to turn ideas into functional, engaging websites.
          </p>
        </div>
        <div className="beyond_coding box ">
          <h5>Beyond Coding</h5>
          <p>
            When I’m not coding, I enjoy exploring UI/UX design trends, learning
            about data structures and algorithms, and diving into the exciting
            world of backend development to expand my skill set.
          </p>
        </div>

        <div className="looking_ahead box ">
          <h5>Looking Ahead</h5>
          <p>
            I’m currently looking for opportunities where I can contribute my
            skills to impactful projects and continue to grow as a developer.
            Let’s connect and build something amazing together!
          </p>
        </div>
        </div>

        <div className="skills_container container ">
          <h3>Skills</h3>
          <div className="skill_box_container">

          <div className="html_box">
            <h6 className="html">HTML</h6>
            <span className="html_progressBar"></span>
          </div>
          <div className="css_box">
            <h6 className="css">CSS</h6>
            <span className="css_progressBar"></span>
          </div>
          <div className="bootsrap_box">
            <h6 className="bootstrap">BOOTSTRAP</h6>
            <span className="bootstrap_progressBar"></span>
          </div>
          <div className="javascript_box">
            <h6 className="javascript">JAVASCRIPT</h6>
            <span className="javascript_progressBar"></span>
          </div>
          <div className="react_box">
            <h6 className="react">React</h6>
            <span className="react_progressBar"></span>
          </div>
          <div className="git_box">
            <h6 className="git">GIT AND GITHUB</h6>
            <span className="git_progressBar"></span>
          </div>
          <div className="figma_box">
            <h6 className="figma">Figma</h6>
            <span className="figma_progressBar"></span>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;
