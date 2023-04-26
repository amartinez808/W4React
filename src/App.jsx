import { useState } from 'react'
import './App.css'
import { Box } from './Box'
import { Text } from './Text'
import { Button } from './Button'
import { MyAwesomeComponent } from './MyAwesomeComponent'

function App() {
  const [count, setCount] = useState(0)
  const handleClick=() =>{
    alert("Hello, world!");
  }
  return (
    
    <div className="App">
      <Box backgroundColor='green'>BOX</Box>
      <Button onClick={handleClick}>BUTTON</Button>
      <Text>DSAFDGDFDGSDFG</Text>

      <MyAwesomeComponent/>
    </div>
  )
}

export default App
