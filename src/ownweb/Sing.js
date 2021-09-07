import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "../slide.css";
import Button from "@material-ui/core/Button"

import { Zoom } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { useHistory } from "react-router"

import "react-toastify/dist/ReactToastify.css"
import { useGoogleLogin } from "react-google-login"

const clientId ="491131317475-l7tvi97ju0nb3v8vu07vr08o4bfgr78c.apps.googleusercontent.com";
const Sign = () => {
  const [datas, setdatas] = useState({ email: " ", password: " " })
  const [forgetdatas, setforgetdatas] = useState({ confirmemail: " ", newpassword: " ",confirmpassword:" " });
  const [logingoogle,setlogingoogle]=useState({googlelogindata:" "})
  const history= useHistory()
    const [forget,setforget]=useState(false)
  const images = [
    "https://p.motionelements.com/stock-video/business/me11031707-group-young-mixed-race-people-working-laptops-office-wooden-4k-a0077.jpg",
    "https://www.colourbox.com/preview/25798348-multiethnic-group-of-happy-business-people-working-with-laptop-computer-in-office.jpg",
   "https://www.yourblogtoday.com/wp-content/uploads/2020/07/AdobeStock_358648139-blog.png",
  ];

  const zoomOutProperties = {
    scale: 0.3,
  };

  const inputdata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdatas({ ...datas, [name]: value });
    setforgetdatas({ ...forgetdatas, [name]: value });
  };
  const send = async () => {
    const { email, password } = datas;
            console.log("sends")
    try {
      const dataget = await fetch("/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log(dataget.status)

      if (dataget.status==200) {
        alert("successful")

       
        setdatas({email: " ", password: " " });
      } else {
alert("Pls Fill Valid data")
        

      }
    } catch (e) {
      console.log(e);
    }
  };
  const forgetsend = async () => {
    
    const { confirmemail, newpassword,confirmpassword } = forgetdatas;
            //console.log( confirmemail, newpassword,confirmpassword )
    try {
      const dataget = await fetch("/forget", {
        method: "POST",
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({confirmemail, newpassword,confirmpassword}),
      });
      console.log(dataget)
      
        
      if (dataget.status===200){
        alert("successful")
        history.push("/")
        setforgetdatas({ confirmemail: " ", newpassword: " ",confirmpassword:" " });
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };
  const sendgoogledata = async () => {
    
    const {googlelogindata}=logingoogle;
  
    try {
      const dataget = await fetch('/google', {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({googlelogindata}),
      });
      const finale = await dataget.json();
      if (1) {
        alert("successful")
        console.log(finale);
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };

///sing in 

  const onSuccess=(res)=>{
    
    setlogingoogle({googlelogindata:res.profileObj}) 
    sendgoogledata()
  
  }
const onFailure=(res)=>{
  alert("Something went wrong")
}
const {signIn}= useGoogleLogin({
  onSuccess,
  onFailure,
  clientId,
  isSignedIn:true,
})






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
                      <li>
                        <NavLink className="Navcolor" to="/">
                          HOME
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="Navcolor" to="/Content">
                          CONTENT
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="Navcolor" to="/detail">
                          DETAIL
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="Navcolor" to="/detail">
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="sign">
                    <h6>
                      <NavLink className="Navcolor" to="/sign">
                        SIGN
                      </NavLink>
                    </h6>
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
        {forget?<div className="containersign">
          <div className="headers">
            <h6>Updating Password</h6>
          </div>
          <div className="signdetais">
            <div className="emails">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="confirmemail"
                value={forgetdatas.confirmemail}
                onChange={inputdata}
                placeholder="Email"
              />
            </div>
            <div className="password">
              <label htmlFor="">New Password</label>
              <input
                type="password"
                name="newpassword"
                value={forgetdatas.newpassword}
                onChange={inputdata}
                placeholder="new password"
              />
            </div>
            <div className="password">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                value={forgetdatas.confirmpassword}
                onChange={inputdata}
                placeholder=" confirm password"
              />
              
            </div>
            <div className="buttonsign">
              <Button onClick={()=>forgetsend()}>Confirm</Button>
              <Button onClick={()=>setforget(false)}>Discard</Button>
            </div>
          </div>
          <div className="options">
            <h5>Fill Valid Data</h5>
          </div>
          
        </div>
        
        
        
        
        
        :<div className="containersign">
          <div className="headers">
            <h6>LOGIN</h6>
          </div>
          <div className="signdetais">
            <div className="emails">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                value={datas.email}
                onChange={inputdata}
                placeholder="Email"
              />
            </div>
            <div className="password">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={datas.password}
                onChange={inputdata}
                placeholder="password"
              />
              
            </div>
            <div className="buttonsign">
              
              <Button onClick={send}>SIGN IN</Button>
            </div>
          </div>
          
          <div className="options">

            <h5>YOU CAN LOGIN THROUGH</h5>
          </div>
          
          <div className="signs">
            <Button className="google" onClick={()=>signIn()}>Google</Button>
            <Button className="google"  onClick={()=>setforget(true)}>𝔣𝔬𝔯𝔤𝔢𝔱 𝔭𝔞𝔰𝔴𝔬𝔯𝔡</Button>
            
          </div>
        </div>}
      </div>
    </>
  );
};
export default Sign;
