import React from "react";
import Chat from "./Chat";
import Header from "./Header";
import InputChat from "./InputChat";

const Home = () => {
  return (
    <>
      <Header />
      <div style={styles.appContainer}>
        <Chat />
      </div>
    </>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Align content to the top
    alignItems: "center",

    backgroundColor: "#f0f0f0",
  },
};

export default Home;
