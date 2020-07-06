import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Messages from './components/Messages';
import Send from './components/Send';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loading: true,
      prevSenderId: '',
      currUserId: 'cmvnk'
    }
  }

  componentDidMount() {
    let messages = [
      {
        avatar: "http://www.placekitten.com/25/25",
        senderId: "cmvnk",
        text: "Hey what's up?",
        id: 1
      },
      {
        avatar: "http://www.placekitten.com/26/26",
        senderId: "flute1952",
        text: "Not much what's up with you?",
        id: 2, 
      },
      {
        avatar: "http://www.placekitten.com/26/26",
        senderId: "flute1952",
        text: "Not much what's up with you too?",
        id: 3
      }
    ]

    localStorage.setItem('messages', JSON.stringify(messages));
    if(localStorage.getItem('messages')) {
      this.setState({messages: JSON.parse(localStorage.getItem('messages')), loading: false});

    }
  }

  addMessage = (message) => {
    this.setState({messages: [...this.state.messages, { avatar: 'http://www.placekitten.com/25/25', senderId: 'cmvnk', text: message, id: this.state.messages[this.state.messages.length - 1].id + 1}]});
  }

  render() {
      if(!this.state.loading) {
        return (
          <main className="main-container">
            <Title />
            <Messages currUserId = {this.state.currUserId} messages = {this.state.messages}/>
            <Send addMsg={this.addMessage} />
          </main>
        );
      } else {
        return <div>loading....</div>
      }
      
  }
}

export default App;
