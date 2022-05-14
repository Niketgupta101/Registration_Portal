import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'


export default function DonutModal(props) {
    const [statsData, setStatsData] = useState(props.data);
    console.log(statsData);
    const finalYearData = [parseInt(statsData[2]), parseInt(statsData[1]) - parseInt(statsData[2])]
    const thirdYearData = [parseInt(statsData[4]), parseInt(statsData[3]) - parseInt(statsData[4])]
    const colorsFinalYear = ['#28548a', '#9cbbe2'];
    const colorsThirdYear = ['#ad755e', '#fcbca0'];

    return (
        <>
            <div>
                <div className='modal-type-heading mb-2'> For Placements</div>
                <div className='modal-datatext'> Total Number of Students: <span className='modal-stats'>{parseInt(statsData[1])}</span></div>
                <div className='modal-datatext'> Number of Students Placed:  <span className='modal-stats'>{parseInt(statsData[2])}</span></div>
                <div className='modal-datatext'> Number of Students Unplaced:  <span className='modal-stats'>{parseInt(statsData[1]) - parseInt(statsData[2])}</span></div>
                <div className="d-flex justify-content-center m-3">
                    <div className="donut-div">
                        <Doughnut data={{
                            labels: [
                                'Placed',
                                'Unplaced',
                            ],
                            datasets: [
                                {
                                    data: finalYearData,
                                    backgroundColor: colorsFinalYear,
                                    borderColor: colorsFinalYear,
                                    borderWidth: 1,
                                    hoverBorderColor: colorsFinalYear,
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
                        <div className="h2 m-0 donut-legend-subheading ">{Math.round(parseInt(statsData[2]) / parseInt(statsData[1]) * 100)}%</div>
                        <div className="donut-legend-placed"><span className="dot dot-placed me-2"></span>PLACED</div>
                        <div className="donut-legend-unplaced"><span className="dot dot-unplaced me-2"></span>UNPLACED</div>
                    </div>
                </div>

            </div>
            <div>
                <div className='modal-type-heading mb-2'> For Internship</div>

                <div className='modal-datatext'> Total Number of Students: <span className='modal-stats'>{parseInt(statsData[3])}</span></div>
                <div className='modal-datatext'> Number of Students Placed:  <span className='modal-stats'>{parseInt(statsData[4])}</span></div>
                <div className='modal-datatext'> Number of Students Unplaced:  <span className='modal-stats'>{parseInt(statsData[3]) - parseInt(statsData[4])}</span></div>
                <div className="d-flex justify-content-center m-3">
                    <div className="donut-div">
                        <Doughnut data={{
                            labels: [
                                'Placed',
                                'Unplaced',
                            ],
                            datasets: [
                                {
                                    data: thirdYearData,
                                    backgroundColor: colorsThirdYear,
                                    borderColor: colorsThirdYear,
                                    borderWidth: 1,
                                    hoverBorderColor: colorsThirdYear,
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
                        <div className="h2 m-0 donut-legend-subheading ">{Math.round(parseInt(statsData[4]) / parseInt(statsData[3]) * 100)}%</div>
                        <div style={{ color: '#ad755e' }}><span className="dot dot-placed me-2" style={{ backgroundColor: '#ad755e' }}></span>PLACED</div>
                        <div style={{ color: '#fcbca0' }}><span className="dot dot-unplaced me-2" style={{ backgroundColor: '#fcbca0' }}></span>UNPLACED</div>
                    </div>
                </div>

            </div>
        </>

    )
}
