import React from 'react';
import Button from './Button';


const Formulario = () => {
    return (
        <div>
            <Input2 id="email" label="email" required />
            <Input2 id="password" type="password" label="Password" />
            <Button />
        </div>
    )
}

export default Formulario;
