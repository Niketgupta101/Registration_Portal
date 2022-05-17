import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

import './styles.css';
import { getAllCompanyDetails, getPlacedCount } from '../../../api';
import { getAllJobs } from '../../../api/index';

import { PeopleAltTwoTone } from '@material-ui/icons';
import {
  FileOpenRounded,
  HomeOutlined,
  HomeWork,
  Work,
} from '@mui/icons-material';
import Company from '../Company/Company';
import Jobs from '../Jobs/Jobs';
import { TabContext, TabPanel } from '@mui/lab';
import Contact from './Contact';
import Invites from '../Invites/Invites';

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const [value, setValue] = useState('Home');
  const Navigate = useNavigate();
  const [IsLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [Companies, setCompanies] = useState();

  const [placedCount, setPlacedCount] = useState();

  useEffect(async () => {
    if (!user) Navigate('/auth');
    else {
      setUser(localStorage.getItem('user'));
      setIsLoading(true);
      const response1 = await getAllCompanyDetails();
      const response2 = await getAllJobs();
      const response3 = await getPlacedCount();
      setIsLoading(false);
      setCompanies(response1.data.companyList);
      setJobs(response2.data.jobs);
      setPlacedCount(response3.data.placed);
    }
  }, []);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const style = {
    width: '10vw',
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
