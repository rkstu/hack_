import React, { useState, useRef, useEffect } from "react";

const InputChat = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage(""); // Clear the input after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    // Adjust textarea height based on content
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset the height
    textarea.style.height = `${Math.min(textarea.scrollHeight, 144)}px`; // Max height equivalent to 6 lines
  }, [message]);

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>
        Send
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "row", // Align children horizontally
    alignItems: "center",
    // Center items vertically within the form
    padding: "10px",
  },
  textarea: {
    resize: "none",
    overflowY: "auto",
    minHeight: "96px", // Min height for 4 lines
    maxHeight: "144px", // Max height for 6 lines
    padding: "30px", // Padding inside the textarea
    borderRadius: "25px", // Round corners
    width: "100%", // Ensure the textarea uses available width
    maxWidth: "calc(100% - 100px)", // Adjust max width to fit alongside button
    marginRight: "10px", // Space between textarea and button
  },
  button: {
    padding: "10px 20px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    minWidth: "80px",
    marginBotom: "20px", // Minimum width for the button
  },
};

export default InputChat;
