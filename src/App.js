import React, { Fragment, Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Spinner from "./components/Spinner";

const Header = lazy(() => import("./components/Header"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Skills = lazy(() => import("./components/Skills"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <>
          <Container style={{ marginBottom: "5rem" }}>
            <Header />
            <AboutMe />
            <Skills />
          </Container>
          <Footer />
        </>
      </Suspense>
    </Fragment>
  );
};

export default App;
