import React from "react";
import {  MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class HoverPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5 pt-5 pb-5">
        <MDBRow>
          
          <MDBCol md="12">
            <MDBView className='animate__animated  slideInUp' >
              <img
                src="https://avatars3.githubusercontent.com/u/43238830?s=460&u=e2eaa8762c366a72f04534bcceab912574bab3b5&v=4"
                className="img-fluid m-auto rounded-circle w-25 "
                alt=""
              />

              <h1 className='tile text-center  '>Kenan Boyukkishiyev</h1>

              <p className='subtitle text-center '>I am Front-End Developer</p>
              
            </MDBView>
          </MDBCol>
         
        </MDBRow>
        
      </MDBContainer>
    );
  }
}

export default HoverPage;