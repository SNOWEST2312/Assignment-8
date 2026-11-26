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

  const chosenStyle = {backgroundColor: 'lightblue'};

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
            style={props.selectedType === type ? chosenStyle : {}}
          >
            {type}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default TypeChooser;
