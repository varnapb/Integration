import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/><br /><br />
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/' element={<View/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
      </Routes>
     
    </>
  )
}

export default App
