import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'


export default function DonutModal(props) {
    const [statsData, setStatsData] = useState(props.data);
    console.log(statsData);

    const colors = ['#28548a', '#9cbbe2'];

    return (
        <div>
            <div className='modal-datatext'> Total Number of Students: <span className='modal-stats'>{statsData[0] + statsData[1]}</span></div>
            <div className='modal-datatext'> Number of Students Placed:  <span className='modal-stats'>{statsData[0]}</span></div>
            <div className='modal-datatext'> Number of Students Unplaced:  <span className='modal-stats'>{statsData[1]}</span></div>
            <div className="d-flex justify-content-center m-3">
                <div className="donut-div">
                    <Doughnut data={{
                        labels: [
                            'Placed',
                            'Unplaced',
                        ],
                        datasets: [
                            {
                                data: statsData,
                                backgroundColor: colors,
                                borderColor: colors,
                                borderWidth: 1,
                                hoverBorderColor: colors,
                                hoverBorderWidth: 2,
                            },
                        ],
                    }}
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    enabled: true,
                                },
                            },
                            animation: {
                                duration: 2,
                            },
                            cutout: '68%',
                        }} />
                </div>
                <div className="donut-legend m-4">
                    <div className="h5 m-0 donut-legend-heading">Placed</div>
                    <div className="h2 m-0 donut-legend-subheading ">{Math.round((statsData[0]) / (statsData[0] + statsData[1]) * 100)}%</div>
                    <div className="donut-legend-placed"><span className="dot dot-placed me-2"></span>PLACED</div>
                    <div className="donut-legend-unplaced"><span className="dot dot-unplaced me-2"></span>UNPLACED</div>
                </div>
            </div>

        </div>
    )
}
