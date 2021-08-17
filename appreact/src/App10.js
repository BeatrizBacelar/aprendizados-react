// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo} from "react";

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'E-mail',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'CEP',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'numero',
    label: 'Número',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  }
]

const App10 = () => {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
    return {
      ...acc,
      [field.id] : '',
    };
  }, {}));

  const [response, setResponse] = useState(null);
  
  function handleChange({target}){
    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  function handleSubmit (event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    }).then(response => {
      setResponse(response);
    });
  }
 
 
    return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type}) => (
      <div key={id}> 
        <label htmlFor={id}>{label}</label>
        <input  type={type} id={id} value={form[id]} onChange={handleChange}/>
      </div>
      ))}
      {response && response.ok && <p>Formulário enviado</p> }
      <button>Enviar</button>
    </form>
    );
};

export default App10;
