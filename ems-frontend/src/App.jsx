import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import Fakeheader from './components/Fakeheader'

function App() {

  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Fakeheader/>
    <Routes>
      {/* // http://localhost:3000 */}
      <Route path='/' element={<ListEmployeeComponent />}></Route>
      {/* // http://localhost:3000/employees */}
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
      <Route path='/add-emp' element={<EmployeeComponent />}></Route>
      
      <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
