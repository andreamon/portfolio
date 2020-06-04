import React, { Fragment } from "react";
import { Container} from "react-bootstrap";

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
    <Container style={{marginBottom:"5rem"}}>
      <Header />
      <AboutMe />
      <Skills />
    </Container>
    <Footer />
  </Fragment>
  );
};

export default App;
