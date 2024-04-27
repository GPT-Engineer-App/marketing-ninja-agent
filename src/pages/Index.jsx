import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, List, ListItem, Text, VStack, Link, Image } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading mb={4}>Seu Agente de Marketing Digital</Heading>
          <Text>Bem-vindo ao seu assistente pessoal para ascender no marketing digital!</Text>
        </Box>

        <Box>
          <Heading size="md">Adicione suas Metas</Heading>
          <Input placeholder="Digite sua nova meta..." value={input} onChange={(e) => setInput(e.target.value)} size="md" />
          <Button leftIcon={<FaPlus />} colorScheme="teal" mt={2} onClick={handleAddTask}>
            Adicionar Meta
          </Button>
        </Box>

        <Box>
          <Heading size="md">Suas Metas Atuais</Heading>
          <List spacing={3}>
            {tasks.map((task, index) => (
              <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
                {task}
                <Button size="sm" colorScheme="red" onClick={() => handleDeleteTask(index)}>
                  <FaTrash />
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Heading size="md">Dicas Rápidas de Marketing</Heading>
          <Text mt={2}>Mantenha-se atualizado com as últimas tendências do marketing digital para se destacar.</Text>
          <Link href="https://www.marketingdigital.com.br" isExternal color="teal.500">
            Aprenda mais
          </Link>
        </Box>

        <Box>
          <Heading size="md">Inspiração Diária</Heading>
          <Image src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnNwaXJhdGlvbmFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTcxNDIyNDkxNHww&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
