import React from "react";
import { MDBCol, MDBRow } from "mdbreact";

const footerData = [
    {
        link: 'https://www.facebook.com/kenan.boyukkisiyev.77/',
        icon: 'fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x',
        className: 'fb-ic'
    },

    {
        link: 'https://www.linkedin.com/in/kenan-boyukkishiyev-b23802154/',
        icon: 'fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x',
        className: 'li-ic'
    },

    {
        link: "https://www.instagram.com/boyukkishiyev_kenan/?hl=ru",
        icon: 'fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x',
        className: 'ins-ic'
    },
    {
        link:"https://github.com/KenanBoyukkishiyev1997?tab=repositories",
        icon:"fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"
    }

]

const FooterMap = ({ data }) => (


    <a  href={data.link} className="fb-ic">
        <i className={data.icon}> </i>
    </a>
);


const Footer = () => 

    footerData.length > 0 && (
        <footer className="page-footer font-small " style={{ backgroundColor: "#24283d", height: '370px' }}>

            <div className="container">

                <MDBRow>

                    <MDBCol md='12' className="py-5">
                        <div className=" flex-center">
                            <h1 className='title'><span className='titleColor'>K</span>enan</h1>
                        </div>
                        <div className="flex-center">

                            {footerData.map((data, idx) => (
                                <FooterMap data={data} key={idx} />
                            ))}
                        </div>

                        <div className=" flex-center">
                            <p>All Right Reserved © 2020 ThemeMix</p>
                        </div>
                    </MDBCol>

                </MDBRow>

            </div>
        </footer>
    );


export default Footer;
