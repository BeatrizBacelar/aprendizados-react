import React from "react";

const Eventos = () => {
    function handleScroll(event){
      console.log(event)
    }
    window.addEventListener('scroll', handleScroll);

  return (
    <div style={{heigth: '200vh'}}>
   <button onClick={(event) => console.log(event.target.innerText) } >Clique</button>
   </div>
);
}

export default Eventos;
