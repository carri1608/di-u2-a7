import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLasttName] = useState('');
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value);

    }
  
    function handleLastNameChange(e) {
      setLasttName(e.target.value);
    }
  
    function handleReset() {
      setFirstName('');
      setLasttName('');
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Nombre"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Apellido"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hola, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reiniciar</button>
      </form>
    );
  }