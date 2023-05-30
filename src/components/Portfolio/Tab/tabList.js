import React, { Component } from 'react';
import { MDBRow } from "mdbreact";
import Tabs from './Tabs'

import Gent from '../../../assets/img/gent.jpg';
import TabsRow from './tabRow';
import GrayAz from '../../../assets/img/grayAz.jpg';
import Techprodc from '../../../assets/img/teachpro.jpg';
import Gia from '../../../assets/img/gia.jpg';
import Omid from '../../../assets/img/omid.jpg';
import Perla from '../../../assets/img/perla.png';
import Bal from '../../../assets/img/bal.jpg';
import Azemerik from '../../../assets/img/Azemerik.png';
import PrimeLogo from '../../../assets/img/PrimeLogo.png';

import Supplychainforum from '../../../assets/img/supplychainforum.jpg';

class TabList extends Component {

    state = {
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    render() {
        return (
                <Tabs>

                <Tab label="all">

                    <MDBRow>
                        <TabsRow img={Techprodc} title='Techprodc' link='https://techprodc.com/' />
                        <TabsRow img={Bal} title='Baleoni' link='https://baleoni.az/' />
                        <TabsRow img={Gent} title='Gent' link='https://gent.az/' />
                        <TabsRow img={GrayAz} title='Gray' link='https://gray.az/' />
                        <TabsRow img={Gia} title='Gia' link=' https://gia.az/' />
                        <TabsRow img={Omid} title='omid design' link='https://omiddesign.az/' />
                        <TabsRow img={Perla} title='Perla' link='https://perla.az/' />
                        <TabsRow img={PrimeLogo} title='prime elektro' link='https://primeelektro.az/' />
                        <TabsRow img={Supplychainforum} title='supplycha inforum' link=' https://supplychainforum.az/' />
                        <TabsRow img={Azemerik} title='azmerika ' link=' https://azmerika.az/' />

                    </MDBRow>

                </Tab>

                <Tab label="js">


                    <MDBRow>
                    <TabsRow img={Gent} title='Gent' link='https://gent.az/' />
                        <TabsRow img={GrayAz} title='Gray' link='https://gray.az/' />
                        <TabsRow img={Gia} title='Gia' link=' https://gia.az/' />
                        <TabsRow img={Omid} title='omid design' link='https://omiddesign.az/' />
                        <TabsRow img={Perla} title='Perla' link='https://perla.az/' />
                        <TabsRow img={PrimeLogo} title='prime elektro' link='https://primeelektro.az/' />
                        <TabsRow img={Supplychainforum} title='supplycha inforum' link=' https://supplychainforum.az/' />
                        <TabsRow img={Azemerik} title='azmerika ' link=' https://azmerika.az/' />

                    </MDBRow>

                </Tab>

              


                <Tab label="vue">
                    <MDBRow>
                    <TabsRow img={Techprodc} title='Techprodc' link='https://techprodc.com/' />
                        <TabsRow img={Bal} title='Baleoni' link='https://baleoni.az/' />
                    </MDBRow>
                </Tab>
</Tabs>
        );
    }
}

export default TabList;

const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}