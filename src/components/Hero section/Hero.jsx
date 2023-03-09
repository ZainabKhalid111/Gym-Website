import React from 'react';
import './hero.css'
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/*  heading*/}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>

          <div><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo maiores voluptatem eaque, reiciendis debitis!</span></div>
        </div>

        {/* figures  */}
        <div className="figures">
          <div>
            <span>140+</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>978+</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>50+</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button><button className="btn">Learn more</button>
        </div>

      </div>

      <div className="right-hero">
        <button className="btn">Join now</button>
        <div className="heart-rate">
          <img src={heart} alt="" /><span>Heart rate</span>
          <span>116bpm</span>
          </div>
      </div>
    </div>
  )
}

export default Hero