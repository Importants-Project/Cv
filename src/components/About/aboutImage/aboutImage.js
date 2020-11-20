import React, { Component } from "react";
import {MDBCol } from "mdbreact";
class AboutImage extends Component {
    render() {
        return (
            <MDBCol xl="5" lg="6" className='animate__animated  zoomInLeft'>
                <div className="about-image">
                    <img className="img-fluid mb-5 w-100" src="https://avatars3.githubusercontent.com/u/43238830?s=460&u=e2eaa8762c366a72f04534bcceab912574bab3b5&v=4" alt="" />
                </div>
            </MDBCol>


        );
    }
}

export default AboutImage;
