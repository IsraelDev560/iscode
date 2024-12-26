import { useCallback, useRef, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Apresentation } from './components/Apresentation'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="flex flex-col justify-between font-sans bg-gray-50 dark:bg-[#0A0A0A] w-full min-h-screen app">
      <Navbar />
      <Apresentation />
      <About />
      <Skills />
      <Projects/>
    </div>
  )
}

export default App
