import { useParams } from 'react-router-dom';
import { Container, Title, Text, Button, Group } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../components/Header';
import Footer from '../components/Footer';

const mockWritings = [
  { id: 1, title: 'The Art of Simplicity', content: 'This is the content of The Art of Simplicity...' },
  { id: 2, title: 'A Journey Through Time', content: 'This is the content of A Journey Through Time...' },
  { id: 3, title: 'Understanding the Universe', content: 'This is the content of Understanding the Universe...' },
];

export function Piece() {
  const { id } = useParams();
  const navigate = useNavigate();

  const writing = mockWritings.find((w) => w.id === parseInt(id));

  if (!writing) {
    return (
      <Container>
        <Header />
        <Text align="center" style={{ fontWeight: 700, fontSize: '24px' }}>
          Writing Not Found
        </Text>
        <Button onClick={() => navigate('/writings')}>Back to Writings</Button>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Group position="apart" align="center" mt="lg" mb="lg">
        <Button 
          variant="subtle" 
          onClick={() => navigate('/writings')}
          style={{ padding: 0 }}
        >
            <IconArrowLeft size={18} style={{  marginTop: '2px' ,marginRight: '5px'}}/>
            <Text style={{ marginRight: '5px'}}>Back</Text>
        </Button>
        <Title order={2} style={{ flexGrow: 1, textAlign: 'center'}}>
          {writing.title}
        </Title>
        <div style={{ width: '18px' }} /> {/* Placeholder to balance the row */}
      </Group>
      <Text size="md">{writing.content}</Text>
      <Footer />
    </Container>
  );
}

export default Piece;
