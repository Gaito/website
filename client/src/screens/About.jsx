import React from 'react';
import { Container, Text, Image, ScrollArea, Group, ActionIcon } from '@mantine/core';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Me from '../assets/me.png'

export function About() {
  return (
    <ScrollArea style={{ height: '100vh' }}>
      <Container size="md" style={{ padding: '2rem' }}>
        <Header />
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
          <Image
            src={Me}
            alt="Your Name"
            width={150}
            height={150}
            radius="50%"
            style={{ flexShrink: 0 }}
          />
          <Text style={{ flex: 1, textAlign: 'justify' }}>
            Hello! My name is [Your Name], and this is a bit about me. I have a passion for technology, 
            creative endeavors, and meaningful connections. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus scelerisque fermentum lacus, et tempor nunc vehicula a. Integer tincidunt, arcu non ultrices gravida, 
            est urna convallis tortor, non aliquam ex elit vel neque. This text can be expanded, modified, and styled as needed.
          </Text>
        </div>
        <Footer />
      </Container>
    </ScrollArea>
  );
};

