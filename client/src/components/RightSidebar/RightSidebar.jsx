import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import Chatbot from './Chatbot'

const RightSidebar = () => {
    return (
        <aside className='right-sidebar'>
            <Widget />
            <WidgetTags />
            <Chatbot />
        </aside>
    )
}

export default RightSidebar
