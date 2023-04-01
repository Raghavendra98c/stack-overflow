import React from 'react'
import './RightSidebar.css'
import chatbot from '../../assets/chatbot.png'

const Chatbot = () => {
  return (
    <div className='chatbot'>
        <button className='chat' src={chatbot} >Chatbot</button>
    </div>
  )
}

export default Chatbot
