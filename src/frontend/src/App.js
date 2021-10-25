import React, { useEffect, useState } from 'react'
import { getData } from './services/getData'
import ReactHtmlParser from 'react-html-parser'

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    getData()
      .then((response) => setData(response))
      .catch((err) => console.log(err.message))
  }, [])

  console.log(data)

  return <div>{ReactHtmlParser(data)}</div>
}

export default App
