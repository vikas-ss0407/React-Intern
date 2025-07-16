import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/employees", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setEmployees(data);
      } else {
        alert("Failed to fetch employee data");
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.empId}>
            {emp.name} - {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
