// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Product from "./Product";


const App = () => {

    const [dados, setDados] = useState(null);
    const [loading, setLoading] = useState(null);

 async function handleClick (event) {
   setLoading(true);
  const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
  const json = await response.json();
  setDados(json);
  setLoading(false);
}

  return (
    <div>
      <button style={{margin: '.5rem'}}onClick={handleClick}>notebook</button>
      <button style={{margin: '.5rem'}}onClick={handleClick}>smartphone</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Product dados={dados} />}
    </div>
  );
};

export default App;
