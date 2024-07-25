import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Footer from './components/Footer';
import EmployeeListPage from './pages/EmployeeListPage';
import AddEmployeePage from './pages/AddEmployeePage';
import UpdateEmployeePage from './pages/UpdateEmployeePage.js';
import EditEmp from './pages/editemp.js';

import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the employee data when the component mounts
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/employees');
      setEmployees(response.data.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

 

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={<EmployeeListPage />}
            /> 
            <Route
              path="/update-employee"
              element={<UpdateEmployeePage />}
            />
            <Route
              path="/add-employee"
              element={<AddEmployeePage />}
            />
           <Route
              path="/edit-employee"
              element={<EditEmp />}
            />
          </Routes>
          </div>
        {window.location.pathname === '/' && <Footer />} {/* Show Footer only on the Employee List page */}
      </div>
    </Router>
  );
}

export default App;
