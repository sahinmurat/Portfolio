import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";


const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>John Doe</h3>
          <p>In my 25 years of doing this I have NEVER experienced a designer quite like you – you were always on point, got things done with this crazy turnaround time, made the whole process so easy, never had to redo anything, and a pure delight to work with.</p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>Jane Dery</h3>
          <p>Where have you been all my life? We are so lucky to have you because you are one of a kind and your talent runs deep. I applaud all you do always and I never ever want to work another without you! Thank you again for bringing the brand to my life!</p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>Drea Slybe</h3>
          <p>OMG! I am blown away – my website is amazing! So much more reflective of who I am…I really am so impressed! It has such an open, expansive feel. You are a rock star! Much Kindness.</p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
          <h3>Zuvay Be.</h3>
          <p>All I can say is Thank you! You have been absolutely amazing. I love how everything came together as well. I’ve already recommended you to a few people. I will be contacting you sooner than later.</p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel;
