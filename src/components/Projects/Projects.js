import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/ct-scan.png";
import blog from "../../Assets/Projects/bigdata-anomaly.png";
import chatify from "../../Assets/Projects/heart-disease.png";
import codeEditor from "../../Assets/Projects/boston-housing.png";
import suicide from "../../Assets/Projects/blood-group.png";
import emotion from "../../Assets/Projects/apache-spark.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="3D CT Spine Fracture Detection"
              description="End-to-end deep learning system for classifying vertebral fractures from 3D CT volumes. Combines 3D CNN feature extraction with transformer-based attention for accurate, clinically relevant predictions on volumetric medical imaging data."
              tags={["PyTorch", "3D CNN", "Transformers", "Medical AI"]}
              ghLink="https://github.com/neelipraveen/cervical-spine-fracture-detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              title="Real-Time Big Data Anomaly Detection"
              description="Distributed streaming pipeline built with Apache Flume, Kafka, and Spark Streaming that ingests multi-source time-series data and flags anomalies in real time. A hybrid CNN-BiLSTM-Attention model with EWMA thresholding detects elite-level anomalies across live streams."
              tags={["Apache Spark", "Kafka", "Flume", "Deep Learning"]}
              ghLink="https://github.com/neelipraveen/Big_data-Yahoo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Stabilizer V2 — Heart Disease Prediction"
              description="Clinical ML pipeline for heart disease risk prediction with calibrated uncertainty estimation and SHAP-based explainability. Stabilizer V2 wraps model predictions with confidence intervals so clinicians can trust and audit every output."
              tags={["Scikit-learn", "SHAP", "Uncertainty", "Healthcare"]}
              ghLink="https://github.com/neelipraveen/Heart_disease"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              title="Boston Housing — PySpark ML Pipeline"
              description="Distributed machine learning pipeline on the Boston housing dataset using PySpark MLlib. Feature engineering, model training, and evaluation run across a cluster, achieving an R² of 0.999 on unseen data."
              tags={["PySpark", "MLlib", "Big Data", "Regression"]}
              ghLink="https://github.com/neelipraveen/boston_house_bigdata"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Blood Group Detection from Finger Prints"
              description="Computer vision system that predicts ABO blood groups from fingerprint images using a custom CNN. A non-invasive, contact-free alternative screening method trained and evaluated on a labeled fingerprint dataset."
              tags={["CNN", "OpenCV", "TensorFlow", "Computer Vision"]}
              ghLink="https://github.com/neelipraveen/Blood-Group-detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Apache Spark — Open Source Contribution"
              description="Open-source work on Apache Spark internals — exploring RDD execution, distributed data structures, and PySpark APIs. Focus on understanding core engine mechanics and building reliable data engineering workflows."
              tags={["Apache Spark", "PySpark", "Open Source", "RDDs"]}
              ghLink="https://github.com/neelipraveen/spark"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
