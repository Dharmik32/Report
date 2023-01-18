import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./Employee";
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function App() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [dep, setDep] = useState('');
    const [skill, setSkills] = useState('');

    let history = useNavigate();

    const handleSubmit = (x) => {
        x.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = fname,
            b = lname,
            c = gender,
            d = email,
            e = dep,
            f = skill;

        Employee.push({ id: uniqueId, FirstName: a, LastName: b, Gender: c, Email: d, Department: e, Skills: f });

        history('/');

    }



    return (
        <div>
            <Form className='d-grip gap-2' style={{margin:'15rem'}}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter First Name' required onChange={(e) => setFname(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formLName'>
                    <Form.Control type='text' placeholder='Enter Last Name' required onChange={(e) => setLname(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGender'>
                    <Form.Control type='text' placeholder='Enter Gender' required onChange={(e) => setGender(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Control type='text' placeholder='Enter Email' required onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formDep'>
                    <Form.Control type='text' placeholder='Enter Department' required onChange={(e) => setDep(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formSkill'>
                    <Form.Control type='text' placeholder='Enter Skill' required onChange={(e) => setSkills(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button>
            </Form>
        </div>


        // <Form>
        //     <div className="field">
        //         <label>
        //             First Name: <input type='text' placeholder='Enter Name' /> <br /> <br />
        //         </label>
        //     </div>

        //     <div className="field">
        //         <label>
        //             Last Name: <input type='text' placeholder='Enter Name' /> <br /> <br />
        //         </label>
        //     </div>

        //     <div className="field">
        //         <label>
        //             Email: <input type='email' placeholder='Enter Email' /> <br /> <br />
        //         </label>
        //     </div>

        //     <div className="field">
        //         <label>
        //             Phone Number: <input type='text' placeholder='Enter Phone No.' /> <br /> <br />
        //         </label>
        //     </div>


        //     <div className="field">
        //         <p>Gender</p>


        //         <input type='radio' />
        //         <label>Male</label>

        //         <input type='radio' />
        //         <label>Female</label>

        //     </div>

                

        //     <div className="field">
        //         <label>
        //             Department <select>
        //                 <option>select Department</option>
        //                 <option>PHP</option>
        //                 <option>.NET</option>
        //                 <option>SEO</option>
        //                 <option>Mobile</option>
        //                 <option>Admin/HR</option>
        //                 <option>Account</option>
        //             </select> <br /> <br />
        //         </label>
        //     </div>
        // </Form>

    )
}

export default App;