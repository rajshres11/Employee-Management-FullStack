import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'


const EmployeeComponent = () => {
    const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')
    const [email,setEmail]=useState('')

    const {id} = useParams();

    const [error,setErrors] =useState({
        firstName:'',
        lastName:'',
        email:''

    })

    const navigator = useNavigate();

    useEffect(()=>{
        if(id){
            getEmployee(id).then((response) => {
                setEmail(response.data.email);
                
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
            }).catch(error => {
                console.error(error);
            })
        }
    },[id])

    function handleFirstname(e){
        setFirstName(e.target.value);
    }
    function handleLastname(e){
        setLastName(e.target.value);
    }
    function handleemail(e){
        setEmail(e.target.value);
    }

    function saveOrUpdateEmployee(e){
        e.preventDefault();
    if(validateForm()){
        const employee ={firstname,lastname,email}
    console.log(employee)


        if(id){
            updateEmployee(id,employee).then((response) =>{
                console.log(response.data);
                navigator('/employees');
            }).catch(error =>{
                console.error(error);
            })
        }else{
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
            }).catch(error => {
                console.error(error);
            })

        }
        


        

    }
    }
    
    function validateForm(){
        let valid = true;
        const errorCopy = {...error}
        if(firstname.trim()){
            errorCopy.firstName ='';
        }else{
            errorCopy.firstName = 'firstname is required';
            valid = false;
        }


        if(lastname.trim()){
            errorCopy.lastName ='';
        }else{
            errorCopy.lastName = 'lastname is required';
            valid = false;
        }
    
    
        
        if(email.trim()){
            errorCopy.email ='';
        }else{
            errorCopy.email = 'email is required';
            valid = false;
        }
        setErrors(errorCopy);
        return valid ;
    }    
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else {
            return <h2 className='text-center'>Add Employee</h2>
        }

    }

  return (
    <div className='conatiner'>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>first name</label>
                            <input type='text' placeholder='Enter firstname' name='firstname' value={firstname}
                            className={`form-control ${error.firstName ? 'is-valid':''  }`}  onChange={handleFirstname}></input>
                            {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}

                        </div>
                        
                        <div className='form-group mb-2'>
                            <label className='form-label'>last name</label>
                            <input type='text' placeholder='Enter lastname' name='lastname' value={lastname}
                            className={`form-control ${error.lastName ? 'is-valid':''  }`} onChange={handleLastname}></input>
                            {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}

                        </div>
                        
                        <div className='form-group mb-2'>
                            <label className='form-label'>email</label>
                            <input type='text' placeholder='Enter email' name='email' value={email}
                            className={`form-control ${error.email ? 'is-valid':''  }`}  onChange={handleemail}></input>
                            {error.email && <div className='invalid-feedback'>{error.email}</div>}

                        </div>
                        <button className='btn btn-success '  onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default EmployeeComponent