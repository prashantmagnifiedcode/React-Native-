import React, { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import Message from "../componentchat/message";
import "../slide.css";
import {user} from './slideshow'
import { useSelector,useDispatch } from "react-redux";
import ReactScrollToBottom from "react-scroll-to-bottom";

let socket;

const Whatsapp = () => {
    
    const [id, setid] = useState("");
    const [messagess, setmessagess] = useState([]);
    const [add, setadd] = useState([...messagess,messagess.userjoin]);
    
    
    const whatsappstate= useSelector((state)=>state.changewhatsapp)
const dispatchnew= useDispatch()
    
    const send = () => {

      const message = document.getElementById("user-msg").value;
      socket.emit("message", { message, id });
      document.getElementById("user-msg").value = " "};
    
    
    
    useEffect(() => {
          const ENDPOINT = "https://serverchatconnection.herokuapp.com/"
      
     socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      alert("Connected");
      setid(socket.id);});
    socket.on("welcomes", (data) =>
    {
    setmessagess([...messagess, data])
    }
    );
    socket.on("left", (data) =>{
          setmessagess([...messagess,data ])
    }
     
    );
    
    socket.emit("joined",user);
    
    return () => {
      
      socket.emit("disconnected");
      socket.off();
    };
    }, [])
    
    useEffect(() => {
      
      socket.on("receivedmessage", (data) => {
        setmessagess([...messagess, data]);
        
      });
    
      return () => {
        socket.off();
      };
    }, [messagess]);
  return (
    <>
  
      <main>
        <header>
            <div className="title">
                
                <h6>Chat App</h6>
            </div>
            
            <h6 onClick={()=>dispatchnew({type:"whatsapp",payload:false})} style={{cursor:"pointer"}}>close</h6>
           
            
            
            
 
            
        </header>
        <div className="container">
            <div className="user-window">
                <h5>𝔭𝔢𝔯𝔰𝔬𝔫 𝔧𝔬𝔦𝔫𝔢𝔡</h5>
              
                <div className="users-list">
               
                {add.map((item, i) =>{
                  return <p key={i}>{item}</p>
                 
                })}
                </div>
            </div>
            <div className="chat-window">
                <div className="chats">
                    <ReactScrollToBottom className="scrollpart">  
                    

                {messagess.map((item, i) => (
                    <Message
                    user={item.id === id ? "" : item.user}
                message={item.message}
                classs={item.id === id ? "outgoing" : "incoming"}
                key={i}
                />
                ))}
                
                </ReactScrollToBottom>
                </div>
                <div className="user-input">
                    <textarea type="text" id="user-msg" ></textarea>
                    
                    <button  type='button'id="user-send" onClick={()=>send()}>send</button>
                </div>
            </div>
        </div>

    </main>
    </>
  );
};
export default Whatsapp;
