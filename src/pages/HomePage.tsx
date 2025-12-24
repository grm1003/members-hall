import { Button, Table } from "@radix-ui/themes";

export function HomePage() {
  return (
    <Table.Root className="table-fixed w-full border-collapse border">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell style={{width: '35%'}} className="border border-[var(--primary)] px-4 py-2">Nome</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell style={{width: '45%'}} className="border border-[var(--primary)] px-4 py-2">Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell style={{width: '20%'}} className="border border-[var(--primary)] px-4 py-2">Ações</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="border border-[var(--primary)] px-4 py-2">João Silva</Table.Cell>
          <Table.Cell className="border border-[var(--primary)] px-4 py-2">joao.silva@example.com</Table.Cell>
          <Table.Cell className="border border-[var(--primary)] px-4 py-2">
            <div className="flex gap-2">
              <Button variant="outline">Editar</Button>
              <Button variant="outline">Excluir</Button>
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}