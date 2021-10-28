import React, { useEffect, useState } from 'react'
import { getData } from './services/getData'
import ReactHtmlParser from 'react-html-parser'
import ChatInput from './ChatInput/ChatInput'
import Messages from './components/Messages/Messages'

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    getData()
      .then((response) => setData(response))
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <div>
      {ReactHtmlParser(data)}
      <Messages />
      <ChatInput />
      <h1>HI</h1>
    </div>
  )
}

export default App
