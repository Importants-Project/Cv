import React, { Component } from "react";
import { MDBRow, MDBContainer } from "mdbreact";
import './portfolio.css';
import vueSong from '../../assets/img/vueMusic.jpg';
import Ps4 from '../../assets/img/ps4.jpg';
import Gent from '../../assets/img/gent.jpg';
import TabsRow from './Tab/tab';
import Jobustan from '../../assets/img/Jobustan.png';
import Club941 from '../../assets/img/club941.jpg';
import EduPro from '../../assets/img/edupro.jpg';
import Apple from '../../assets/img/apple.png';
class TabsDefault extends Component {
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
            <>
                <div className="tabs" id="Portfolio" style={{ backgroundColor: "#24283d" }}>
                    <MDBContainer>
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


                                </MDBRow>

                            </Tab>

                            <Tab label="Web">


                                <MDBRow>
                                    <TabsRow img={Jobustan} title='Jobustab' link='https://www.jobustan.com' />
                                    <TabsRow img={Club941} title='Club 941' link='https://az.club941.com/' />
                                    <TabsRow img={Apple} title='appleservicebaku' link='https://www.appleservicebaku.az/' />
                                    <TabsRow img={EduPro} title='Edu Pro' link='http://edupro.az/' />
                                    <TabsRow img={vueSong} title='Vue js Song' link='https://song-vuejs.netlify.app/' />
                                    <TabsRow img={Ps4} title='Ps 4' link='https://ps4-game-shop.netlify.app/' />
                                    <TabsRow img={Gent} title='Gent' link='https://beta.gent.az' />
                                </MDBRow>

                            </Tab>

                        </Tabs>
                    </MDBContainer>
                </div>
            </>
        )
    }
}
export default TabsDefault;


class Tabs extends React.Component {
    state = {
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({ activeTab: tab });
    };
    render() {

        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {

    return (
        <div className="tab-buttons">
            {buttons.map(button => {
                return <button key={button} className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</button>
            })}
        </div>
    )
}

const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}