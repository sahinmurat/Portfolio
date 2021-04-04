import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate rem sapiente deleniti. Laborum quos, consequatur asperiores saepe dolore laboriosam numquam ipsum doloremque itaque sunt aliquid temporibus ipsam minima eum ratione cumque libero esse molestias illum odio? Suscipit, asperiores fugit voluptatibus ipsum corrupti magni necessitatibus a accusantium vero totam impedit ab incidunt maxime aspernatur eligendi magnam. Adipisci, quam? Excepturi deleniti molestias consequatur amet expedita quaerat! Commodi dolores possimus numquam incidunt odio ipsa vel, sunt omnis qui consequatur, debitis aspernatur exercitationem facilis ullam beatae soluta adipisci dolorem molestiae veniam nobis vitae veritatis? Quod maiores sapiente sint itaque! Deserunt autem voluptatum suscipit laudantium fugit hic nesciunt rem dolorem sapiente rerum, delectus maiores esse amet praesentium,
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
