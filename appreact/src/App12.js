// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo} from "react";
import Input from './Form/Input';
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

const App12 = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [produto, setProduto] = useState('');
  const [cor, setCor] = useState('Vermelho');
  const [frutas, setFrutas] = useState('');
  const [linguagens, setLinguagens] = useState([]);

 return (
  <form>
    <h2>Checkbox</h2>
    <Checkbox
    options={['JavaScript', 'PHP', 'Ruby']} 
    value={linguagens} 
    setValue={setLinguagens} />

    <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
    <h2>Frutas</h2>
    <Radio options={['Banana', 'Uva', 'Melão']} value={frutas} setValue={setFrutas} />

      <Select options={['smartphone', 'tablet']} value={produto} setValue={setProduto} />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required/>

      <Input id="email" label="E-mail" value={email} setValue={setEmail} />
    <button>Enviar</button>
  </form>
 );
};

export default App12;
