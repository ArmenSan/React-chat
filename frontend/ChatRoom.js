import React, { Component } from 'react'

class ChatRoom extends Component {

    constructor(props,context) {
        super(props,context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
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

        // var list = Object.assign([],this.state.messages)
        // list.push(nextmessage)
        // this.setState({
        //     messages: list
        // })
    }

    render() {
        const currentMessage = this.state.messages.map((message, i) => {
            return(
                <li key={message.id}>{message.text}</li>
            )
        })

        const ourChat = {
            textAlign:'center',
        }

        const Mess = {
            backgroundColor: 'blue',
            overflow: 'auto',
            height: '380px',
            
        }

        const buttonAndSubmit = {
            justifyContent: 'center',
            display: 'flex',
        }

        return (
            <div >
                <h1 style={ourChat}><i>Our chat </i></h1>
                <div style={Mess}>
                    <ol>
                     {currentMessage}
                    </ol>
                </div>

                <div style={buttonAndSubmit}>
                    <input onChange={this.updateMessage} type='text' placeholder="Message" />
                </div>
                    <div style={buttonAndSubmit}>
                        <button onClick={this.submitMessage}>Submit Message</button>
                    </div>
            </div>
        )
    }
}

export default ChatRoom