import { Button, Table } from "@radix-ui/themes";

interface Member {
  id: string;
  fullName: string;
  email: string;
  group: string;
}

interface MemberTableProps {
  members?: Member[];
}

// Dados de exemplo - você pode remover e passar via props
const defaultMembers: Member[] = [
  {
    id: "1",
    fullName: "Danilo Sousa",
    email: "danilo@example.com",
    group: "Developer",
  },
  {
    id: "2",
    fullName: "Zahra Ambessa",
    email: "zahra@example.com",
    group: "Admin",
  },
  {
    id: "3",
    fullName: "Jasper Eriksson",
    email: "jasper@example.com",
    group: "Developer",
  },
];

export function MemberTable({ members = defaultMembers }: MemberTableProps) {
  const handleEdit = (member: Member) => {
    console.log("Editar:", member);
    // Implementar lógica de edição
  };

  const handleDelete = (member: Member) => {
    console.log("Excluir:", member);
    // Implementar lógica de exclusão
  };

  return (
    <Table.Root className="w-full min-w-full">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell className="w-[30%] center">
            Nome
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="w-[30%] center">
            Email
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="w-[20%] center">
            Grupo
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="w-[20%] center">
            Ações
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {members.map((member) => (
          <Table.Row key={member.id}>
            <Table.RowHeaderCell className="text-center">{member.fullName}</Table.RowHeaderCell>
            <Table.Cell className="text-center">{member.email}</Table.Cell>
            <Table.Cell className="text-center">{member.group}</Table.Cell>
            <Table.Cell className="align-center">
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => handleEdit(member)}>
                  Editar
                </Button>
                <Button variant="outline" onClick={() => handleDelete(member)}>
                  Excluir
                </Button>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}