// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo} from "react";
import Input from './Form/Input';
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

const App = () => {
  const [cep, setCep] = useState('')
  const [error, setError] = useState(null);

  function validadeCep(value){
    if (value.length === 0){
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)){
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({target}){
    validadeCep(target.value);
  }

  function handleChange({target}){
    if (error) validadeCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if (validadeCep(cep)) {
      console.log('Enviou')
    } else {
      console.log('Não enviar')
    }
    
  }

 return (
  <form onSubmit={handleSubmit}>
    <Input 
    label="CEP" 
    id="cep" 
    type="text" 
    value={cep} 
    setValue={setCep}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="00000-000" />
    {error && <p>{error}</p>}
    <button>Enviar</button>
  </form>
 );
};

export default App;
