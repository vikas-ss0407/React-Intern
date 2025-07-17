
import { useState } from "react";

const AssignTask = () => {
  const [empId, setEmpId] = useState("");
  const [task, setTask] = useState("");

  const handleAssign = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ empId, task }),
      });

      if (res.ok) {
        alert("Task assigned successfully");
        setEmpId("");
        setTask("");
      } else {
        alert("Failed to assign task");
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  const containerStyle = {
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#1e90ff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    width: "100%",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2>Assign Task</h2>
      <form onSubmit={handleAssign}>
        <input
          type="text"
          placeholder="Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Assign</button>
      </form>
    </div>
  );
};

export default AssignTask;