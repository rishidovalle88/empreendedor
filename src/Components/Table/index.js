import React from 'react';

// import { Container } from './styles';

export default function Table(props) {
    return (
        <div className="card-body table-responsive p-0" >
            <table className="table table-head-fixed text-nowrap">
                <thead>
                    <tr>
                        {props.columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                    {/* {data.map((item, index) => (
                        <tr key={index}>
                            {
                                Object.keys(item).forEach((_item) => (
                                    <>
                                        <td>{item[_item]}</td>
                                    </>
                                ))}
                        </tr>

                    ))} */}

                </tbody>
            </table>
        </div>
    );
}
