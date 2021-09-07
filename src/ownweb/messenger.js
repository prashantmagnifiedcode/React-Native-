import React, { useState,useEffect} from 'react'

import socketIo from "socket.io-client";
import Message from "../componentchat/message";
import {user} from '../component/slideshow'
import ReactScrollToBottom from "react-scroll-to-bottom";
let socket;
const Messenger=()=>{
  console.log(user)
    const [id, setid] = useState("");
  const [messagess, setmessagess] = useState([]);
  const [leftp, setleftp] = useState([]);

  console.log(leftp)

  console.log(messagess);

  const send = () => {
    const message = document.getElementById("user-msg").value;
    socket.emit("message", { message, id });
    document.getElementById("user-msg").value = " ";
  };

  const ENDPOINT = "http://localhost:8000"
    useEffect(() => {
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
    return(
        <>
        <main>
        <header>
            <div className="title">    
                <h4>Chat App</h4>
            </div>
        <h5 className="users-count">0</h5>   
        </header>
        <div className="container">
            <div className="user-window">
                <h5>PERSON JOINED</h5>
              
                <div className="users-list">
                {messagess.map((item, i) =>{
                    return(
                      <>
                      <p key={i}>{item.user}</p>
                      </>
                    )
                })}
                </div>
            </div>
            <div className="chat-window">
                <div className="chats">
                    
                {messagess.map((item, i) => (
              <Message
                user={item.id === id ? "" : item.user}
                message={item.message}
                classs={item.id === id ? "outgoing" : "incoming"}
                key={i}
              />
            ))}
                </div>
                <div className="user-input">
                <input type="text" id="user-msg" ></input>
                    <button  type='button'id="user-send" onClick={()=>send()}>send</button>
                </div>
            </div>
          </div>
        </main>
        </>
    )
}
export default Messenger