import React from 'react';

let prevSenderId = ''

const Message = ({ message, currUserId }) => {
    if(!prevSenderId) {
        prevSenderId = message.senderId;
        console.log(currUserId);
        return (
            <section className={message.senderId === "cmvnk" ? "cmvnk": "other"}>
                <img src={message.avatar} alt="place-kitten"/>
                <li key={message.id}>
                    <div className={message.senderId === "cmvnk" ? "cmvnk-text": "other-text"}>{message.text}</div>
                </li>
            </section>
        );
    }
    else {
        if(prevSenderId === message.senderId) {
            prevSenderId = message.senderId;
            return (
                <section className={message.senderId === "cmvnk" ? "cmvnk": "other"}>
                    <img className="hidden" src={message.avatar} alt="place-kitten"/>
                    <li key={message.id}>
                        <div className={message.senderId === "cmvnk" ? "cmvnk-text": "other-text"}>{message.text}</div>
                    </li>
                </section>
            )
        } else {
            prevSenderId = message.senderId;
            return (
                <section className={message.senderId === "cmvnk" ? "cmvnk": "other"}>
                    <img src={message.avatar} alt="place-kitten"/>
                    <li key={message.id}>
                        <div className={message.senderId === "cmvnk" ? "cmvnk-text": "other-text"}>{message.text}</div>
                    </li>
                </section>
            );
        }
    }

};

export default Message;
