import React from 'react';

// import { Container } from './styles';

export default function Chart(props) {
    let ticksStyle = {
        fontColor: '#495057',
        fontStyle: 'bold'
    }
    var mode = 'index';
    var intersect = true;


    const state = {
        chartData: {
            labels: ['JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
            datasets: [
                {
                    label: '2019',
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    data: [1000, 2000, 3000, 2500, 2700, 2500, 1000]
                },
                {
                    label: '2020',
                    backgroundColor: '#ced4da',
                    borderColor: '#ced4da',
                    data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                mode: mode,
                intersect: intersect
            },
            hover: {
                mode: mode,
                intersect: intersect
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                    // display: false,
                    gridLines: {
                        display: true,
                        lineWidth: '4px',
                        color: 'rgba(0, 0, 0, .2)',
                        zeroLineColor: 'transparent'
                    },
                }],
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    },
                    ticks: ticksStyle
                }]
            }
        }
    }
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                        <h3 className="card-title">Renda</h3>
                        {/* <a href="javascript:void(0);">View Report</a> */}
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex">
                        <p className="d-flex flex-column">
                            <span className="text-bold text-lg">R$18.230,00</span>
                            <span>Renda ao longo do tempo</span>
                        </p>
                        <p className="ml-auto d-flex flex-column text-right">
                            <span className="text-success">
                                <i className="fas fa-arrow-up" /> 33.1%
                    </span>
                            <span className="text-muted">Desde o último mês</span>
                        </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="position-relative mb-4">
                        <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand"></div>
                            <div className="chartjs-size-monitor-shrink"></div>
                        </div>
                        <Bar
                            data={state.chartData}
                            options={state.options}
                            width={512}
                            height={200}
                        />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        {/* <span className="mr-2">
                    <i className="fas fa-square text-primary" /> This year
                    </span>
                    <span>
                    <i className="fas fa-square text-gray" /> Last year
                    </span> */}
                    </div>
                </div>
            </div>
            {/* /.card */}

        </div>
    );
}
