import React, {useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./Employee";
import {v4 as uuid} from 'uuid';
import {Link,useNavigate} from 'react-router-dom';

function Edit(){

    const[fname, setFname] = useState('');
    const[lname, setLname] = useState('');
    const[gender, setGender] = useState('');
    const[email, setEmail] = useState('');
    const[dep, setDep] = useState('');
    const[skill, setSkills] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Employee.map(function(e){
        return e.Id
      }).indexOf(id);


      const handleSubmit =(x) => {
        x.preventDefault();

       let a = Employee[index];
       a.FirstName = fname;
       a.LastName = lname;
       a.Gender = gender;
       a.Email = email;
       a.Department = dep;
       a.Skills = skill;

        history('/');
        
      }


        useEffect(() =>{
            setFname(localStorage.getItem('FirstName'))
            setLname(localStorage.getItem('LastName'))
            setGender(localStorage.getItem('Gender'))
            setEmail(localStorage.getItem('Email'))
            setDep(localStorage.getItem('Department'))
            setSkills(localStorage.getItem('Skills'))
            setId(localStorage.getItem('Id'))
        },[])
    


      return(
        <div>
            <Form className='d-grip gap-2' style={{margin:'15rem'}}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter First Name' value={fname} required onChange={(e) => setFname(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formLName'>
                    <Form.Control type='text' placeholder='Enter Last Name' value={lname} required onChange={(e) => setLname(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGender'>
                    <Form.Control type='text' placeholder='Enter Gender' value={gender} required onChange={(e) => setGender(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Control type='text' placeholder='Enter Email' value={email} required onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formDep'>
                    <Form.Control type='text' placeholder='Enter Department' value={dep} required onChange={(e) => setDep(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formSkill'>
                    <Form.Control type='text' placeholder='Enter Skill' value={skill} required onChange={(e) => setSkills(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
            </Form>
        </div>
      )


}

export default Edit;