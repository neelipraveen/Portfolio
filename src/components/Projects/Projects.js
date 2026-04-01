import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// NOTE: I am keeping the original variable names so your code doesn't crash. 
// You just need to replace the actual images in the src/Assets/Projects folder with your own screenshots!
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Data Science and Big Data projects I've engineered recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="3D CT Imaging Classification"
              description="Engineered a segmentation-guided deep learning framework to detect cervical spine fractures in 3D CT scans. Evaluated 8 state-of-the-art architectures including MViT and Swin Transformers. Published at the 6th International Conference on Recent Advances in Information Technology (RAIT 2025)."
              ghLink="https://github.com/neelipraveen/3D-CT-Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real-Time Big Data Anomaly Detection"
              description="Architected a distributed pipeline using Apache Flume, HDFS, and PySpark to process 67 concurrent data streams. Engineered a novel Attention-augmented Deep Learning model (CNN + BiLSTM + Self-Attention) with a leakage-free EWMA dynamic thresholding strategy."
              ghLink="https://github.com/neelipraveen/Anomaly-Detection-BigData"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Stabilizer V2: Heart Disease Prediction"
              description="Developed the Stabilizer V2 Protocol by merging FT-Transformers with Gated Residual Networks (GRN). Leveraged TVAE-based data augmentation to expand clinical data. Integrated Monte Carlo Dropout for predictive uncertainty quantification and utilized SHAP for clinical transparency."
              ghLink="https://github.com/neelipraveen/Stabilizer-V2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Boston Housing PySpark Pipeline"
              description="End-to-end distributed ML pipeline simulating real-time data ingestion with Flume and Kafka. Processes data via PySpark and Hadoop to deliver near-perfect median house price forecasting using Random Forest Regressors, achieving an R-squared of 0.999."
              ghLink="https://github.com/neelipraveen/Boston-House-BigData"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide} 
              isBlog={false}
              title="Automated Blood Group Detection"
              description="Engineered a Computer Vision and Deep Learning framework to automate the classification of blood types (A, B, AB, O, and Rh factor) from slide agglutination tests. Utilized OpenCV for image preprocessing and Convolutional Neural Networks (CNNs) for rapid, high-accuracy hematological diagnostics."
              ghLink="https://github.com/neelipraveen/Blood-Group-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Apache Spark (Open Source)"
              description="Actively studying the core architecture of Apache Spark, focusing on distributed data processing, resilient distributed datasets (RDDs), and PySpark optimization techniques for massive-scale data engineering."
              ghLink="https://github.com/neelipraveen/spark"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;