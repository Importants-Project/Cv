import React, { Component } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import AboutImage from './aboutImage/aboutImage';
import Info from './Info/info';
import './about.css';
class About extends Component {
    render() {
        return (
            <div className='About' id='About'>
                <MDBContainer>
                    <MDBRow>
                        <AboutImage />
                        < Info />
                    </MDBRow>
                </MDBContainer>
            </div>

        );
    }
}

export default About;
