import React, { useState } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '../../Components/Input';
// import { Container } from './styles';

export default function Empreendedor() {

    const [empreendedores, setEmpreendedores] = useState([]);

    function handleSubmit(data) {
        console.log(data);
        setEmpreendedores([ ...empreendedores, data] );
        console.log(empreendedores);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="firstname" placeholder="Nome" />
                <Input type="text" name="lastname" placeholder="Nome" />
                <Input type="email" name="email" />
                <Input type="date" name="dtnasc" />
                <Input type="text" name="phone" />
                <Input type="text" name="cel" />

                <Scope path="address">
                    <Input type="text" name="cep" />
                    <Input type="text" name="street" />
                    <Input type="text" name="number" />
                    <Input type="text" name="complement" />
                    <Input type="text" name="neighborhood" />
                    <Input type="text" name="city" />
                    <Input type="text" name="state" />
                </Scope>

                <Scope path="income">
                    <Input type="text" name="business" />
                    <Input type="text" name="family" />
                </Scope>


                <button type="submit">Enviar</button>
            </Form>

            <ul>
                {empreendedores.map((item, index) => (                    
                    <li key={index}>{item.lastname}</li>
                ))}
            </ul>

        </>
    );
}
