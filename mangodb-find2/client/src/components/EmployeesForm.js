import React, { useState } from "react";

function EmployeesForm() {
  let [employees, setEmployees] = useState([]);

  let getEmployeesFromServer = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:7799/employees", reqOptions);
    let JSOData = await JSONData.json();
    setEmployees(JSOData);

    console.log(JSOData);
  };

  return (
    <div>
      <form>
        <button
          type="button"
          onClick={() => {
            getEmployeesFromServer();
          }}
        >
          Get Employees
        </button>
      </form><br/>
      <div>
      <table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>ID</th>
                <th>Profilepic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Email</th>
                <th>Department</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((ele,i)=>{
                return(
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{ele.id}</td>
                    <td><img src={ele.profilepic}></img></td>
                    <td>{ele.first_name}</td>
                    <td>{ele.last_name}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.age}</td>
                    <td>{ele.email}</td>
                    <td>{ele.department}</td>
                    <td>{ele.country}</td>
                </tr>

                )
            })}
        </tbody>
        <tfoot></tfoot>
      </table>
      </div>
    </div>
  );
}

export default EmployeesForm;
