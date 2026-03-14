import React, { useState } from 'react';
import './testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';


const Testimonials = () => {

    const [selected, setselected] = useState(0);
    const length = testimonialsData.length;
    const transition = { type: 'spring', duration: 3 }


    return (
        <div className="Testimonials" id ='testimonials'>
            <div className="left-testimonials">
                <span>Testimonials</span>
                <span className='stroke-text'>what they</span>
                <span>say about us</span>
                <motion.span key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}>

                    {testimonialsData[selected].review}</motion.span>

                <span>
                    <span>{testimonialsData[selected].name}
                    </span>{" "}
                    — {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-testimonials">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}></motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}></motion.div>

                <motion.img key={selected}

                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}

                    src={testimonialsData[selected].image} alt="" />


                <div className='arrows'>
                    <img X onClick={() => { selected === 0 ? setselected(length - 1) : setselected((prev) => prev - 1) }}

                        src={leftArrow} alt="" />

                    <img
                        onClick={() => { selected === length - 1 ? setselected(0) : setselected((prev) => prev + 1) }}

                        src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials