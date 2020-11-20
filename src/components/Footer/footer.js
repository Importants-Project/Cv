import React from "react";
import { MDBCol, MDBRow } from "mdbreact";


const Footer = () => {

    return (
        <footer className="page-footer font-small " style={{ backgroundColor: "#24283d",height:'370px' }}>

            <div className="container">

                <MDBRow>
                   
                    <MDBCol md='12' className="py-5">
                    <div className=" flex-center">
                    <h1 className='title'><span className='titleColor'>K</span>enan</h1>
                        </div>
                        <div className="flex-center">

                            <a href='https://www.facebook.com/kenan.boyukkisiyev.77/' className="fb-ic">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                           

                            <a href='https://www.linkedin.com/in/kenan-boyukkishiyev-b23802154/' className="li-ic">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a href='https://www.instagram.com/boyukkishiyev_kenan/?hl=ru' className="ins-ic">
                                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                           
                        </div>

                        <div className=" flex-center">
                            <p>All Right Reserved © 2020 ThemeMix</p>
                        </div>
                    </MDBCol>

                </MDBRow>

            </div>
        </footer>
    );
}

export default Footer;
