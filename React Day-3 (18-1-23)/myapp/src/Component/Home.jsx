import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./Employee";
import { Link, useNavigate } from 'react-router-dom';
// import Home from './component/pages/Home';
// import Body from './component/pages/Body';
// import About from './component/pages/About';


function Home() {

  let history = useNavigate();

  const handleEdit = (id, fname, lname, gender, email, dep, skill) => {

    localStorage.setItem('Id', id);
    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Gender', gender);
    localStorage.setItem('Email', email);
    localStorage.setItem('Department', dep);
    localStorage.setItem('Skills', skill);
  }

  const handleDelete = (id) => {
    var index = Employee.map(function (e) {
      return e.Id
    }).indexOf(id);

    Employee.splice(index, 1);

    history('/');
  }

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thread>
            <tr>
              <th>
                FirstName
              </th>
              <th>
                LastName
              </th>
              <th>
                Gender
              </th>
              <th>
                Email
              </th>
              <th>
                Department
              </th>
              <th>
                Skills
              </th>
              <th>
                Action
              </th>
            </tr>
          </thread>
          <tboby>
            {
              Employee && Employee.length > 0
                ?
                Employee.map((item) => {
                  return (
                    <tr>
                      <td>
                        {item.FirstName}
                      </td>
                      <td>
                        {item.LastName}
                      </td>
                      <td>
                        {item.Gender}
                      </td>
                      <td>
                        {item.Email}
                      </td>
                      <td>
                        {item.Department}
                      </td>
                      <td>
                        {item.Skills}
                      </td>
                      <td>
                        <Link to={`/edit`}>
                          <Button onClick={() => handleEdit(item.Id, item.FirstName, item.LastName, item.Gender, item.Email, item.Department, item.Skills)}>Edit</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.Id)}>Delete</Button>
                      </td>
                    </tr>
                  )
                })
                :
                "No records available"
            }
          </tboby>
        </Table>
        <br></br>

        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Add Employee</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;