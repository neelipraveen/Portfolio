import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

// 1. FIXED: Corrected the import path!
import Chatbot from "./Chatbot/Chatbot";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  // This ensures the page smoothly scrolls to the very top when a new tab is clicked!
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // We use a React Fragment (<>) here so we can return both the Footer and the Chatbot!
    <>
      <Container fluid className="footer">
        <Row style={{ alignItems: "center" }}>
          
          <Col md="4" className="footer-copywright">
            <h3>Designed by Neeli Praveen</h3>
            <h3>Copyright © {year} NP</h3>
          </Col>
          
          {/* Quick Links to smoothly flow through tabs */}
          <Col md="4" className="footer-copywright">
            <ul style={{ listStyleType: "none", padding: 0, display: "flex", justifyContent: "center", gap: "25px", margin: 0 }}>
              <li>
                <Link to="/" onClick={scrollToTop} style={{ color: "white", textDecoration: "none", fontSize: "1.1em" }}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} style={{ color: "white", textDecoration: "none", fontSize: "1.1em" }}>About</Link>
              </li>
              <li>
                <Link to="/project" onClick={scrollToTop} style={{ color: "white", textDecoration: "none", fontSize: "1.1em" }}>Projects</Link>
              </li>
              <li>
                <Link to="/resume" onClick={scrollToTop} style={{ color: "white", textDecoration: "none", fontSize: "1.1em" }}>Resume</Link>
              </li>
            </ul>
          </Col>

          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/neelipraveen"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/praveen-neeli-373939343/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>

        </Row>
        
        {/* A cute Back-to-Top button! */}
        <Row>
           <Col md={12} style={{ textAlign: "center", marginTop: "15px" }}>
              <button 
                onClick={scrollToTop} 
                style={{ background: "transparent", border: "none", color: "#c084f5", fontSize: "1.8em", cursor: "pointer", transition: "transform 0.3s ease" }}
                title="Back to Top"
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <AiOutlineArrowUp />
              </button>
           </Col>
        </Row>
      </Container>

      {/* 2. FIXED: Placed the Chatbot safely inside the return statement! */}
      <Chatbot />
    </>
  );
}

export default Footer;