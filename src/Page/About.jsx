import React from 'react'
import {  } from "../Style/About.css"; 
import about  from "../asset/about.png";

const About = () => {
  return (

<div className='about-page '>


 {/*  righrt  */}
 <div className="right">
  <img src= {about} alt="" />
 </div>

 <div className="left">
  <h2>About ME </h2>
  <h5>hello! I am a biplob. I am a professional web designer expert, I can create and set up your website properly. of experience in creating unique and custom website designs to suit your individual has needs. I am experienced in 1 years. For more details feel free to contact me.</h5>
  <a href="#">Contact ME </a>
 </div>


</div>

  )
}

export default About