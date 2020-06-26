import React, { Fragment } from "react";
import { Row } from "react-bootstrap";

const Skills = () => {
  return (
    <Fragment>
      <Row
        className="justify-content-center"
        style={{ marginTop: "3rem", marginBottom: "1rem" }}
      >
        <span className="title">Skills & Tools</span>
      </Row>
      <div id="skill">
        <div className="skills">
          <span>
            <img src={require("../img/html5.png")} height="60" alt="html5" />
          </span>
          <span>
            <img src={require("../img/css.png")} height="60" alt="css" />
          </span>
          <span>
            <img src={require("../img/javascript.png")} height="60" alt="javascript" />
          </span>
          <span>
            <img src={require("../img/bootstrap.png")} height="50" alt="bootstrap" />
          </span>
          <span>
            <img src={require("../img/laravel.png")} height="50" alt="laravel" />
          </span>
          <span>
            <img src={require("../img/mysql.png")} height="60" alt="mysql" />
          </span>
          <span>
            <img src={require("../img/sql-server.png")} height="50" alt="sql-server" />
          </span>
          <span>
            <img src={require("../img/vue.png")} height="50" alt="vue" />
          </span>
          <span>
            <img src={require("../img/react.png")} height="50" alt="react" />
          </span>
          <span>
            <img src={require("../img/git.png")} height="60" alt="git" />
          </span>
          <span>
            <img src={require("../img/visual-studio-code.png")} height="50" alt="vsc" />
          </span>
          <span>
            <img src={require("../img/trello.png")} height="60" alt="trello" />
          </span>
          {/* <span>
            <img src="img/sass.jpg" height="60" alt="sourcetree" />
          </span> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
