// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from "react";
import Produto2 from "./Produto2";


const App4 = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, [])
 
  useEffect(() => {
    if (produto !== null)
    window.localStorage.setItem('produto', produto);
  }, [produto]);

  async function handleClick ({target}) {
    setProduto(target.innerText);
    }

  return (
  <div>
    <h1>Preferência: {produto}</h1>
    <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
    <button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
    <Produto2 produto={produto} />
  </div>
  );
};

export default App4;
