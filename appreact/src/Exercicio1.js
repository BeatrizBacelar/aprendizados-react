import React from "react";

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500'},
    { nome: 'Geladeria', preco: 'R$ 3000'},
    { nome: 'Smartphone', preco: 'R$ 1500'},
  ],
  ativa: true,
};

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500'},
//     { nome: 'Geladeria', preco: 'R$ 3000'},
//     { nome: 'Smartphone', preco: 'R$ 1500'},
//     { nome: 'Guitarra', preco: 'R$ 3500'},
//   ],
//   ativa: false,
// };

const Exercicio1 = () => {
  const dados = luana;

  const totalCompras = dados.compras.map(item => Number(item.preco.replace("R$", " "))).reduce((a,b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{color: dados.ativa? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span> </p>
      <p>Total gasto: R$ {totalCompras}</p>
      <p>{totalCompras > 10000 ? 'Você está gastando muito' : ' ' }</p>
  </div>
  );
};

export default Exercicio1;
