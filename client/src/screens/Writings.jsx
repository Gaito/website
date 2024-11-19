import { useState } from 'react';
import { Container, TextInput, List, Button, Text, Flex, ColorPicker } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useHover } from '@mantine/hooks';

const mockWritings = [
  { id: 1, title: 'The Art of Simplicity', content: 'This is the content of The Art of Simplicity...' },
  { id: 2, title: 'A Journey Through Time', content: 'This is the content of A Journey Through Time...' },
  { id: 3, title: 'Understanding the Universe', content: 'This is the content of Understanding the Universe...' },
  // Add more mock data here
];

export function Writings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [writings, setWritings] = useState(mockWritings);

  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    setWritings(
      mockWritings.filter((writing) =>
        writing.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleViewWriting = (id) => {
    navigate(`/writings/${id}`); // Navigate to detailed writing page
  };

  return (
    <Container>
        <Header />
        <Text>
            Writings
        </Text>

        <TextInput
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(event) => handleSearch(event.target.value)}
            mb="md"
        />

        <List spacing="sm" size="sm" center>
        {writings.map((writing) => (
            <Text
                key={writing.id}
                style={{
                cursor: 'pointer'}}
                c={hoveredId === writing.id ? 'blue' : 'black'} 
                onMouseEnter={() => setHoveredId(writing.id)} 
                onMouseLeave={() => setHoveredId(null)} 
                onClick={() => navigate(`/writings/${writing.id}`)}
            >
                {writing.title}
            </Text>
        ))}
        </List>
        <Footer />
    </Container>
);
}

export default Writings;
