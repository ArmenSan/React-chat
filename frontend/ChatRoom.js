import React, { Component } from 'react'

class ChatRoom extends Component {
    
    constructor(props, context) {
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    }

    updateMessage(event){
        console.log('updateMessage: ' +event.target.value)
        this.setState({
            message:event.target.value
        })
    }

    submitMessage(event) {
        console.log('submitMessage: '+this.state.message)
        const nextMessage = {
            id: this.state.message.length,
            text: this.state.message
        }

        
        var list = Object.assign([], this.state.messages)
        list.push(nextMessage)
        this.setState({
            messages: list
        })
    }

    render() {
        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <li key ={message.id}>{message.text}</li>
            )
        })
        return (
            <div>
                <ol>
                    {currentMessage}
                </ol>
                Tipe our message!
                <br />
                <input onChange={this.updateMessage} type="text" placeholder="message" />
                <br />
                <button onClick={this.submitMessage}>Submit message</button>
            </div>
        )
    }
}
export default ChatRoom;