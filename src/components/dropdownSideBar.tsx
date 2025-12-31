import { Button, DropdownMenu, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function DropdownSideBar() {
  return (
    <Flex align="center">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" size="1">
            <HamburgerMenuIcon width={15} height={15} />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content size="1">
          <DropdownMenu.Item className="bg-[var(--item)] rounded-t-xl p-0">
            <Link
              to="/"
              className="block w-full h-full px-4 py-2 text-[var(--primary-foreground)] font-semibold"
            >
              Home
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="bg-[var(--item)] p-0">
            <Link
              to="/excluir"
              className="block w-full h-full px-4 py-2 text-[var(--primary-foreground)] font-semibold"
            >
              Excluir Membro
            </Link>
          </DropdownMenu.Item>
          

          <DropdownMenu.Item className="bg-[var(--item)] rounded-b-xl p-0">
            <Link
              to="/cadastrar"
              className="block w-full h-full px-4 py-2 text-[var(--primary-foreground)] font-semibold"
            >
              Cadastrar Membro
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
}