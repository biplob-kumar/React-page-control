import React from 'react'
import { } from "../Style/Home.css";
import  about  from "../asset/about.png";

const Home = () => {
    return (
        <div className='home-page-main '>
            {/* righr side  */}
            <div className="right-side">
                <h5>Hey, My Name Is</h5>
                <h1>Biplob kuamr</h1>
                <h3>A Freelance Web Designer.HIRE ME</h3>
                <a href="#">Hire me </a>
            </div>
            {/* left side  */}
            <div className="left-img">
                <img src= {about} alt="" />
            </div>

        </div>
    )
}

export default Home