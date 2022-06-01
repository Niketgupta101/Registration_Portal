import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import 'animate.css';
import Loading from '../Loading/Loading';
import './styles.css';

import { getAllCourseData } from '../../api/index.js';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [btech, setBtech] = useState([]);
  const [fiveyear, setFiveyear] = useState([]);
  const [doublemajor, setDoublemajor] = useState([]);
  const [dualdegree, setDualdegree] = useState([]);
  const [threeyearmsc, setThreeyearmsc] = useState([]);
  const [twoyearmba, setTwoyearmba] = useState([]);
  const [twoyearmsc, setTwoyearmsc] = useState([]);
  const [twoyearmtech, setTwoyearmtech] = useState([]);

  const Navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.isemailVerified === false) {
      Navigate('/auth');
    }
  }, [Navigate, user]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(async () => {
    setIsLoading(true);
    const response = await getAllCourseData();
    setIsLoading(false);

    let temp = response.data.data;

    setCourses(() => temp);
    setBtech(() => temp.slice(0, 12));
    setFiveyear(() => temp.slice(12, 15));
    setDoublemajor(() => temp.slice(15, 16));
    setDualdegree(() => temp.slice(16, 18));
    setThreeyearmsc(() => temp.slice(18, 20));
    setTwoyearmba(() => temp.slice(20, 22));
    setTwoyearmsc(() => temp.slice(22, 25));
    setTwoyearmtech(() => temp.slice(25, 45));
  }, []);

  return (
    <div className='company-dashboard-container'>
      <div className='jumbotron jumbotron-fluid p-2'>
        <div
          className='m-2 hero-content-container mx-auto'
          style={{ maxWidth: 1000 }}
        >
          <div className='courses_list align-left'>
            <div class='ug-pg d-flex m-0 justify-content-center bg-transparent'>
              <div className='flex-grow-1 '>
                <h1 className='ug-pg-h1 prog-hover'>
                  Programs
                  <span className='ug-pg-span'>
                    <b>
                      List of Programs offered by IIT(ISM) Dhanbad. Click for
                      more details
                    </b>
                  </span>
                </h1>
              </div>
            </div>
            <div className='buttons'>
              <div
                className='bt animate__animated animate__fadeInLeft'
                id='btnfirst'
              >
                <Button
                  variant='outlined'
                  onClick={() => Navigate('/courses/btech', { state: btech })}
                  style={{
                    maxWidth: '350px',
                    minWidth: '350px',
                    backgroundColor: 'white',
                  }}
                >
                  <div className='courses-button'>B.Tech - 4 year</div>
                </Button>
              </div>
              <div className='bt animate__animated animate__fadeInRight'>
                <Button
                  style={{
                    maxWidth: '350px',
                    minWidth: '350px',
                    backgroundColor: 'white',
                  }}
                  variant='outlined'
                  onClick={() =>
                    Navigate('/courses/fiveyear', { state: fiveyear })
                  }
                >
                  <div className='courses-button'>
                    Integrated M.Tech- 5 years
                  </div>
                </Button>
              </div>
              <div className='bt animate__animated animate__fadeInLeft'>
                <Button
                  style={{
                    maxWidth: '350px',
                    minWidth: '350px',
                    backgroundColor: 'white',
                  }}
                  variant='outlined'
                  onClick={() =>
                    Navigate('/courses/doublemajor', { state: doublemajor })
                  }
                >
                  <div className='courses-button'>Double Major</div>
                </Button>
              </div>
              <div className='bt animate__animated animate__fadeInRight'>
                <Button
                  style={{
                    maxWidth: '350px',
                    minWidth: '350px',
                    backgroundColor: 'white',
                  }}
                  variant='outlined'
                  onClick={() =>
                    Navigate('/courses/dualdegree', { state: dualdegree })
                  }
                >
                  <div className='courses-button'>Dual Degree</div>
                </Button>
              </div>
              <div className='bt animate__animated animate__fadeInLeft'>
                <Button
                  style={{
                    maxWidth: '350px',
                    minWidth: '350px',
                    backgroundColor: 'white',
                  }}
                  variant='outlined'
                  onClick={() =>
                    Navigate('/courses/twoyearmba', { state: twoyearmba })
                  }
                >
                  <div className='courses-button'>M.B.A - 2 year</div>
                </Button>
              </div>
              <div className='bt  animate__animated animate__fadeInRight'>
                <Button
                  style={{
                    maxWidth: '350px',
                    minWidth: '350px',
                    backgroundColor: 'white',
                  }}
                  variant='outlined'
                  onClick={() =>
                    Navigate('/courses/twoyearmsc', { state: twoyearmsc })
                  }
                >
                  <div className='courses-button'>M.SC - 2 Year </div>
                </Button>
              </div>
              <div className='bt animate__animated animate__fadeInLeft'>
                <Button
                  style={{
                    maxWidth: '350px',
                    minWidth: '350px',
                    backgroundColor: 'white',
                  }}
                  variant='outlined'
                  onClick={() =>
                    Navigate('/courses/twoyearmtech', { state: twoyearmtech })
                  }
                >
                  <div className='courses-button'>M.Tech - 2 year</div>
                </Button>
              </div>
              <div className='bt  animate__animated animate__fadeInRight'>
                <Button
                  style={{
                    maxWidth: '350px',
                    minWidth: '350px',
                    backgroundColor: 'white',
                  }}
                  variant='outlined'
                  onClick={() =>
                    Navigate('/courses/threeyearmsc', { state: threeyearmsc })
                  }
                >
                  <div className='courses-button'>M.SC - 3 Year</div>
                </Button>
              </div>
            </div>
            {isLoading && <Loading />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
