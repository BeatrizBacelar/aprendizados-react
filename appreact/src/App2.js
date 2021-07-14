import React from "react";
import Header from "./Header";
import Home from './Home';
import Produtos from './Produtos';

const App2 = () => {
  const { pathname } = window.location; 

  let Pagina;
  pathname === '/produtos' ? Pagina = Produtos : Pagina = Home;

  return (
  <div>
    <Header />
    <Pagina />
  </div>
);
}

export default App2;
