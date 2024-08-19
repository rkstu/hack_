import React, { useRef } from "react";

const ChatOutput = ({ messages }) => {
  const outputRef = useRef(null);

  return (
    <div ref={outputRef} style={styles.outputContainer}>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            ...styles.message,
            alignSelf: msg.user === "User" ? "flex-end" : "flex-start",
            backgroundColor: msg.user === "User" ? "#e1f5fe" : "#fff3e0",
            boxShadow:
              msg.user === "User"
                ? "0 4px 8px rgba(0,0,0,0.1)"
                : "0 4px 8px rgba(0,0,0,0.05)",
          }}
        >
          <strong>{msg.user}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
};

const styles = {
  outputContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    overflowY: "auto",
    height: "100%",
    boxSizing: "border-box",
    backgroundColor: "#fafafa", // Light background color for the chat
  },
  message: {
    marginBottom: "12px",
    padding: "60px",
    borderRadius: "16px",
    maxWidth: "75%",
    display: "block",
    lineHeight: "1.6",
    letterSpacing: "0.5px",
    wordBreak: "break-word",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "16px",
    fontWeight: "400", // Regular weight for readability
    transition: "background-color 0.3s, box-shadow 0.3s", // Smooth transitions for hover effects
  },
};

export default ChatOutput;
