import React, { Fragment, useState, Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import Spinner from "./components/Spinner";

const Header = lazy(() => import("./components/Header"));
// import Header from "./components/Header";
const AboutMe = lazy(() => import("./components/AboutMe"));
// import AboutMe from "./components/AboutMe";
const Skills = lazy(() => import("./components/Skills"));
// import Skills from "./components/Skills";
const Footer = lazy(() => import("./components/Footer"));
// import Footer from "./components/Footer";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 5000);

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
      {/* {loading ? (
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
      )} */}
    </Fragment>
  );
};

export default App;
