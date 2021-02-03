import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import TabsList from './Tab/tabList'
import './portfolio.css';

class TabsDefault extends Component {
   

    render() {
        return (
            <>
                <div className="tabs" id="Portfolio" style={{ backgroundColor: "#24283d" }}>
                    <MDBContainer>
                       <TabsList />
                    </MDBContainer>
                </div>
            </>
        )
    }
}
export default TabsDefault;


