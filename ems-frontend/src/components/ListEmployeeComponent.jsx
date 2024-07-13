import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees,setEmployees]= useState([])
    const navigator = useNavigate();
    useEffect(() =>{
        getAllEmployees();
        

    },[])

    function getAllEmployees(){
        listEmployees().then((response) =>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-emp')
    }
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }
   function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response)=>{

    }).catch(error => {
        console.error(error);
    })
   }

  return (
    <div>
        <h2 className='text-center mt-5'>List of Employess</h2>
        <button className='btn btn-primary mb-2 mt-2 ml-10' onClick={addNewEmployee}>
            Add Employee
        </button>
        <table className ="table table-striped table-borderd">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={()=> removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                                </td>

                            </tr>
                        )
                    }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent