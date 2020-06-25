import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Container style={{ marginBottom: "5rem" }}>
            <Header />
            <AboutMe />
            <Skills />
          </Container>
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default App;
