import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../App.js'
import { useContext } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../index.css'
const Menu = () => {
  const { state, dispatch } = useContext(userContext)

  const Rendermenu = () => {
    if (state) {

      toast("login successful menu", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      console.log(state);
      console.log("duilne");

      console.log(dispatch)

      return (
        <>
          <li class="nav-item">
            <NavLink class="nav-link" to="/register" >Register</NavLink>
          </li>


          <li class="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>



          <li class="nav-item">
            <NavLink className="nav-link" to="/service">Service</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/detail">Detail</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>

      )
    } else {
      console.log("nav");
      console.log(state);

      return (
        <> 
        
      { <li class="nav-item">
          <NavLink class="nav-link" to="/register">regstration </NavLink>
        </li>
      }
        


          <li class="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>


          <li class="nav-item">
            <NavLink className="nav-link" to="/signin">Signin</NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link" to="/service">Service</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/detail">Detail</NavLink>
        
          </li>
         

        </>

      )
    }



  }

  return (
    <>
      <nav className="  navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid  d-flex justify-content-between">
          <NavLink className="navbar-brand " to="/"></NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ">
              <Rendermenu />
              <ToastContainer />
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Menu;