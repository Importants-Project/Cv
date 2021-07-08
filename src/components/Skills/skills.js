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
        text: 'Bootstrap',
        value: 90,
    },

    {
        text: 'Git',
        value: 80,

    },

    {
        text: 'Js Plugin ',
        value: 70,
    },

    {
        text: 'Js',
        value: 50,
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
        text: 'Figma ',
        value: 40,
    },

    {
        text: 'Adobe XD',
        value: 40,
    },

    {
        text: 'Sanity',
        value: 40,
    },
]





const ProgressBarPage = () => {

  

    return (

        <section className='skills' id="Skills" >
            <div className="main-title text-center mb-5">
                <h2>My Skills</h2>
            </div>
            <MDBContainer>
                <MDBRow>
                    { skillsData.map((post,index) =>{
                        return(
                            <MDBCol lg="3" md='4' sm="6"  >
                            <LightSpeed left>
    
                                <div className="progress-container" key={index}>
                                    <span className="percent" style={{ left: `calc(${post.value}% - 18px)` }}>{post.value}%</span>
                                    <h4>{post.text}</h4>
                                    <MDBProgress value={post.value} className="my-2 " />
                                </div>
                            </LightSpeed>
    
    
                        </MDBCol>
                        )
                    })}

                </MDBRow>

            </MDBContainer>
        </section>
    )
}


export default ProgressBarPage