import React, {useContext} from 'react'
import { GlobalContext } from './GlobalContext';

const Produto3 = () => {
    const global = useContext(GlobalContext);

    if (global.dados === null) return null;
    return (
        <div>
            <p>Produto: {global.dados.map(produto => <li key={produto.id}>{produto.nome}</li>)}</p>
            
          <button onClick={() => global.limparDados()}>Limpar dados</button>
        </div>
    )
}

export default Produto3;
