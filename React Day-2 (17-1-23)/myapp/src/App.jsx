// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
  
//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>

    
//   )
// }

// export default App



// import React from "react";
// import React from "react-dom";
// import "./style.css";
// import User from './User';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <h2>hello</h2>
//       <User />
//     </div>
//   );
// }

// import React from "react";
// import "./style.css";
// import User from './User';

// export default function App() {
//   let data = "XYZ";

//   function Apple()
//   {
//     data = "ABC";
//     alert(data);
//   }
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h1>{data}</h1>
//       <User />
//       <User></User>

//       <button onclick={()=>Apple()}>Click Me</button>

//     </div>
//   );
// }

// import React from "react";
// import "./style.css";
// // import User from './User';
// import {useState} from react;

// export default function App() {
//   const [data,setData] = useState(0)

//   function updateData()
//   {
//     setData(data+1)
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onclick={updateData}>Click Me</button>
//     </div>
//   );
// }

// import React from "react";
// import "./style.css";
// // import User from './User';
// // import {useState} from react;

//  class App extends React.Component {

//   constructor()
//   {
//     super()
//     this.state={
//       data:"XYZ",
//     }
//   }

//   apple()
//   {
//     this.setState({data: "ABC"})
//   }

//   render()
//   {
//     return (
//      <div>
//         <h1>{this.state.data}</h1>
//         <button onClick={()=>this.apple()}>Update Data</button>

//     </div>
//     );

//     }
// }
// export default App;

// import React, { useState } from 'react';
// import './style.css';
// import Student from './Student';
// // import User from './User';
// // import {useState} from react;

// function App() {
//   // const [name,setName] = useState("ABC")
//   return (
//     <div>
//       <h1>Props in React</h1>
//       <Student name={'ABC'} email="abc@test.com" />
//       <Student name={'DEF'} email="def@test.com" />
//       <Student name={'HIJ'} email="hij@test.com" />
//       {/* <button onClick={()=>{setName("XYZ")}}>Update Name</button> */}
//     </div>
//   );
// }
// export default App;




// import React, { useState } from 'react';

// // import Student from './Student';
// // // import User from './User';
// // // import {useState} from react;
// function App() {
//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);

//   function getData(val) {
//     console.warn(val.target.value);
//     setData(val.target.value);
//     setPrint(false);
//   }

//   return (
//     <div>
//       {print ? <h1>{data}</h1> : null}
//       <input type="text" onChange={getData}></input>
//       <button onClick={() => setPrint(true)}>Print Data</button>
//     </div>
//   );
// }
// export default App;



// import React, { useState } from 'react';

// function App()
// {
//   const[data, setData] = useState("ABC")
//   return(
//     <div>
//       <h1>{data}</h1>
//       <button onClick={()=>setData("XYZ")}>update Data</button>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Lists from './Lists';

// function App(){
//   render()
//   {
//     return (
//       <div>
//         <Lists />
//       </div>
//     )
//   }
// }
// export default App;




// import React, { useState } from "react";
// import Employee from './Employee'
// import Add_E from './Add_E'

// function App()
// {
  
//   const [fname, setFname] = useState("")
//   const [lname, setLname] = useState("")


//   function getFormData(e)
//   {
//     alert("Successful Submission")
//     e.preventDefault()
//   }
  
//   return (
//     <div>
//       <h1>Employee</h1>
//       <form onSubmit={getFormData}>
//         <div className="field">
//           <label>First Name</label>
//           <input type='text' placeholder='Enter Name' /> <br /> <br />
//         </div>

//         <div className="field">
//           <label>Last Name</label>
//           <input type='text' placeholder='Enter Name' /> <br /> <br />
//         </div>

//         <div className="field">
//           <label>Email</label>
//           <input type='email' placeholder='Enter Email' /> <br /> <br />
//         </div>

        
//         <div className="field">
//           <label>Department</label>
//           <select>
//           <option>select Department</option>
//           <option>PHP</option>
//           <option>.NET</option>
//           <option>SEO</option>
//           <option>Mobile</option>
//           <option>Admin/HR</option>
//           <option>Account</option>
//         </select> <br /> <br />
//         </div>


//        {/* First Name <input type='text' placeholder='Enter Name' /> <br /> <br />
//        Last Name <input type='text' placeholder='Enter Name' /> <br /> <br />
//        Email <input type='text' placeholder='Enter Email' /> <br /> <br />
//        Gender <input type='radio'>Male</input> <br /> <br />
//        {/* <input type='radio'>Female</input> */}
       
//         Skills

//         <input type='checkbox' /><span>Programming</span>
//         <input type='checkbox' /><span>Communication</span>
//         <input type='checkbox' /><span>Finance</span>
//         <input type='checkbox' /><span>Recruitment</span>
//         <input type='checkbox' /><span>Optimization</span>
//         <input type='checkbox' /><span>App Development</span>
//         <input type='checkbox' /><span>Frontend Technology</span>
//         <input type='checkbox' /><span>Backend Technology</span> */}

//         <button type="Submit">Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App;

import React, {Fragment} from "react";
import {Button, Table} from 'react-bootstrap';
import Employee from "./Employee";
import Home from './component/pages/Home';
import Body from './component/pages/Body';
import About from './component/pages/About';


function App(){
  return (
    <div>
      <Home />
      <Body />
      <About />

      <Fragment>
        <div style={{margin:"10rem"}}>
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
                    </tr>
                  )
                })
                :
                "No records available"
              } 
            </tboby>
            </Table>

        </div>
      </Fragment>
    </div>

  );
}

export default App;