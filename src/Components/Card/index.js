import React from 'react';

// import { Container } from './styles';

export default function Card(props) {
    return (
        <div className={`card ${props.cardType}`}>
            {props.headerTitle !== "" ?
                <div className="card-header">
                    <h3 className="card-title">{props.headerTitle}</h3>
                    {props.hasCardTools ?
                        <div className="card-tools">
                            <div className="input-group input-group-sm" style={{ width: 150 }}>
                                <input type="text" name="table_search" className="form-control float-right" placeholder="Pesquisar por nome" 
                                value={props.value}
                                onChange={props.onChange}/>
                                {/* <div className="input-group-append">
                                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                                </div> */}
                            </div>
                        </div>
                        : null}
                </div>
                : null}
            {/* /.card-header */}
            <div className="card-body">
                {props.children}
            </div>
            {/* /.card-body */}
        </div>
    );
}
