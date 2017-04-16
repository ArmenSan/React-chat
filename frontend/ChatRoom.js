import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChatRoom extends Component {

    constructor(props,context) {
        super(props,context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.onRowRender = this.onRowRender.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    }

    onRowRender(row) {
        var rowDOM = ReactDOM.findDOMNode(row);
        var offsets = rowDOM.getClientRects()[0];
        var parent = rowDOM.parentNode;
        parent.scrollTop = offsets.top;
  }

    componentDidMount(){
        console.log('ComponentDidMount')
        firebase.database().ref('messages/').on('value', (snapshot) => {
            
            const currentMessages = snapshot.val()
            
            if(currentMessages != null){
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }

    updateMessage(event){
        console.log('updateMessage:'+event.target.value)
        this.setState({
            message: event.target.value
        })
    }

    submitMessage(event){
        console.log('submitMessage:' +this.state.message)
        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }

        firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    }

    render() {
        
        return (
             <div >
                <h1 className="ourChat"><i>Our Chat </i></h1>
                <div className="CurrentMessage">
                
                    {this.state.messages.map((message, i) => {
        return(
                 <Fuck 
                    onRender={ this.onRowRender}
                    key={message.id}
                    text={message.text}
                    onRender={i === this.state.messages.length - 1 ? this.onRowRender : null}
                 />
            );
        })
                    }
                </div>
                <form onSubmit={this.submitMessage}>
                    <div className="buttonAndSubmit">
                        <input onChange={this.updateMessage} value={this.state.message} type='text' placeholder="Message" />
                    </div>
                </form>
                    <div className="buttonAndSubmit">
                        <button onClick={this.submitMessage} >Submit Message</button>
                    </div>
            </div>
        )
    }
}

class Fuck extends Component {
    componentDidMount() {
        if (this.props.onRender) this.props.onRender(this);
    }
    render() {
        return(
            <div>
                {this.props.text}
                    </div>
        );
    }
}

export default ChatRoom