import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

import './styles.css';
import {
  getAllCompanyDetails,
  getGraduationYear,
  getPlacedCount,
  updateGraduationYear,
} from '../../../api';
import { getAllJobs } from '../../../api/index';
import { PeopleAltTwoTone } from '@material-ui/icons';
import { FileOpenRounded, HomeWork } from '@mui/icons-material';
import Contact from './Contact';

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const Navigate = useNavigate();
  const [IsLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [Companies, setCompanies] = useState();
  const [Year, setYear] = useState(2023);

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.isemailVerified === false || user.role !== 'Admin') {
      Navigate('/auth');
    }
  }, [Navigate, user]);

  const [placedCount, setPlacedCount] = useState();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response1 = await getAllCompanyDetails();
      const response2 = await getAllJobs();
      const response3 = await getPlacedCount();
      const { data } = await getGraduationYear();
      setYear(data.year);
      setCompanies(response1.data.companyList);
      setJobs(response2.data.jobs);
      setPlacedCount(response3.data.placed);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Navigate('/badgateway');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user') !== null) fetchData();
  }, []);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleYearChange = async (e) => {
    setYear(e.target.value);
    try {
      const response = await updateGraduationYear({
        graduationYear: e.target.value,
      });
    } catch (error) {
      Navigate('/badgateway');
    }
  };

  return (
    <>
      <div className='admin_home'>
        <div className='admin_home_container'>
          <div className='admin_home_cards'>
            <div className='home_users_card home_card'>
              <div className='card_avatar'>
                <PeopleAltTwoTone
                  style={{
                    width: '35px',
                    height: '35px',
                    color: 'rgb(60, 85, 165)',
                  }}
                />
                <h3>Students</h3>
              </div>
              <div className='card_content'>
                <h3 className='admin_card_content_heading'>
                  Placed:{' '}
                  <span className='admin_card_content_value'>
                    {' '}
                    {placedCount}{' '}
                  </span>
                </h3>
              </div>
            </div>
            <div className='home_jobs_card home_card'>
              <div className='card_avatar'>
                <FileOpenRounded
                  style={{
                    width: '35px',
                    height: '35px',
                    color: 'rgb(60, 85, 165)',
                  }}
                />
                <h3>Jobs</h3>
              </div>
              <div className='card_content'>
                <h3 className='admin_card_content_heading'>
                  Total:{' '}
                  <span className='admin_card_content_value'>
                    {jobs !== undefined ? jobs.length : 0}
                  </span>
                </h3>
              </div>
            </div>
            <div className='home_jobs_card home_card'>
              <div className='card_avatar'>
                <HomeWork
                  style={{
                    width: '35px',
                    height: '35px',
                    color: 'rgb(60, 85, 165)',
                  }}
                />
                <h3>Companies</h3>
              </div>
              <div className='card_content'>
                <h3 className='admin_card_content_heading'>
                  {' '}
                  Registered:{' '}
                  <span className='admin_card_content_value'>
                    {Companies !== undefined ? Companies.length : 0}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center p-5'></div>
          <div id='setyear'>
            <h4>Set the Graduation Year :</h4>
            <Input
              id='exampleSelect'
              name='Internship_Duration'
              type='select'
              className='inputText'
              value={Year}
              onChange={handleYearChange}
            >
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </Input>
          </div>
          <Contact />
        </div>
        {/* <TabContext value={value}>
          <Box sx={{ width: '100%', height: '90px' }}>
            <TabPanel value='Home'></TabPanel>
            <TabPanel value='Companies'>
              <Company />
            </TabPanel>
            <TabPanel value='Jobs'>
              <Jobs />
            </TabPanel>
            <TabPanel value='Invites'>
              <Invites />
            </TabPanel>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              style={{
                borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '2px 2px 5px 5px rgba(0,0,0,0.06)',
                width: '100%',
                position: 'fixed',
                bottom: '0',
              }}
            >
              <BottomNavigationAction
                sx={style}
                label='Home'
                value={'Home'}
                icon={<HomeOutlined />}
              />
              <BottomNavigationAction
                sx={style}
                label='Companies'
                value={'Companies'}
                icon={<HomeWork />}
              />
              <BottomNavigationAction
                sx={style}
                label='Jobs'
                value={'Jobs'}
                icon={<Work />}
              />
              <BottomNavigationAction
                sx={style}
                label='Invites'
                value={'Invites'}
                icon={<FileOpenRounded />}
              />
            </BottomNavigation>
          </Box>
        </TabContext> */}
      </div>
      {IsLoading && <Loading />}
    </>
  );
};

export default Home;
