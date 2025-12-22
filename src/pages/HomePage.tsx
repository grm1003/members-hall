import { Button } from '@/components/ui/button'

export function HomePage() {
  return (
    <div className="space-y-6">
      <table className="w-full table-auto border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300 px-4 py-2">Nome</th>
            <th className="border border-slate-300 px-4 py-2">Email</th>
            <th className="border border-slate-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 px-4 py-2">João Silva</td>
            <td className="border border-slate-300 px-4 py-2">joao.silva@example.com</td>
            <td className="border border-slate-300 px-4 py-2">
              <Button variant="outline">Editar</Button>
              <Button variant="outline" className="ml-2">Excluir</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}