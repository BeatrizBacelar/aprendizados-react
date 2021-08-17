// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo} from "react";

const coresArray = [
   'azul',
  'roxo',
   'laranja',
   'verde',
   'vermelho',
  'cinza',
];

const App11 = () => {
  const [cores, setCores] = useState(['azul', 'vermelho']);

  function handleChange ({target}){
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => 
        cor !== target.value ));
    }
    
  }

  console.log(cores);

 return (
  <form action="">
      
        {coresArray.map((cor, index) => (
        <label key={index} style={{textTransform: 'capitalize'}}>
          <input type="checkbox" value={cor}
          checked={cores.includes(cor)} 
          onChange={handleChange}/>
         {cor}
        </label>
        ))}
  </form>
 );
};

export default App11;
