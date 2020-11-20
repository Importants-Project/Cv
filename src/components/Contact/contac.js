import React from 'react';
import { MDBCol, MDBRow, MDBContainer, } from "mdbreact";
import './contact.css'

const ContactData = [
    {
        ContactTitle: 'Baku,  Azerbayjan',
        ContactIcon: "fas fa-map-marker-alt fa-2x",
    },

    {
        ContactTitle: '+994554562007',
        ContactIcon: "fas fa-phone fa-2x",
    },

    {
        ContactTitle: 'boyukkishiyev@gmail.com:',
        ContactIcon: 'fas fa-envelope fa-2x',
    },

]

const ContactItem = ({ data }) => (
    <li className='detail-List mb-5'>
        <p>{data.ContactTitle}</p>
        <i className={`${data.ContactIcon}`}></i>
    </li>
);

const contoct = () =>

    ContactData.length > 0 && (
        <section className=" skills " id='Contact' style={{ backgroundColor: 'rgb(31, 34, 51)' }}>

            <MDBContainer>
                <div className="main-title text-center mb-5">
                    <h2>Contoct Me</h2>
                </div>
                <MDBRow>
                    <MDBCol md='4' className="text-center animate__animated zoomInLeft">
                        <ul style={{ display: 'block' }} className="list-unstyled  mb-0">
                            {ContactData.map((data, idx) => (
                                <ContactItem data={data} key={idx} />
                            ))}
                        </ul>
                    </MDBCol>

                    <MDBCol md='8' className=" mb-md-0 mb-5 animate__animated zoomInRight" >
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
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

                                </MDBCol>
                            </MDBRow>
                        </form>

                        <div className="text-center text-md-left">
                            <a className="main-btn"  href='#!'>Send</a>
                        </div>
                        <div className="status"></div>
                    </MDBCol>


                </MDBRow>
            </MDBContainer>
        </section>
    )


export default contoct;