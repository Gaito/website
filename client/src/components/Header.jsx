import { useState } from 'react';
import { Container, Group, Burger, Flex, Image, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const [opened, { toggle, close }] = useDisclosure(false);
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
      onClick={close} // Close the drawer on link click
      style={{
        display: 'block',
        padding: '0.5rem 1rem',
        textDecoration: 'none',
        fontWeight: isActive(link.link) ? 'bold' : 'normal',
        color: isActive(link.link) ? 'black' : 'inherit',
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
        <Container size="md" className={classes.inner}>
        <Flex justify="space-between" align="center" style={{ width: '100%' }}>
            {/* Left side: Logo + Star */}
            <Flex align="center" gap="sm">
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
    
            {/* Right side: Desktop Links */}
            <Group style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
            {items}
            </Group>
    
            {/* Burger Menu */}
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Flex>
        </Container>
    </header>
  );
}
