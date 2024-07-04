import React, { useState } from 'react';

function AlternadorTexto() {
  const [text, setText] = useState('Texto 1');

  const toggleText = () => {
    setText(prevText => (prevText === 'Texto 1' ? 'Texto 2' : 'Texto 1'));
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleText}>Alterar texto</button>
    </div>
  );
}

export default AlternadorTexto;
