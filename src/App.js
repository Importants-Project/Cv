import React, { Component } from "react";
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Timline from './components/Timline/timline';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/contac';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Home />
        <About />
        <Skills />
        <Timline />
        <Portfolio />
        <Contact />
        <Footer />
      </div>

    );
  }
}

export default App;
