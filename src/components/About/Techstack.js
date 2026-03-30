import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa";
import { 
  SiPython, 
  SiApachespark, 
  SiApachehadoop, 
  SiApachekafka, 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy, 
  SiJupyter, 
  SiFirebase, 
  SiGit 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <div className="tech-icons-text">SQL</div>
      </Col>

      {/* Big Data & Cloud */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
        <div className="tech-icons-text">Apache Spark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
        <div className="tech-icons-text">Hadoop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <div className="tech-icons-text">Kafka</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <div className="tech-icons-text">Kaggle</div>
      </Col>

      {/* Machine Learning & Deep Learning */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>

      {/* Data Science Libraries & Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="tech-icons-text">NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      
      {/* Core Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="tech-icons-text">Statistics</div>
      </Col>

    </Row>
  );
}

export default Techstack;