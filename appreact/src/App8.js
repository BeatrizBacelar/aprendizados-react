// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo} from "react";
import useFetch from './hooks/useFetch';
import useLocalStorage from './hooks/useLocalStorage';

const App8 = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const {request, data, loading, error} = useFetch();

  function handleClick ({target}) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    async function fetchData(){
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto');
    }
   
    fetchData();
  }, [request]);
 
  if (error) return <p>{error}</p>
  if (loading === true) return <p>Carregando...</p>;
  if (data) 
    return  (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => {
          <div key={produto.id}>
              {produto.nome}
          </div>
        })
        }
      
      </div>
    );

};

export default App8;
