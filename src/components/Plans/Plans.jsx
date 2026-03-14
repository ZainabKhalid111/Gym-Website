import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './plans.css';

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur" style={{ width: '22rem', height: '30rem', left: '0' }}></div>
            <div className="programs-header" style={{gap:'2rem '}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            {/* plan cards */}
            <div className="plans">
                {plansData.map((plan, idx) => (
                    <div className="plan" key={idx}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">{plan.features.map((feature, index) => (
                            <div className="feature">
                                <img src={whiteTick} alt="" /><span key={index}>{feature}</span>
                            </div>
                        ))}
                            </div>

                            <div><span>See more benefits</span></div>
                            <button className="btn">JOIN NOW</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans