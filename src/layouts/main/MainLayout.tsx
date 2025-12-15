import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="bg-slate-800 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Members Hall</h1>
        </div>
      </header>
      <main className="flex-1 w-full container mx-auto p-4 overflow-auto">
        <Outlet /> 
      </main>
      <footer className="bg-slate-100 p-4 text-center text-sm text-slate-600 border-t">
        © 2025 Members Hall - Sistema de Gestão de Membros
      </footer>
    </div>
  )
}