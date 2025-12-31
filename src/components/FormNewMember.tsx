import { Box, Button, Flex, TextArea } from "@radix-ui/themes";
import { useState } from "react";


export function FormNewMember() {
  const [fields, setFields] = useState({
    comment1: "",
    comment2: "",
    comment3: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-[var(--item)] mx-auto p-6 rounded-lg shadow-md">
      <Flex direction="column" align="center" gap="4">
        <h3 className="text-2xl font-bold mb-4">Novo Membro</h3>
        <Box width="100%">
          <TextArea
            name="comment1"
            size="1"
            placeholder="Comentário 1"
            value={fields.comment1}
            onChange={handleChange}
            className="w-full"
          />
        </Box>
        <Box width="100%">
          <TextArea
            name="comment2"
            size="2"
            placeholder="Comentário 2"
            value={fields.comment2}
            onChange={handleChange}
            className="w-full"
          />
        </Box>
        <Box width="100%">
          <TextArea
            name="comment3"
            size="3"
            placeholder="Comentário 3"
            value={fields.comment3}
            onChange={handleChange}
            className="w-full"
          />
        </Box>
        <Button type="submit" className="mt-4 w-full">Enviar</Button>
      </Flex>
    </form>
  );
}