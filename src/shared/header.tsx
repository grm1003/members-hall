import { DropdownSideBar } from "@/components/dropdownSideBar";

export function HeaderMain() {
  return (
    <div className="w-full h-15">
      <header className="bg-[var(--primary)] text-[var(--primary-foreground)] p-4 shadow-md">
        <div className="container mx-auto flex flex-start">
          <DropdownSideBar></DropdownSideBar>
          <h1 className="text-2xl font-bold">Members Hall</h1>
        </div>
      </header>
    </div>
  )
}