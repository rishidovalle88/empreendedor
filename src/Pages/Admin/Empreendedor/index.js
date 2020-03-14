import React, { useState } from 'react';

import Card from '../../../Components/Card'
import EmpreendedorCard from '../../../Components/Empreendedor/EmpreendedorCard';
import EmpreendedorDetail from '../../../Components/Empreendedor/EmpreendedorDetail';
import Fade from 'react-reveal/Fade';

import 'admin-lte'
import Table from '../../../Components/Table';

export default function Empreendedor() {

    const [Empreendedor, setEmpreendedor] = useState({})
    const [Empreendedores, setEmpreendedores] = useState([]);
    const [filter, setFilter] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [showBlock, setShowBlock] = useState(false);

    const addEmpreendedor = (data, { reset }) => {
        console.log(data)
        setEmpreendedores([...Empreendedores, data]);
        console.log(Empreendedores)

        setFiltered([...filtered, data]);
        reset();
        handleShowBlock();
    }

    const handleChange = event => {
        setFilter(event.target.value);
        let newList = [];
        if (event.target.value !== "") {
            newList = Empreendedores.filter(el => el.firstname.toLowerCase().indexOf(filter.toLowerCase()) > -1);
        }
        else {
            newList = Empreendedores;
        }

        setFiltered(newList);
    };

    const handleShowBlock = () => {
        console.log(showBlock);
        let show = showBlock ? false : true;
        setShowBlock(show);
    }

    return (
        <>
            <Card headerTitle="">
                <div className="row">
                    <div className="col-md-4">
                        <button type="buttom" className="btn btn-info" onClick={handleShowBlock}>
                            <i className="fas fa-user-plus"></i> Adicionar empreendedor</button>
                    </div>
                </div>
            </Card>

            <Fade when={showBlock}>
                {showBlock ?

                    <Card cardType="card-secondary" headerTitle="Adicionar empreendedor">
                        <EmpreendedorDetail addEmpreendedor={addEmpreendedor} empreendedor={Empreendedor} setEmpreendedor={setEmpreendedor} />
                    </Card>

                    : <></>
                }
            </Fade>


            <Card cardType="card-secondary" headerTitle="Empreendedor(es)" hasCardTools={true} value={filter} onChange={handleChange}>
                {filtered.length !== 0 ?
                    <Table columns={["Nome", 'Telefone', 'Celular', 'Email']}>
                        {filtered.map((item, index) => (
                            <tr key={index}>
                                <td>{item.firstname}</td>
                                <td>{item.phone}</td>
                                <td>{item.cel}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </Table>
                    : <div><span>Nenhum registro encontrado!</span></div>}

            </Card>



            {/* {
                filtered.length !== 0 ?
                    <Card cardType="card-secondary" headerTitle="Empreendedor(es)" hasCardTools={true} value={filter} onChange={handleChange}>
                        <div className="form-group">
                            <input type="text" className="form-control col-sm-6 col-md-6" id="Empreendedors" placeholder="Procurar por empreendedor..."
                                value={filter}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row d-flex align-items-stretch">
                            {filtered.map((item, index) => (
                                <EmpreendedorCard key={index} empreendedor={item} />
                            ))}

                        </div>
                    </Card>
                    : null
            } */}
        </>
    );
}
