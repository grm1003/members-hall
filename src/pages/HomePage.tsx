import { Button } from '@/components/ui/button'

export function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Bem-vindo ao Members Hall</h1>
        <p className="text-slate-600">Sistema de gestão de membros da igreja</p>
      </div>
      
      <div className="flex gap-3">
        <Button>Botão Primário</Button>
        <Button variant="secondary">Botão Secundário</Button>
        <Button variant="outline">Botão Outline</Button>
      </div>
    </div>
  )
}