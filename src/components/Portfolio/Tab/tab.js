import React, { Component } from "react";
import { MDBCol, MDBMask, MDBView } from "mdbreact";
class Tabs extends Component {

    render() {
        const { img, link, title } = this.props
        return (

            <MDBCol className='mb-5' xl='4' lg='4' md='3' sm='6'>
                <MDBView hover>
                    <img
                        width='100%'
                        src={img}
                        style={{height:200}}
                        className="img-fluid"
                        
                        alt=""
                    />
                    <MDBMask className="flex-center" overlay="black-strong">
                        <h1 style={{fontSize:22}} ><a className="white-text" target='__blank' href={link}>{title}</a> </h1>
                    </MDBMask>
                </MDBView>
            </MDBCol>
        )
    }
}
export default Tabs;