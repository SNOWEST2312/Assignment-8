import { useState } from 'react';

function TypeChooser() {
  const [types, setTypes] = useState([
    'education',
    'recreational',
    'social',
    'diy',
    'charity',
    'cooking',
    'relaxation',
    'music',
    'busywork',
  ]);
  return (
    <ul>
      {types.map((type) => (
        <li key={type}>
          <a href="#">{type}</a>
        </li>
      ))} 
    </ul>
  );
}
export default TypeChooser;
