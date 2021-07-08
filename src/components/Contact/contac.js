import React from 'react';
import emailjs from 'emailjs-com';
import { MDBCol, MDBRow, MDBContainer, } from "mdbreact";
import './contact.css'

const ContactData = [
    {
        ContactTitle: 'Baku,  Azerbaijan',
        ContactIcon: "fas fa-map-marker-alt fa-2x",
    },

    {
        ContactTitle: '+994554562007',
        ContactIcon: "fas fa-phone fa-2x",
    },

    {
        ContactTitle: 'boyukkishiyevk@gmail.com',
        ContactIcon: 'fas fa-envelope fa-2x',
    },

]





function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_gmoleua', 'template_6i2s9ca', e.target, 'user_mVePUX32cFhLkPR6Ql8DU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    e.target.reset()
}


const contocts = () => {
    return (

        <section className=" skills " id='Contact' style={{ backgroundColor: 'rgb(31, 34, 51)' }}>

            <MDBContainer>
                <div className="main-title text-center mb-5">
                    <h2>Contact me</h2>
                </div>
                <MDBRow>
                    <MDBCol md='4' className="text-center">
                        <ul style={{ display: 'block' }} className="list-unstyled  mb-0">
                            {ContactData.map((data, index) => {
                                return (
                                    <li className='detail-List mb-5' key={index}>
                                        <p>{data.ContactTitle}</p>
                                        <i className={data.ContactIcon}></i>
                                    </li>
                                )

                            })}
                        </ul>
                    </MDBCol>

                    <MDBCol md='8' className=" mb-md-0 mb-5 " >
                        <form onSubmit={sendEmail}>
                            <MDBRow>
                                <MDBCol md='12'>
                                    <div className="md-form mb-3">
                                        <input type="text" id="name" name="name" className="form-control" placeholder='Your Name' />
                                    </div>

                                    <div className="md-form mb-3">
                                        <input type="email" id="email" name="email" className="form-control" placeholder='Your Email' required />
                                    </div>

                                    <div className="md-form mb-3">
                                        <input type="text" id="subject" name="subject" className="form-control" placeholder='Subject' />
                                    </div>

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" placeholder='Your Message' rows="2" className="form-control md-textarea"></textarea>
                                    </div>

                                    <div className="md-form">
                                        <input type="submit" className="main-btn" value='Send' ></input>
                                    </div>

                                </MDBCol>
                            </MDBRow>
                        </form>


                        <div className="status"></div>
                    </MDBCol>


                </MDBRow>
            </MDBContainer>
        </section>
    )

}

export default contocts;