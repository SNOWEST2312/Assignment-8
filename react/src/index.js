import {createRoot} from 'react-dom/client';
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
