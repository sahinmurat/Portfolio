import React from "react";
import author from "../images/me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="about-text">
          I am a self-motivated, ambitious software developer always looking for the next challenge. As a proof I have graduated from the university with honor and award. With 3.939/4.000 I reached the best note and took an award from the president of my country. I leverage pride myself on creating efficient, scaling, and maintainable code. I have a penchant for working on projects that automation and the newest software development technology to streamline a process or business. I enjoy bringing high value to a team and am always eager to learn and use the latest technology to deliver creative solutions to modern problems. As tools I use React HTML5, CSS3 and JS on frontend; on backend Django, NodeJS Expess and Mongo DB. In my career  I was 5 years team and project leader.  Besides I am good chess and volleyball player...
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
