import React from 'react'
import {NavLink} from 'react-router-dom'
const Menu =()=>{
    return(
        <>
        <div className="header">
                  <div className="header1">
                    <ul>
                      <li><NavLink   className="Navcolor" to='/'>HOME</NavLink></li>
                      <li><NavLink   className="Navcolor" to="/Content" >CONTENT</NavLink></li>
                      <li><NavLink    className="Navcolor" to ='/Detail'>DETAIL</NavLink></li>
                    </ul>
                  </div>
                  <div className="sign">
                    <h6><NavLink    className="Navcolor" to ='/sign'>SIGN UP</NavLink></h6>
                  </div>
                </div>
        </>
    )
}
export default Menu;