import "../assets/styles/HeroSection.css";
import { useEffect, useState } from "react";
function HeroSection() {
  const [showTitle, setShowTitle] = useState(true);
  // useEffect( ()=>{
  //   setInterval( ()=>{
  //     setShowTitle(!showTitle)
  //   }, 5000)
  // },[showTitle])

  return (
    <>
      <div className="heroSection_container">


        <div className="heroSection_intro">
          <div className="heroSection_titles_container">
            <h1 className="heroSection_title">HI, I'M NAVEENKUMAR</h1>
            <h2 className="heroSection_title">CREATIVE</h2>
            <div className="dynamicChanging_title">
              {showTitle ? (
                <h3 className="heroSection_title">FRONTEND DEVELOPER</h3>
              ) : (
                <h3 className="heroSection_title">LITTLE BIT DESIGNER</h3>
              )}
            </div>
          </div>
          <p className="heroSection_para">
            Hello! I'm a passionate frontend developer with a strong foundation
            in HTML, CSS, JavaScript, and React. I thrive on crafting intuitive
            and visually appealing user interfaces that deliver seamless
            experiences. With hands-on experience building over 25+ projects, I
            am eager to bring my creativity and problem-solving skills to
            real-world challenges. Let's collaborate to transform ideas into
            impactful digital solutions!.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
