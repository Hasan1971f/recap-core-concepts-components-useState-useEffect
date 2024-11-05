import { useState } from 'react'

import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React Core Concecpts Recap</h3>
      <ol>
        <li>Components</li>
        <li>Jsx</li>
        <li>Props</li>
        <li>EventHandler</li>
        <li>useState</li>
        <li>Load Data</li>
      </ol>
      <hr/>
      <Posts></Posts>
    </>
  )
}

export default App
