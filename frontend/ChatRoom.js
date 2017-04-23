import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChatRoom extends Component {

    constructor(props,context) {
        super(props,context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.keyUpFunction = this.keyUpFunction.bind(this)
        this.state = {
            message: '',
            messages: [],
        }
    }

    componentDidMount(){
        console.log('ComponentDidMount');
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
        };
        this.setState({
            message: ''
        });
        firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    }

    keyUpFunction(event) {
        event.preventDefault();
        if(event.keyCode == 13) {
            this.submitMessage(event)
        };
    }
    componentDidUpdate() {
    const panel = this.refs.chat_container;
    if (panel.lastChild) panel.lastChild.scrollIntoView();
  }

    render() {
         const currentMessage = this.state.messages.map((message, i) => {
            return (
                <dt key ={message.id}>{message.text}</dt>
            )
        })
        return (
             <div >
                <div ref={'chat_container'} className="CurrentMessage">
                    {currentMessage}
                </div>
                <div className="buttonAndSubmit">
                    <input  onChange={this.updateMessage} onKeyUp={this.keyUpFunction} value={this.state.message} type='text' placeholder="Message" />
                    <button  onClick={this.submitMessage} >Submit Message</button>
                </div>
            </div>
        )
    }
}

export default ChatRoom