import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const getInt = (value) => {
  if (isNaN(value) === false) return parseInt(value);
  return 0;
};
export default function DonutModal(props) {
  const [statsData, setStatsData] = useState(props.data);

  let placed = getInt(statsData[2]);
  let unplaced = getInt(statsData[1]) - getInt(statsData[2]);
  let interned = getInt(statsData[4]);
  let unintered = getInt(statsData[3]) - getInt(statsData[4]);
  const finalYearData = [placed, unplaced];
  const thirdYearData = [interned, unintered];
  const colorsFinalYear = ['#28548a', '#9cbbe2'];
  const colorsThirdYear = ['#ad755e', '#fcbca0'];

  return (
    <>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <div className='modal-type-heading mb-2'> For Placements</div>
          <div className='modal-datatext'>
            {' '}
            Total Number of Students:{' '}
            <span className='modal-stats'>{placed + unplaced}</span>
          </div>
          <div className='modal-datatext'>
            {' '}
            Number of Students Placed:{' '}
            <span className='modal-stats'>{placed}</span>
          </div>
          <div className='modal-datatext'>
            {' '}
            Number of Students Unplaced:{' '}
            <span className='modal-stats'>{unplaced}</span>
          </div>
          <div className='d-flex justify-content-center m-3'>
            <div className='donut-div'>
              <Doughnut
                data={{
                  labels: ['Placed', 'Unplaced'],
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
                }}
              />
            </div>
            <div className='donut-legend m-4'>
              <div className='h5 m-0 donut-legend-heading'>Placed</div>
              <div className='h2 m-0 donut-legend-subheading '>
                {Math.round((placed / (placed + unplaced)) * 100)}%
              </div>
              <div className='donut-legend-placed'>
                <span className='dot dot-placed me-2'></span>PLACED
              </div>
              <div className='donut-legend-unplaced'>
                <span className='dot dot-unplaced me-2'></span>UNPLACED
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12'>
          <div className='modal-type-heading mb-2'> For Internship</div>

          <div className='modal-datatext'>
            {' '}
            Total Number of Students:{' '}
            <span className='modal-stats'>{interned + unintered}</span>
          </div>
          <div className='modal-datatext'>
            {' '}
            Number of Students Placed:{' '}
            <span className='modal-stats'>{interned}</span>
          </div>
          <div className='modal-datatext'>
            {' '}
            Number of Students Unplaced:{' '}
            <span className='modal-stats'>{unintered}</span>
          </div>
          <div className='d-flex justify-content-center m-3'>
            <div className='donut-div'>
              <Doughnut
                data={{
                  labels: ['Placed', 'Unplaced'],
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
                }}
              />
            </div>
            <div className='donut-legend m-4'>
              <div className='h5 m-0 donut-legend-heading'>Placed</div>
              <div className='h2 m-0 donut-legend-subheading '>
                {Math.round((interned / (interned + unintered)) * 100)}%
              </div>
              <div style={{ color: '#ad755e' }}>
                <span
                  className='dot dot-placed me-2'
                  style={{ backgroundColor: '#ad755e' }}
                ></span>
                PLACED
              </div>
              <div style={{ color: '#fcbca0' }}>
                <span
                  className='dot dot-unplaced me-2'
                  style={{ backgroundColor: '#fcbca0' }}
                ></span>
                UNPLACED
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
