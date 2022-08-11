import { useState } from 'react'
import './App.css'

import {ButtonBase} from './components/atoms/Button/base';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ButtonBase color='red'>saluuuute</ButtonBase>
    </div>
  )
}

export default App
