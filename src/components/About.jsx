import React from "react"
import UserClass from "./UserClass";
import User from "./User";
const About = () => {


  return (
    <div>
      <h1>About</h1>
      <h2>This is React Learning</h2>
      <h3>{console.log("Inside Parent component")}</h3>
      <User />
      <UserClass name={"Krishna Tripathi"} Location={"Maharashtra"}/>
    </div>
  )
};

export default About;
