import React from 'react';
import { createRoot } from 'react-dom/client';
import MyNotesApp from './components/MyNotesApp';
import './styles/style.css';

const root = createRoot(document.querySelector('#root'));
root.render(<MyNotesApp />);