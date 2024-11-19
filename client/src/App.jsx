import '@mantine/core/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

import {About} from './screens/About';
import {Projects} from './screens/Projects';
import {Writings} from './screens/Writings';
import {Piece} from './screens/Piece';

export default function App() {
  return <MantineProvider>
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writings" element={<Writings /> } />
        <Route path="/writings/:id" element={<Piece />} />
      </Routes>
    </Router>
  </MantineProvider>
}