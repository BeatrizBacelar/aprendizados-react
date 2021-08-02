// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo} from "react";

  function operacaoLenta() {
    let c = 0;
    for (let i=0; i< 10000000; i++){
      c = i + i / 10;
    }
    return c;
  }

const App5 = () => {
  const [contar, setContar] = useState(0);
 
  const t1 = performance.now();
  const valor = useMemo(() => operacaoLenta(), []);
  console.log(valor);
  console.log(performance.now() - t1);
  
  return <button onClick={() => setContar(contar+1)}>{contar}</button>
};

export default App5;
