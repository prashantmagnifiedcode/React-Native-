import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './logincss.css'
const clientId ="491131317475-l7tvi97ju0nb3v8vu07vr08o4bfgr78c.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    



    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        
        console.log("hi");
        console.log('Login Success:', res.log);
        console.log("hi");
        console.log('Login Success:', res.buttonText);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                className="g-signin"
                    clientId={clientId}
                    
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    //cookiePolicy={'single_host_origin'}
                    //isSignedIn={true}
                /> : null}
            
            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                   // on
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default Login;