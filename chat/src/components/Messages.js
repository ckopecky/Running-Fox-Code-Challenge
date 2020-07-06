import React from 'react';
import Message from './Message';

const Messages = (props) => {
    return (
        <section>
            {props.messages.map(message => {
                return <Message addMsg={props.addMsg} currUserId={props.currUserId} message={message}/>
            })}
        </section>
    );
};

export default Messages;