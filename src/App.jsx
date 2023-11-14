import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <Skills></Skills>
   <About></About>
   <Projects></Projects>
   </>
  )
}

export default App
