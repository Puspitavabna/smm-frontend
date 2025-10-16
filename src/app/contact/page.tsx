import React from "react";
import Image from "next/image";
import Navbar from "../../components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Logo from '../../app/assets/UHQ SMM.png';
import HeroImage from '../../app/assets/heroImage.png'
import Instagram2 from '../../app/assets/ist.png'
import Snap2 from '../../app/assets/Snap2.png'
import './Contact.css'
import Ellipse25 from '../../app/assets/Ellipse25.png'
import Boxes from '../../app/assets/Boxes1.png'
import Red from '../../app/assets/Red.png'
const Contact = () => {
    return (
        <>
            <div >
                <Navbar />
                <div className="contact-logo1">
                    <Image src={Logo} alt="logo" />
                </div>
                <div className='contact-container'>
                    <div className="contact-left">
                        <h1>Get in Touch With Our Support Team</h1>
                        <p>Need help or have a question? Our team is online 24/7 via chat, email, or Telegram.</p>
                    </div>
                    <div className="contact-right">

                        <Image src={HeroImage} alt="heroImage" />
                        <Image src={Instagram2} alt="instagram" className='insta' />
                    </div>
                    <Image src={Snap2} alt="snap2" />

                </div >
                <Image src={Boxes} alt="boxes" className='boxes' style={{ "position": "absolute", "top": "0", "width": "190px", zIndex: 0 }} />
                <Image src={Ellipse25} alt="ellipse23" className='ellipse23' />
                <div className="contact-section">
                    <h1>Get in Touch With Our Support Team</h1>
                    <p>
                        Have a question or need help? Our team is available 24/7 to assist you via chat, email, or Telegram.
                        Let’s connect and get you the answers you need — fast.
                    </p>

                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your full name" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email address" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Enter your phone number" />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Enter your subject" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows={5} placeholder="Enter your message"></textarea>

                        </div>
                    </form>
                    <div className="button">
                        <div>
                            <button className='submit'>Submit</button>
                        </div>
                    </div>
                </div>
                {/* <Image src={Ball3} alt="" className='contactballs1'/>
       <Image src={Ball4} alt=""   className='contactballs2'/> */}
                <Image src={Red} alt="red" className='red3' />

            </div>

            <Footer />
        </>

    );
};

export default Contact;
