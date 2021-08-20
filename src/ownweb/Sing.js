import React from "react";
import { NavLink } from "react-router-dom";
import '../slide.css'
import Button from '@material-ui/core/Button'
import Menu from './Menu'
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Sign = () => {
  const images = [
    "https://p.motionelements.com/stock-video/business/me11031707-group-young-mixed-race-people-working-laptops-office-wooden-4k-a0077.jpg",
    "https://www.colourbox.com/preview/25798348-multiethnic-group-of-happy-business-people-working-with-laptop-computer-in-office.jpg",

    "https://www.yourblogtoday.com/wp-content/uploads/2020/07/AdobeStock_358648139-blog.png",
  ];

  const zoomOutProperties = {
    scale: 0.3,
    
  };
  return (
    <>
      
      <div className="slide-container ">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => {
            return (
              <div key={index} className="slidetop">
                <div className="slide">
                  <div className="slideinner">
                    <a href="https://google.com"></a>
                  </div>
                  <div className="slideinner">
                    <a href="https://google.com"></a>
                  </div>
                  <div className="slideinner">
                    <a href="https://google.com "></a>
                  </div>
                </div>
                <div className="header">
                  <div className="header1">
                    <ul>
                      <li><NavLink   className="Navcolor" to='/'>HOME</NavLink></li>
                      <li><NavLink   className="Navcolor" to="/Content" >CONTENT</NavLink></li>
                      <li><NavLink    className="Navcolor" to ='/detail'>DETAIL</NavLink></li>
                    </ul>
                  </div>
                  <div className="sign">
                    <h6><NavLink    className="Navcolor" to ='/sign'>SIGN</NavLink></h6>
                  </div>
                </div>
                  <img
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  src={each}
                />
              </div>
            );
          })}
        </Zoom>
      </div>

       <div className="signcontent">
           <div className="containersign">
         <div className="headers">
             <h6>LOGIN</h6>
         </div>
         <div className="signdetais">
             <div className="emails">
                <label htmlFor="">Email</label>
                <input type="email" value=""  placeholder="Email"/>
             </div>
             <div className="password">
                <label htmlFor="">Password</label>
                <input type="password" value=""  placeholder="password"/>
             </div>
             <div className="buttonsign">
             <Button >SIGN IN</Button>
             </div>
         </div>
         <div className="options">
           <h5>YOU CAN LOGIN THROUGH</h5>
         </div>
         <div className="signs">
           
           
             
             <Button className="google" >google</Button>
             <Button className="facebook" >facebook</Button>
             
          
         </div>
           </div>
       </div>
    </>
  );
};
export default Sign;
