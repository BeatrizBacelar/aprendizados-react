import React from "react";

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  const dados = produtos.filter(
    ({preco}) => Number(preco.replace("R$", "")) >= 1500
  );

  return (
    <>
    {dados.map(({id, nome, preco, cores}) => 
      <div  key={id}>
        <h1>{nome}</h1>
        <p>{preco}</p>
        <ul>{cores.map(cor => 
        <li style={{backgroundColor: cor, color: "white"}}  key={cor}>{cor}</li>)}</ul>
      </div>
    )}
    </>
);
      }

export default App;
