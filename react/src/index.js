import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Activity from './components/Activity';
import TypeChooser from './components/TypeChooser';

function App() {
  function selectType(type) {
    setSelectedType(type);
  }
  const [selectedType, setSelectedType] = useState(null);
  return (
    <div>
      <h1>Bored Activity App</h1>
      <Activity type={selectedType} />
      <TypeChooser onSelectType={selectType} />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
