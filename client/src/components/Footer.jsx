import React from 'react';
import { Container, Text, Group, Anchor } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconBrandYoutube } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer style={{ padding: '1rem 0', textAlign: 'center', display: 'flex' }}>
      <Container size="md">
        <Text weight={500} size="lg" mb="xs">
          Connect with me
        </Text>
        <Group position="center" spacing="lg" style={{justifyContent: 'space-evenly'}}>
          <Anchor href="https://www.linkedin.com/in/taylor-gaito" target="_blank">
            <IconBrandLinkedin size={24} />
          </Anchor>
          <Anchor href="https://github.com/gaito" target="_blank">
            <IconBrandGithub size={24} color='grey'/>
          </Anchor>
          <Anchor href="https://www.youtube.com/@taylorgaito" target="_blank">
            <IconBrandYoutube size={24} color='red' />
          </Anchor>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;
