import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Certifications & Publications</strong>
      </h1>
      <Col md={10} style={{ color: "white", textAlign: "left", fontSize: "1.1em" }}>
        <Card className="quote-card-view" style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
          <Card.Body>
            <ul className="about-activity">
              <li style={{ marginBottom: "20px" }}>
                <ImPointRight style={{ color: "#c084f5" }} /> <strong>Published Researcher (RAIT 2025):</strong> 
                <br />Published <i>"Evaluating CNNs and Transformers for Multi-Label Classification in 3D CT Imaging"</i> at the 6th International Conference on Recent Advances in Information Technology.
              </li>
              <li style={{ marginBottom: "20px" }}>
                <ImPointRight style={{ color: "#c084f5" }} /> <strong>NPTEL Certification (IIT Madras):</strong> 
                <br />Achieved Silver Grade in the highly competitive <i>"Applied Accelerated Artificial Intelligence"</i> course.
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Github;