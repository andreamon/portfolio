import React, { Fragment, Suspense, lazy } from "react";

import Spinner from "./components/Spinner";

const Header = lazy(() => import("./components/Header"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Resume = lazy(() => import("./components/Resume"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
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
        <Header />
        <AboutMe />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default App;
