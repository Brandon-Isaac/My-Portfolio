import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Isaac Brandon Datch",
  title: "Front-end engineer and Data scientist",
  email: "isaacdutch472@gmail.com",
  gitHub: "Brandon-Isaac",
  instagram: "sir_durche",
  linkedIn: "Isaac Datch",
  twitter: "ISAAC BRANDON DATCH",
};
const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default App;
