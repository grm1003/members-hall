import { FooterMain } from '@/shared/footer'
import { HeaderMain } from '@/shared/header'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <HeaderMain></HeaderMain>
      <main className="flex-1 w-full container mx-auto p-4 overflow-auto">
        <Outlet /> 
      </main>
      <FooterMain></FooterMain>
    </div>
  )
}