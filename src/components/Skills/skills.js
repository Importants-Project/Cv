import React from "react";
import { MDBContainer, MDBProgress, MDBRow, MDBCol } from 'mdbreact';
import './skills.css'


const skillsData = [
    {
        text: 'Html',
        value: 100,
        animation:'fadeInLeft'
    },

    {
        text: 'Css/Scss',
        value: 100,
        animation:'fadeInDownBig'

    },

    {
        text: 'Js/Jquery',
        value: 50,
        animation:'fadeInRight'
    },

    {
        text: 'Bootstrap',
        value: 80,
        animation:'fadeInLeft'
    },

    {
        text: 'WordPress',
        value: 50,
        animation:'zoomIn'
    },

    {
        text: 'React',
        value: 50,
        animation:'fadeInRight'

    },

    {
        text: 'Vue',
        value: 30,
        animation:'fadeInLeft'

    },

    {
        text: 'Flutter',
        value: 40,
        animation:'fadeInUpBig'
    },

    {
        text: 'React Native',
        value: 40,
        animation:'fadeInRight'
    },
]



const Skill = ({ data }) => (


    <MDBCol lg="4" sm="6"  className={`colsWhite animate__animated ${data.animation}`}>
        <div className="progress-container">
            <span className="percent" style={{ left: `calc(${data.value}% - 21px)` }}>{data.value}%</span>
            <h4>{data.text}</h4>
            <MDBProgress value={data.value} className="my-2 " />
        </div>
    </MDBCol>
);

const ProgressBarPage = () =>
    skillsData.length > 0 && (
        <section className='skills' id="Skills" >
            <div className="main-title text-center mb-5">
                <h2>My Skills</h2>
            </div>
            <MDBContainer>
                <MDBRow>
                    {skillsData.map((data, idx) => (
                        <Skill data={data} key={idx} />
                    ))}
                </MDBRow>
            </MDBContainer>
        </section>
    );


export default ProgressBarPage;