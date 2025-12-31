import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/main/MainLayout'
import { HomePage } from './pages/HomePage'
import { NewMembersPage } from './pages/NewMembersPage'
import { DeleteMembersPage } from './pages/DeleteMembersPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastrar" element={<NewMembersPage />} />
          <Route path="/excluir" element={<DeleteMembersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
