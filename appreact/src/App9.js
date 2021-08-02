// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo} from "react";


const App9 = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
  })

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange ({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value });
  }
 
    return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input  id="nome" type="text" value={form.nome} name="nome" onChange={handleChange} />

      <label htmlFor="email">E-mail</label>
      <input  id="email" type="text" value={form.email} name="email" onChange={handleChange} />
      <button>Enviar</button>
    </form>
    );
};

export default App9;
