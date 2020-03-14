import React from 'react';
import Table from '../Table';

// import { Container } from './styles';

export default function Empreendedor(props) {
    return (
        <>
            <Table columns={["nome", 'idade']}/>
            {/* <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                <div className="card bg-light">
                    <div className="card-header text-muted border-bottom-0">
                    </div>
                    <div className="card-body pt-0">
                        <div className="row">
                            <div className="col-7">
                                <h2 className="lead"><b>{props.empreendedor.firstname}</b></h2>
                                <p className="text-muted text-sm"><b>Sobre: </b> sobre </p>
                                <ul className="ml-4 mb-0 fa-ul text-muted">
                                    <li className="small">
                                        <span className="fa-li">
                                            <i className="fas fa-lg fa-building" />
                                        </span> Endereço: {props.empreendedor.address.street}
                                    </li>
                                    <li className="small">
                                        <span className="fa-li">
                                            <i className="fas fa-lg fa-phone" />
                                        </span> Telefone: {props.empreendedor.phone}
                                    </li>
                                </ul>
                            </div>
                            <div className="col-5 text-center">
                                <img src={props.empreendedor.image} className="img-circle img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="text-right">
                            <a href="#" className="btn btn-sm bg-teal">
                                <i className="fas fa-comments" />
                            </a>
                            &nbsp;
                            <a href="#" className="btn btn-sm btn-primary">
                                <i className="fas fa-user" /> Ver detalhes
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
