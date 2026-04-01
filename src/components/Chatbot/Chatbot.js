import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am Praveen's Virtual Assistant. Ask me anything about his Data Science projects, skills, or experience!", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userInput) => {
    const text = userInput.toLowerCase();
    
    if (text.includes("skill") || text.includes("tech") || text.includes("good at")) {
      return "Praveen is highly skilled in Python, SQL, Java, and Big Data tools like Apache Spark, Kafka, and Hadoop. He also specializes in Deep Learning using TensorFlow and PyTorch!";
    }
    if (text.includes("project") || text.includes("work") || text.includes("portfolio")) {
      return "He has engineered incredible systems! Highlights include 'Stabilizer V2' for Heart Disease Prediction, a Distributed Anomaly Detection Pipeline processing 67 concurrent streams, and 3D CT Imaging classification.";
    }
    if (text.includes("education") || text.includes("college") || text.includes("study") || text.includes("m.tech")) {
      return "He is currently pursuing his M.Tech in Data Science at SRM, Amaravati, and holds a B.Tech in CSE from NIT Andhra Pradesh.";
    }
    if (text.includes("experience") || text.includes("certification") || text.includes("research")) {
      return "He is a published researcher (RAIT 2025) for his work on 3D CT Imaging using CNNs and Transformers, and holds an NPTEL Certification in Applied Accelerated AI from IIT Madras.";
    }
    if (text.includes("contact") || text.includes("email") || text.includes("hire")) {
      return "You can easily reach him via the LinkedIn or GitHub links in the footer, or download his resume from the top navigation bar to get his direct email!";
    }
    
    return "I'm a simple bot, but I can assure you Praveen is an exceptional Data Scientist! Try asking about his 'skills', 'projects', or 'education'.";
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    
    // Add user message
    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");

    // Simulate AI thinking delay
    setTimeout(() => {
      const botReply = getBotResponse(input);
      setMessages((prev) => [...prev, { text: botReply, isUser: false }]);
    }, 600);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div>
              <strong>Praveen's AI Assistant</strong>
              <div className="status-dot"></div> <span style={{fontSize: "0.8em"}}>ONLINE</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <AiOutlineClose />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-wrapper ${msg.isUser ? "user" : "bot"}`}>
                <div className={`message-bubble ${msg.isUser ? "user-bubble" : "bot-bubble"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>
              <IoMdSend />
            </button>
          </div>
        </div>
      )}

      <button className="chatbot-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <>
            <AiOutlineMessage size={24} />
            <span style={{ marginLeft: "8px", fontWeight: "bold" }}>Chat AI</span>
          </>
        )}
      </button>
    </div>
  );
}

export default Chatbot;