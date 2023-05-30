import React from "react";
import { MDBCol, MDBRow } from "mdbreact";
import Slide from 'react-reveal/Slide';
import Pdf from '../../../assets/Resume.pdf'

const infoData = [
    {
        title: 'Name:',
        text: "Boyukkishiyev Kanan",
    },

    {
        title: 'Age:',
        text: '25',
    },

    {
        title: 'Phone:',
        text: '+994554562007',
    },

    {
        title: 'Address:',
        text: 'Baku, Azerbaijan',
    },

    {
        title: 'Experience',
        text: '3 Years',
    },

    {
        title: 'Freelance',
        text: 'Available',
    },

]

const InfoItem = ({ data }) => (
    <MDBCol sm='6'>
        <p><span>{data.title} </span>{data.text}</p>
    </MDBCol>
)


const Info = () =>
    infoData.length > 0 && (
        <MDBCol xl="7" lg="6" >
            <Slide right>
                <div className="about-info">
                    <div className="main-title">
                        <h3>Discover</h3>
                        <h2>About Me</h2>
                    </div>
                    <p> I'm very passionate and dedicated to my work .With 3 years experience as a Front-End Developer, I have acquired the skills necessary to build great and premium websites.</p>
                    <div className="personal-info">
                        <MDBRow>
                            {infoData.map((data, idx) => (
                                <InfoItem data={data} key={idx} />
                            ))}
                        </MDBRow>
                    </div>
                    <a href={Pdf} download className="main-btn">Download CV</a>
                </div>
            </Slide>
        </MDBCol>
    );

export default Info;
