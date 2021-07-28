import { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main';
import TextInput from './components/TextInput';

export default function App() {
  
  const [name, setName] = useState('Felipe');

  function handleNameChange(newName) {
    setName(newName)
  }

  return (
    <>
      <Header>Atividade Prévia</Header>
      <Main>
        <TextInput
          labelDescription="Digite bla bla:"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <p>
          Seu nome é {name}, com {name.length} caracteres.
        </p>
      </Main>
    </>
  );
}
