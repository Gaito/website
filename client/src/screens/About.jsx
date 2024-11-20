import React from 'react';
import { useState } from 'react';
import { Container, Text, Image, ScrollArea, Group, ActionIcon } from '@mantine/core';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Me from '../assets/me.png'
import Guitar from '../assets/guitar.png'
import GuitarMusic from '../assets/guitar_music.png'
import Brain from '../assets/brain.png'
import BrainColor from '../assets/brain_color.png'

export function About() {
  const [rightHoverImage, setRightHoverImage] = useState(Guitar);
  const [leftHoverImage, setLeftHoverImage] = useState(Brain);

  return (
    <ScrollArea style={{ height: '100vh' }}>
      <Container size="md" style={{ padding: '2rem' }}>
        <Header />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <Image
              src={Me}
              width={150}
              height={150}
              radius="50%"
              style={{ flexShrink: 0 }}
              visibleFrom='sm'
            />
            <Text style={{ flex: 1, textAlign: 'justify' }}>
              Hello, my name is Taylor Gaito. I am a 2024 graduate from Johns Hopkins with two Bachelor's in Cognitive Science and Computer Science. 
              I'm currently a Software Engineer at Bloomberg in New York City. I'm interested in <b>intelligent systems</b>-- that's everything from <a href='https://www.nature.com/articles/nature.2012.11811'>
              path-finding slime molds</a> to <a href='https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html'> eerily emotive
              artificial intelligence</a> to the fascinating and familiar old human brain herself. I subscribe to the view that the best conceptualization of 
              the universe is not as a physical structure whose root element is matter, but an informational system whose root element is the abstraction of a bit.
               </Text>
              <Text style={{marinTop:'1rem'}}> And we are the signal receivers, the pattern interpreters, the transformers that interact with and are a part of that system.
                To define my purpose in this system is perhaps to define the purpose of every other being with capabilities like myself (the ability to reason, introspect, affect).
              <b> We are here to understand.</b> "We are a way for the universe to know itself," said Carl Sagan. That means take it all in! Learn as much as you can,
              build something meaningful, be excited by the nuance and challenge and richness of the world. </Text>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
            <Text style={{ flex: 1, textAlign: 'justify' }}>
              New York is my favorite place because you can feel passion pulsing from everywhere. I'm constantly inspired being here. In my free time
              I love to write and learn songs on the guitar (I have a Mexican Fender Stratocaster with Sunburst Finish).
              I play alone now, but I was in a band throughout high school and college and have yet to make one in New York, which is not the most
              drum-set friendly city. 
            </Text>
            <Image
              src={rightHoverImage}
              width={150}
              height={150}
              style={{ flexShrink: 0 }}
              onMouseEnter={() => setRightHoverImage(GuitarMusic)}
              onMouseLeave={() => setRightHoverImage(Guitar)}
              visibleFrom='sm'
            />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <Image
              src={leftHoverImage}
              width={150}
              height={150}
              style={{ flexShrink: 0 }}
              onMouseEnter={() => setLeftHoverImage(BrainColor)}
              onMouseLeave={() => setLeftHoverImage(Brain)}
              visibleFrom='sm'
            />
            <Text style={{ flex: 1, textAlign: 'justify' }}>
              Need movies? Try Portrait of a Lady on Fire, Before Sunrise, Garden State, or Rushmore. Need books? Try Portrait of the Artist as a 
              Young Man, Anna Karenina, As I Lay Dying, or Zen and the Art of Motorcycle Maintenance. I sometimes write poetry or little short blurbs on topics. Increasingly I'm fascinated by 
              politics/finance/other-adult-topics-that-I-never-really-understood-until-I-started-paying-taxes. I'll begin posting
              these under the writings tab on this page. Also, if you want to see my resume and past projects that's under the projects tab.
            </Text>
          </div>
          <Group hiddenFrom='sm'>
            <Image height={100} src={Brain}></Image>
            <Image height={100} src={Me}></Image>
            <Image height={100} src={Guitar}></Image>
          </Group>
        </div>
        <Footer />
      </Container>
    </ScrollArea>
  );
};

export default About;
