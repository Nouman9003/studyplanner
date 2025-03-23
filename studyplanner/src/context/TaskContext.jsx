import { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);  // Store tasks in state

    // Function to add a task
    const addTask = (title) => {
        setTasks([...tasks, { title, completed: false }]);
    };

    // Function to toggle task completion
    const toggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    // Function to delete a task
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
