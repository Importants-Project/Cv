import React, { Component } from 'react';
import { MDBRow } from "mdbreact";
import Tabs from './Tabs'

import vueSong from '../../../assets/img/vueMusic.jpg';
import Ps4 from '../../../assets/img/ps4.jpg';
import Gent from '../../../assets/img/gent.jpg';
import TabsRow from './tabRow';
import Jobustan from '../../../assets/img/Jobustan.png';
import Club941 from '../../../assets/img/club941.jpg';
import EduPro from '../../../assets/img/edupro.jpg';
import Apple from '../../../assets/img/apple.png';
import ReactImg from '../../../assets/img/reactImg.png';
import ReactBarber from '../../../assets/img/reactBarber.jpg';
import ReactFood from '../../../assets/img/reactFood.jpg';
import ReactShop from '../../../assets/img/reactShop.jpg';
import Karabag from '../../../assets/img/karabag.jpg';
import GrayAz from '../../../assets/img/grayAz.jpg';
import ReactShopContext from '../../../assets/img/shopContext.jpg'

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
                        <TabsRow img={Jobustan} title='Jobustab' link='https://www.jobustan.com' />
                        <TabsRow img={Club941} title='Club 941' link='https://az.club941.com/' />
                        <TabsRow img={EduPro} title='Edu Pro' link='http://edupro.az/' />
                        <TabsRow img={Apple} title='appleservicebaku' link='https://www.appleservicebaku.az/' />
                        <TabsRow img={vueSong} title='Vue js Song' link='https://song-vuejs.netlify.app/' />
                        <TabsRow img={Ps4} title='Ps 4' link='https://ps4-game-shop.netlify.app/' />
                        <TabsRow img={Gent} title='Gent' link='https://beta.gent.az' />
                        <TabsRow img={ReactImg} title='React Photo' link='https://bkreact-photo.netlify.app/' />
                        <TabsRow img={ReactBarber} title='React Barber' link='https://barber-react.netlify.app/home' />
                        <TabsRow img={ReactFood} title='React Food' link='https://foodreact.netlify.app/' />
                        <TabsRow img={ReactShop} title='React Shop' link='https://shopbyme.netlify.app/' />
                        <TabsRow img={Karabag} title='Karabakh Scent' link='https://karabakhscent.az/' />
                        <TabsRow img={GrayAz} title='Gray' link='https://gray.az/' />
                        <TabsRow img={ReactShopContext} title='React Shop Context' link='https://shop-react-context.netlify.app/' />

                    </MDBRow>

                </Tab>

                <Tab label="js">


                    <MDBRow>
                        <TabsRow img={Jobustan} title='Jobustab' link='https://www.jobustan.com' />
                        <TabsRow img={Club941} title='Club 941' link='https://az.club941.com/' />
                        <TabsRow img={Apple} title='appleservicebaku' link='https://www.appleservicebaku.az/' />
                        <TabsRow img={EduPro} title='Edu Pro' link='http://edupro.az/' />
                        <TabsRow img={Gent} title='Gent' link='https://beta.gent.az' />
                        <TabsRow img={Karabag} title='Karabakh Scent' link='https://karabakhscent.az/' />
                        <TabsRow img={GrayAz} title='Gray' link='https://gray.az/' />
                    </MDBRow>

                </Tab>

                <Tab label="react">
                    <MDBRow>
                        <TabsRow img={Ps4} title='Ps 4' link='https://ps4-game-shop.netlify.app/' />
                        <TabsRow img={ReactImg} title='React Photo' link='https://bkreact-photo.netlify.app/' />
                        <TabsRow img={ReactBarber} title='React Barber' link='https://barber-react.netlify.app/home' />
                        <TabsRow img={ReactFood} title='React Food' link='https://foodreact.netlify.app/' />
                        <TabsRow img={ReactShop} title='React Shop' link='https://shopbyme.netlify.app/' />
                        <TabsRow img={ReactShopContext} title='React Shop Context' link='https://shop-react-context.netlify.app/' />
                    </MDBRow>
                </Tab>


                <Tab label="vue">
                    <MDBRow>
                        <TabsRow img={vueSong} title='Vue js Song' link='https://song-vuejs.netlify.app/' />

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