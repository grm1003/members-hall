import { Box, Button, Flex, TextArea } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const deleteMemberSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
});

type DeleteMemberFormData = z.infer<typeof deleteMemberSchema>;

export function FormDeleteMember() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteMemberFormData>({
    resolver: zodResolver(deleteMemberSchema),
  });

  const onSubmit = (data: DeleteMemberFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-[var(--item)] mx-auto p-6 rounded-lg shadow-md">
      <Flex direction="column" align="center" gap="4">
        <h3 className="text-2xl font-bold mb-4">Excluir Membro</h3>
        <Box width="100%">
          <TextArea
            {...register("nome")}
            size="1"
            placeholder="Nome"
            className="w-full"
          />
          {errors.nome && (
            <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
          )}
        </Box>
        <Button
          type="submit"
          className="bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] mt-4 w-full"
        >
          Excluir
        </Button>
      </Flex>
    </form>
  );
}