import { useState } from 'react';

function TypeChooser(props) {
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
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              props.onSelectType(type);
            }}
          >
            {type}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default TypeChooser;
