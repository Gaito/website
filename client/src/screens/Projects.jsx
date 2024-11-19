import React from 'react';
import { Container, Text, Anchor, Group, List, Divider, Flex, ScrollArea } from '@mantine/core';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Projects() {
  const projects = [
    { id: 'project1', title: 'Project One', description: 'Details about Project One.' },
    { id: 'project2', title: 'Project Two', description: 'Details about Project Two.' },
    { id: 'project3', title: 'Project Three', description: 'Details about Project Three.' },
  ];

  return (
    <ScrollArea>
      <Header />

      <Container size="md" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Text size="xl" weight={700} mb="md">
          Projects Glossary
        </Text>
        <List withPadding>
          {projects.map((project) => (
            <List.Item key={project.id}>
              <Anchor href={`#${project.id}`} size="sm">
                {project.title}
              </Anchor>
            </List.Item>
          ))}
        </List>

        <Divider my="xl" />
            <div style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: '1rem' }}>
                {projects.map((project) => (
                <div key={project.id} id={project.id} style={{ marginBottom: '2rem' }}>
                    <Text size="lg" weight={600}>
                    {project.title}
                    </Text>
                    <Text size="sm" color="dimmed" style={{ marginBottom: '0.5rem' }}>
                    {project.description}
                    </Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                    vestibulum vestibulum. Cras venenatis euismod malesuada.
                    </Text>
                </div>
                ))}
            </div>
      </Container>
      <Footer />
    </ScrollArea>
  );
}

