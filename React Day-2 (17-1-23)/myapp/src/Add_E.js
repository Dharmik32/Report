import react from 'react'

function Add()
{
  
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")


  function getFormData(e)
  {
    alert("Successful Submission")
    e.preventDefault()
  }
  
  return (
    <div>
      <h1>Employee</h1>
      <form onSubmit={getFormData}>
        <div className="field">
          <label>First Name</label>
          <input type='text' placeholder='Enter Name' /> <br /> <br />
        </div>

        <div className="field">
          <label>Last Name</label>
          <input type='text' placeholder='Enter Name' /> <br /> <br />
        </div>

        <div className="field">
          <label>Email</label>
          <input type='email' placeholder='Enter Email' /> <br /> <br />
        </div>

        <div className="field">
          <label>Phone Number</label>
          <input type='text' placeholder='Enter Ph.no' /> <br /> <br />
        </div>

        
        <div className="field">
          <label>Department</label>
          <select>
          <option>select Department</option>
          <option>PHP</option>
          <option>.NET</option>
          <option>SEO</option>
          <option>Mobile</option>
          <option>Admin/HR</option>
          <option>Account</option>
        </select> <br /> <br />
        </div>

       
        Skills

        <input type='checkbox' /><span>Programming</span>
        <input type='checkbox' /><span>Communication</span>
        <input type='checkbox' /><span>Finance</span>
        <input type='checkbox' /><span>Recruitment</span>
        <input type='checkbox' /><span>Optimization</span>
        <input type='checkbox' /><span>App Development</span>
        <input type='checkbox' /><span>Frontend Technology</span>
        <input type='checkbox' /><span>Backend Technology</span> 

        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}
export default Add;