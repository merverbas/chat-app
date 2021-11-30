import React from "react";
import { useEffect } from "react";
import {Widget, addResponseMessage} from "react-chat-widget-2";
import "react-chat-widget-2/lib/styles.css";
import {io} from "socket.io-client";

const socket= io("http://localhost:5000");


const Contact = () => { 
    useEffect( () => {
       addResponseMessage("welcome to chat...");
       socket.on('receive-message', (message) => {
        addResponseMessage(message);
    })
  }, []);

    const handleNewUserMessage = (newMessage) => {
   // console.log(`Hello ${newMessage}`);
   socket.emit('send-message', newMessage);
  
   };


        return(
            <div className="container">
             <div className="row">
                 <h1 className="text-center p-5 display-1">Contact Page</h1>
                    <hr/>
                 </div>
                <Widget subtitle="welcome to chat app" handleNewUserMessage={handleNewUserMessage}/> 
                
            </div>
        )
    
};
export default Contact;