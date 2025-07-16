import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  const handleAddEmployee = async (e) => {
    e.preventDefault();

    const newEmployee = { empId, name, email, department };

    try {
      const res = await fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`, 
        },
        body: JSON.stringify(newEmployee),
      });

      if (res.ok) {
        alert("Employee added successfully");
        navigate("/employees"); 
      } else {
        alert("Failed to add employee");
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add New Employee</h2>
      <form onSubmit={handleAddEmployee}>
        <input
          type="text"
          placeholder="Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
