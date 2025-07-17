import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import AssignTask from "./components/AssignTask";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/tasks" element={<AssignTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
