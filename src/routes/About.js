import React from "react";
import "./Home.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>"What is drama but life with the dull bits cut out"</span>
      <span>- Alfred Hitchcock</span>
    </div>
  );
}

export default About;
