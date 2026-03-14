import React, { useRef } from 'react';
import './join.css';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fu53icy', 'template_s5gio4q', form.current, 'SzRfCUW2D1heUD4ov')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="join" id="join">
            <div className="left-join">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>

                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>

            <div className="right-join">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='from_name' placeholder='Enter your email' />

                    <button className="btn btn-join">Join  Now</button>
                </form>
            </div>

        </div >
    )
}

export default Join