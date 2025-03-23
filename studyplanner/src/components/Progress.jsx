import React from "react";

const Progress = ({ progress }) => {
  return (
    <div style={styles.progressContainer}>
      <div style={{ ...styles.progressBar, width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

const styles = {
  progressContainer: {
    width: "100%",
    height: "20px",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "15px 0",
  },
  progressBar: {
    height: "100%",
    background: "linear-gradient(to right, #4caf50, #81c784)",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "20px",
    transition: "width 0.4s ease-in-out",
  },
};

export default Progress;
