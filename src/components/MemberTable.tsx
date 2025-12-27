import { useEffect, useState } from "react";
import type { Member } from "@/models/Member";
import { getMembers } from "@/services/Get-Members";
import { Button, Table } from "@radix-ui/themes";


interface MemberTableProps {
  members?: Member[];
}



export function MemberTable({ members: initialMembers }: MemberTableProps) {
  const [members, setMembers] = useState<Member[]>(initialMembers || []);

  useEffect(() => {
    if (!initialMembers) {
      getMembers().then(setMembers);
    }
  }, [initialMembers]);

  
  const handleEdit = (member: Member) => {
    console.log("Editar:", member);
    // Implementar lógica de edição
  };

  const handleDelete = (member: Member) => {
    console.log("Excluir:", member);
    // Implementar lógica de exclusão
  };

  return (
    <div className="w-full overflow-y-auto rounded-lg border border-[var(--card)] shadow-sm">
      <Table.Root className="w-full min-w-full divide-y divide-[var(--card)]">
        <Table.Header className="bg-[var(--item)]">
          <Table.Row> 
            <Table.ColumnHeaderCell className="w-[30%] text-center px-4 py-2 font-semibold border-b border-[var(--card)]">
              Nome
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-[30%] text-center px-4 py-2 font-semibold border-b border-[var(--card)]">
              Email
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-[20%] text-center px-4 py-2 font-semibold border-b border-[var(--card)]">
              Grupo
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-[20%] text-center px-4 py-2 font-semibold border-b border-[var(--card)]">
              Ações
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {members.map((member) => (
            <Table.Row key={member.id} className="border-b border-[var(--card)] last:border-b-0">
              <Table.RowHeaderCell className="text-center px-4 py-2">{member.fullName}</Table.RowHeaderCell>
              <Table.Cell className="text-center px-4 py-2">{member.email}</Table.Cell>
              <Table.Cell className="text-center px-4 py-2">{member.group}</Table.Cell>
              <Table.Cell className="align-center px-4 py-2">
                <div className="flex gap-2 justify-center">
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
    </div>
  );
}