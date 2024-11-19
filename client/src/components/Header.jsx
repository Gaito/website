import { useState } from 'react';
import { Container, Group, Burger, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom'; // For React Router
import classes from './Header.module.css';

import Star from '../assets/star.png';
import Signature from '../assets/signature.png';
import ColorSignature from '../assets/signature_color.png';

const links = [
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/writings', label: 'Writing' },
];

export function Header() {
  const { pathname } = useLocation(); 
  const [opened, { toggle }] = useDisclosure(false);
  const [hoverImage, setHoverImage] = useState(Signature);
  const navigate = useNavigate();

  const isActive = (link) => {
    if (link === '/about' && (pathname === '/about' || pathname === '/')) {
      return true;
    }
    return pathname === link;
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={isActive(link.link) || undefined} 
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Flex gap={5}>
          <div
            style={{
              display: 'inline-block',
              transition: 'filter 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoverImage(ColorSignature)}
            onMouseLeave={() => setHoverImage(Signature)}
            onClick={() => navigate('/')}
          >
            <Image
              src={hoverImage}
              width={150}
              height={50}
              style={{
                transition: 'opacity 0.3s ease',
                cursor: 'pointer',
              }}
            />
          </div>
          <Image src={Star} width={20} height={20} />
        </Flex>
        <Group gap={50} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
