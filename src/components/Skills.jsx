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
            <img src="img/html5.png" height="60" alt="html5" />
          </span>
          <span>
            <img src="img/css.png" height="60" alt="css" />
          </span>
          <span>
            <img src="img/javascript.png" height="60" alt="javascript" />
          </span>
          <span>
            <img src="img/bootstrap.png" height="50" alt="bootstrap" />
          </span>
          <span>
            <img src="img/laravel.png" height="50" alt="laravel" />
          </span>
          <span>
            <img src="img/mysql.png" height="60" alt="mysql" />
          </span>
          <span>
            <img src="img/sql-server.png" height="50" alt="sql-server" />
          </span>
          <span>
            <img src="img/vue.png" height="50" alt="vue" />
          </span>
          <span>
            <img src="img/react.png" height="50" alt="react" />
          </span>
          <span>
            <img src="img/git.png" height="60" alt="git" />
          </span>
          <span>
            <img src="img/visual-studio-code.png" height="50" alt="vsc" />
          </span>
          <span>
            <img src="img/trello.png" height="60" alt="trello" />
          </span>
          {/* <span>
            <img src="img/sourcetree.jpg" height="60" alt="sourcetree" />
          </span> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
