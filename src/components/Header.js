import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Hi, Here is your Web Developer!</h1>
        <Typed
          className="typed-text"
          strings={["Frontend Development", "Web Design","Backend Development","React and React Native", "Web Development", "MERN Stack", "Django"]}
          typeSpeed={60}
          backSpeed={70}
          loop
        />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>
      </div>
    </div>
  )
}

export default Header;
