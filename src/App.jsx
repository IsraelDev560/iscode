import { useCallback, useEffect, useRef, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Apresentation } from './components/Apresentation'
import { Skills } from './components/Skills'
import { About } from './components/About'

function App() {
  return (
    <div className="flex flex-col justify-between font-sans bg-[#0A0A0A] w-full min-h-screen">
      <Navbar />
      <Apresentation />
      <About/>
      <Skills/>
    </div>
  )
}

export default App
