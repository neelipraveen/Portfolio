import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Neeli Praveen</span>{" "}
            from <span className="purple">Vijayawada, India</span>.
            <br />
            I’m currently pursuing my <span className="purple">Master of Technology (M.Tech) in Data Science</span> at{" "}
            <span className="purple">SRM University, Amaravati</span>.
            <br />
            Previously, I completed my Bachelor of Technology (B.Tech) in{" "}
            <span className="purple">Computer Science and Engineering</span> from{" "}
            <span className="purple">NIT Andhra Pradesh</span>.
            <br />
            <br />
            Outside of engineering complex Big Data pipelines and Deep Learning models, I love engaging in activities that keep me relaxed and entertained:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games (Far Cry 6, WWE 2K25) 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket 🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Movies & Epic TV Shows 🍿
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Extracting truth from data to build systems that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Praveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;