import React, {useState} from 'react';

export default function InputBox() {
  const [lengthState, setLengthState] = useState(0);
  
  const readInputLength = (event) => {
    setLengthState(event.target.value.length);
  }

  return (
    <div>
      <input onChange={readInputLength} type="text"/>
      <p>Esse texto contém {lengthState} caracteres.</p>
    </div>
  )
}
