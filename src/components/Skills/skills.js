import React from "react";
import { MDBContainer, MDBProgress, MDBRow, MDBCol } from 'mdbreact';
import LightSpeed from 'react-reveal/LightSpeed';
import './skills.css'


const skillsData = [
    {
        text: 'Html',
        value: 100,

    },

    {
        text: 'Css/Scss',
        value: 100,

    },

    {
        text: 'Js',
        value: 50,
    },

    {
        text: 'Js Plugin ',
        value: 70,
    },

    {
        text: 'Bootstrap',
        value: 80,
    },

    {
        text: 'WordPress',
        value: 50,
    },

    {
        text: 'React',
        value: 50,

    },


    {
        text: 'Sanity',
        value: 40,
    },
]



const Skill = ({ data }) => (


    <MDBCol lg="3" md='4' sm="6" >
        <LightSpeed left>

            <div className="progress-container">
                <span className="percent" style={{ left: `calc(${data.value}% - 40px)` }}>{data.value}%</span>
                <h4>{data.text}</h4>
                <MDBProgress value={data.value} className="my-2 " />
            </div>
        </LightSpeed>

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