import React, { Component } from 'react';
import { render } from 'react-dom';
import ChatRoom from './ChatRoom';
import io from 'socket.io-client';

class App extends Component {

    render() {
        const chatBoxStyle = {
            backgroundColor: 'yellow',
            border: '1px solid black',
            height: '500px',
            width: '500px',
            float: 'none',
            margin: '0 auto',
            
        }
   
        return (
            <div style={chatBoxStyle}>
                <ChatRoom />
            </div>
        );
    };
};

render(<App />,
        document.getElementById('app'))