import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJupyter,
  SiWindows11,
  SiKaggle,
  SiApachehadoop,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-icons-text">Jupyter Notebook</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
        <div className="tech-icons-text">Hadoop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKaggle />
        <div className="tech-icons-text">Kaggle</div>
      </Col>
    </Row>
  );
}

export default Toolstack;