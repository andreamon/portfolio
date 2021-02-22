import React, { Fragment, Suspense, lazy } from "react";

import Spinner from "./components/Spinner";

const Header = lazy(() => import("./components/Header"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Resume = lazy(() => import("./components/Resume"));
const Projects = lazy(() => import("./components/Projects"));

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
      </Suspense>
    </Fragment>
  );
};

export default App;
