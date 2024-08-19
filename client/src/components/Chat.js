import React, { useState, useRef, useEffect } from "react";
import ChatOutput from "./ChatOutput";
import InputChat from "./InputChat";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const chatOutputRef = useRef(null);

  const handleSend = (message) => {
    const newMessage = {
      user: "User", // You can change this to dynamic user names
      text: message,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate a response from ChatGPT
    setTimeout(() => {
      const botMessage = {
        user: "ChatGPT",
        text: `You said: "${message}"`,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    if (chatOutputRef.current) {
      const chatOutput = chatOutputRef.current;

      // Smoothly scroll to the bottom with a slight delay
      setTimeout(() => {
        chatOutput.scrollTo({
          top: chatOutput.scrollHeight,
          behavior: "smooth",
        });
      }, 300); // Delay to ensure messages are rendered
    }
  }, [messages]);

  return (
    <div style={styles.chatContainer} className="container">
      <div style={styles.chatOutput} ref={chatOutputRef}>
        <ChatOutput messages={messages} />
      </div>
      <div style={styles.chatInput}>
        <InputChat onSend={handleSend} />
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh", // Make the chat take up the full viewport height
    margin: "0 auto",
    borderRadius: "8px",
    overflow: "hidden", // Hide overflow for a cleaner look
  },
  chatOutput: {
    flex: 1, // Take up all available space
    overflowY: "auto", // Scrollable
    padding: "10px",
    // borderBottom: "1px solid #ccc", // Optional: to separate output from input
    // boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)", // Light shadow for depth
    transition: "background-color 0.3s ease", // Smooth background color transition
  },
  chatInput: {
    // borderTop: "1px solid #ccc", // Optional: to separate input from output
    padding: "30px",
  },
};

export default Chat;
