import React, { Component } from 'react';
import { render } from 'react-dom';
import ChatRoom from './ChatRoom';

class App extends Component {

    render() {
        return (
            <div className="chatBoxStyle">
                <ChatRoom />
            </div>
        );
    };
};

render(<App />,
        document.getElementById('app'))