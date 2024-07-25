import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'

const EmployeeListPage = () => {
  const [employees,setEmployees] = useState([]);
  useEffect(()=>{
      async function getData(){
        const res = await axios.get('http://localhost:5001/api/employees');
        setEmployees(res?.data?.data)
      };
      getData()
  },[])
  
  const handleClick = async(emp)=>{
    try{
      await axios.delete(`http://localhost:5001/api/employees/${emp?._id}`);
      
      const res = await axios.get('http://localhost:5001/api/employees');
      setEmployees(res?.data?.data)


    }catch (e){
      console.log('Error',e)
    }

  }
  return (<div>
    <Header employee={employees}/>
    <div className="employee-list-page">
      <h1>Employee List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Joining Date</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.employeeName}</td>
              <td>{employee.location}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.designation}</td>
              <td>{employee.employeeStatus}</td>
              <td>
                <Link to={`/edit-employee`} state={{selectedEmployee:employee }}>
                      <Button variant="warning" className="me-2">Edit</Button>

                    </Link>
                    {/* <Nav.Link href="/edit-employee" state={{selectedEmployee:employee}} className="nav-link-custom">Edit</Nav.Link> */}

                <Button variant="danger" onClick={()=>handleClick(employee)} >Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    <Footer/>
    </div>
  );
};

export default EmployeeListPage;
