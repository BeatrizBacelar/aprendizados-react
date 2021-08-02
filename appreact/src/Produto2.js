import React, {useState, useEffect} from 'react'

const Produto2 = ({produto}) => {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        if (produto !== null)
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then(response => response.json())
        .then(json => setDados(json));
    }, [produto]);

    if (dados === null) return null;
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>{dados.preco}</p>
        </div>
    )
}

export default Produto2;
