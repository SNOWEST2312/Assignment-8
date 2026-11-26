import {createRoot} from 'react-dom/client';
import React, {useState} from 'react';
import TypeChooser from './components/TypeChooser';

function App() {
  const [selectedType, setSelectedType] = useState(null);
  return (
    <div>
      <h1>Bored Activity App</h1>
      <TypeChooser />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
