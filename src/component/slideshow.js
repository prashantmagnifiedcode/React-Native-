import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../slide.css";
import Menu from '../ownweb/Menu'
import {NavLink} from 'react-router-dom'


const Slideshow = () => {
  const images = [
    "https://p.motionelements.com/stock-video/business/me11031707-group-young-mixed-race-people-working-laptops-office-wooden-4k-a0077.jpg",
    "https://www.colourbox.com/preview/25798348-multiethnic-group-of-happy-business-people-working-with-laptop-computer-in-office.jpg",

    "https://www.yourblogtoday.com/wp-content/uploads/2020/07/AdobeStock_358648139-blog.png",
  ];

  const zoomOutProperties = {
    scale: 0.3,
    
  };
  if(true){

    toast.dark("Welcome sir/Madam ", {
      position: "top-left",
      
      autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    
    progress: undefined,
  })
}

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
               <Menu/>
                  <img
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  src={each}
                />
              </div>
            );
          })}
        </Zoom>
      </div>
      <ToastContainer />
      <div className="containers">
        <div className="containers1">
          <div className="about">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="containerform">
            <form action="">
              <div className="forms">
                <div className="form2 form-outline">
                  <label htmlFor="">Name</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="form2">
                  <label htmlFor="">Phone</label>
                  <input type="phone" name="" id="" />
                </div>
                <div className="form2">
                  <label htmlFor="">Password</label>
                  <input type="password" name="" id="" />
                </div>
                <div className="form2">
                  <label htmlFor="">Adress</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="form2">
                  <label htmlFor="">Email</label>
                  <input type="email" name="" id="" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className=" text-center footerbottom">
        <div className="container p-2 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <label className="form-label" for="form5Example2">
                    Email address
                  </label>
                </div>

                <div className="col-md-5 col-10 ">
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control footerbottom"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="text-center p-3  footerbottom">
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Prashant Srivastava
          </a>
        </div>
      </footer>
    </>
  );
};

export default Slideshow;
