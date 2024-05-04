import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Helloworld from './components/Helloworld'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
