import React, { Component } from 'react';
import { render } from 'react-dom';
import ChatRoom from './ChatRoom';

class App extends Component {

    render() {
        return (
            <div className="chatBoxStyle">
                <h1 className="ourChat"><i>Our Chat </i></h1>
                <ChatRoom />
            </div>
        );
    };
};

render(<App />,
        document.getElementById('app'))