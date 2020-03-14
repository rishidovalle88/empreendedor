import React, { useState } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '../Input';
// import { Container } from './styles';

export default function EmpreendedorDetail({ addEmpreendedor, empreendedor, setEmpreendedor }) {

    const [empreendedores, setEmpreendedores] = useState([]);

    function handleSubmit(data) {
        console.log(data);
        setEmpreendedores([...empreendedores, data]);
        console.log(empreendedores);
    }

    return (
        <>
            <Form onSubmit={addEmpreendedor}>
                <div className="row">
                    <div className="col-md-4">
                        {/* Widget: user widget style 1 */}
                        <div className="card card-widget widget-user">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div className="widget-user-header bg-info">
                                <h3 className="widget-user-username">Rishi do Valle</h3>
                                <h5 className="widget-user-desc">Full Stack Developer</h5>
                            </div>
                            <div className="widget-user-image">
                                <img className="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                            </div>
                            <div className="card-footer">

                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>

                    <div className="col-md-4">
                        <Input type="text" name="firstname" placeholder="Nome" />
                        <Input type="text" name="lastname" placeholder="Sobrenome" />
                        <Input type="email" name="email" placeholder="Email" />
                        <Input type="date" name="dtnasc" placeholder="Data de Nascimento" />
                    </div>
                    <div className="col-md-4">
                        <Input type="text" name="phone" placeholder="Telefone" />
                        <Input type="text" name="cel" placeholder="Celular" />
                    </div>

                    <div className="col-md-12"><h3>Dados residênciais</h3></div>

                    <Scope path="address">
                        <div className="col-md-4">
                            <Input type="text" name="cep" placeholder="CEP" />
                            <Input type="text" name="street" placeholder="Rua" />
                            <Input type="number" name="number" placeholder="Número" />
                        </div>
                        <div className="col-md-4">
                            <Input type="text" name="complement" placeholder="Complemento" />
                            <Input type="text" name="neighborhood" placeholder="Bairro" />
                            <Input type="text" name="city" placeholder="Cidade" />
                        </div>
                        <div className="col-md-4">
                            <Input type="text" name="state" placeholder="UF" />
                        </div>
                    </Scope>

                    <div className="col-md-12"><h3>Renda inicial</h3></div>

                    <Scope path="income">
                        <div className="col-md-6">
                            <Input type="text" name="business" placeholder="Renda do empreendimento" />
                        </div>
                        <div className="col-md-6">
                            <Input type="text" name="family" placeholder="Renda familiar" />
                        </div>
                    </Scope>

                    <div className="col-md-12 text-center">
                        <button className="btn btn-success col-md-6" type="submit">Salvar</button>
                    </div>
                </div>
            </Form>

            <ul>
                {empreendedores.map((item, index) => (
                    <li key={index}>{item.lastname}</li>
                ))}
            </ul>

        </>
    );
}
