import React from 'react';
import './hero.css'
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import {motion} from 'framer-motion';


const Hero = () => {
  const transition = {type :'spring', duration : 3};
  const mobile = window.innerWidth <= 768 ? true :false;

  return (
    <div className="hero" id='home'>
      <div className="blur" style={{width:'22rem', height:'30rem', left:'0'}}></div>
      <div className="left-hero">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
         <motion.div 
         initial = {{left: mobile ? '165px' : '238px'}}
         whileInView= {{left: '8px'}}
         transition = {{...transition, type:'tween'}}
         >

         </motion.div>
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

        <motion.div 
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}

        className="heart-rate">
          <img src={heart} alt="" /><span>Heart rate</span>
          <span>116bpm</span>
          </motion.div>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img 
        initial={{ right: '1rem' }}
        whileInView={{ right: '20rem' }}
        transition={transition}
src={hero_image_back} alt="" className='hero-image-back' />
        {/* calories */}
        <motion.div 
        initial={{ right: '37rem' }}
        whileInView={{ right: '28rem' }}
        transition={transition}

        className="calories">
          <img src={calories} alt="" />
          <div >
            <span>Calories Burned </span><span>220 kcal</span>
          </div>
        </motion.div>
      </div>
  
  )
}

export default Hero