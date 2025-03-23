import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Progress from "./components/Progress";
import Timer from "./components/Timer"; // Import Timer
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <div style={styles.appContainer}>
        <h1 style={styles.header}>📚 Study Planner</h1>
        <Timer /> {/* Add Timer */}
        <TaskForm />
        <Progress progress={50} /> {/* Example progress */}
        <TaskList />
      </div>
    </TaskProvider>
  );
};

const styles = {
  appContainer: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    fontSize: "24px",
    color: "#333",
  },
};

export default App;
