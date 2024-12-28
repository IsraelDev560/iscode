import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Content } from './pages/Content'
import { Home } from './pages/Home'

function AppContent() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/content/:pageId" element={<Content />} />
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
