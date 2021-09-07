import React, { useEffect, useState } from "react";
import "./chat.css";
import socketIo from "socket.io-client";
import Message from "./message";

import ReactScrollToBottom from "react-scroll-to-bottom";
let socket;
const Chat = () => {

  const [id, setid] = useState("");
  const [messagess, setmessagess] = useState([]);
  const [leftp, setleftp] = useState([]);
  
  const [name, setname] = useState("");
  console.log(leftp)

  console.log(messagess);
let user;
const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}
  const send = () => {
    const message = document.getElementById("user-msg").value;
    socket.emit("message", { message, id });
    document.getElementById("user-msg").value = " ";
  };

  const ENDPOINT = "http://localhost:8000"
    useEffect(() => {
   socket = socketIo(ENDPOINT, { transports: ["websocket"] });
  socket.on("connect", () => {
    user= prompt("enter the name")
    
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
  
  socket.emit("joined", user);
  
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
      <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
                <div onClick={(event) => !name ? event.preventDefault() : null} >  <button onClick={sendUser} className="joinbtn">Login In</button></div>
       
             <main>
        <header>
            <div class="title">
               
                <h4>Chat App</h4>
            </div>
            
            
            <h5 class="users-count">0</h5>
            
                 
            
        </header>
        <div class="container">
            <div class="user-window">
                <h5>𝔭𝔢𝔯𝔰𝔬𝔫 𝔧𝔬𝔦𝔫𝔢𝔡</h5>
              
                <div class="users-list">
                {messagess.map((item, i) =>{
                    return(
                      <>
                      <p key={i}>{item.user}</p>
                      </>
                    )
                })}
                </div>
            </div>
            <div class="chat-window">
                <div class="chats">
                    
                    <div class="message ingoSing">
                        <p>welcome--</p>
                    </div>
                    {messagess.map((item, i) => (
              <Message
                user={item.id === id ? "" : item.user}
                message={item.message}
                classs={item.id === id ? "outgoing" : "incoming"}
                key={i}
              />
            ))}
                   
                </div>
                <div class="user-input">
                    <input type="text" id="user-msg" ></input>
                    
  
                    <button  type='button'id="user-send " onClick={()=>send()}>send</button>
                </div>
            </div>
        </div>

    </main>
    
    </>
  );
};
export default Chat;
