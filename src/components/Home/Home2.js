import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an M.Tech Data Science student who loves transforming complex data into 
              reliable, scalable intelligent systems. Over time, I’ve explored several 
              architectures and found my passion in building high-performance Big Data 
              pipelines and advanced Deep Learning models.
              <br />
              <br />
              I’m highly proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, SQL ,Data Science and Big Data tools like Apache Spark and Hadoop.{" "}
                </b>
              </i>
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Deep Learning Architectures, Big Data Pipelines,{" "}
                </b>
              </i>
              and exploring new ways to bridge the gap between complex algorithms and real-world clinical or industrial applications.
              <br />
              <br />
              Whenever possible, I love building end-to-end projects with
              <b className="purple"> TensorFlow </b> and <b className="purple"> PyTorch</b>, 
              along with modern data engineering frameworks to create state-of-the-art ML solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;