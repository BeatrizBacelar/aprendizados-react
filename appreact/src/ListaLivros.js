import React from "react";

const ListaLivros = () => {
const livros = [
    { nome: "A cabana", ano: 1990},
    { nome: "A fome", ano: 1890},
    { nome: "A cabeça", ano: 1970},
]
  return (
    <ul>
      {livros
        .filter(({ano}) => ano >=1900)
        .map(({nome, ano}) => (
            <li key={nome}>{nome}, {ano}</li>
      ))}
    </ul>
);
      }

export default ListaLivros;
