import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Content } from './pages/Content'
import { Home } from './pages/Home'
import { SolutionPage } from './pages/SolutionPage' // Importa a nova página

function AppContent() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/content/:pageId" element={<Content />} />
      <Route path="/solutions/:solutionId" element={<SolutionPage />} /> {/* Adiciona a nova rota */}
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
