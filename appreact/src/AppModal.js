// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const AppModal = () => {
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState('Teste');

  function handleClick (){
  setItems(...items, 'Novo item');
  console.log(items);
  }
 
  return (
    <div>
      <button onClick={handleClick}>Clicar</button>
      <Modal modal={modal} setModal={setModal} />
     <ButtonModal setModal={setModal} />
    </div>
  );
};

export default AppModal;
