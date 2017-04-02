import React, { Component } from 'react';
import { render } from 'react-dom';
import ChatRoom from './ChatRoom';
import io from 'socket.io-client';

class App extends Component {
   
    render() {
        return (
            <div>
                it is not cool stuff yet, but it will be! 
                <ChatRoom />
            </div>
        );
    };
};

render(<App />,
        document.getElementById('app'))