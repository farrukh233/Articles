import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ padding: "20px 30px" }}>
      About company <hr />
      <br></br>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default About;
