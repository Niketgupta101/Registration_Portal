import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';

import './styles.css';
import {
  getCompanyCount,
  getGraduationYear,
  getInfCount,
  getJnfCount,
  getPlacedCount,
  updateGraduationYear,
} from '../../../api';
import { PeopleAltTwoTone } from '@material-ui/icons';
import { FileOpenRounded, HomeWork } from '@mui/icons-material';
import Contact from './Contact';

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const Navigate = useNavigate();
  const [IsLoading, setIsLoading] = useState(false);
  const [jobCount, setJobCount] = useState(0);
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [CompanyCount, setCompanyCount] = useState(0);
  const [placedCount, setPlacedCount] = useState(0);
  const [Year, setYear] = useState(2023);

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.isemailVerified === false || user.role !== 'Admin') {
      Navigate('/auth');
    }
  }, [Navigate, user]);

  const [show, setShow] = React.useState(false);
  const [duration, setDuration] = useState('');

  const handleOpen = (e) => {
    setDuration(e.target.value);
    setShow(true);
  };
  const handleAgree = () => {
    handleYearChange(duration);
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response1 = await getInfCount();
      const response2 = await getJnfCount();
      const response3 = await getCompanyCount();
      const response4 = await getPlacedCount();
      const { data } = await getGraduationYear();
      setYear(data.year);
      setJobCount(response1?.data?.infCount + response2?.data?.jnfCount);
      setCompanyCount(response3?.data?.companyCount);
      setPlacedCount(response4?.data?.placed);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Navigate('/badgateway');
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleYearChange = async (year) => {
    setYear(year);
    try {
      await updateGraduationYear({
        graduationYear: year,
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
                  <span className='admin_card_content_value'>{jobCount}</span>
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
                    {CompanyCount}
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
              onChange={handleOpen}
            >
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </Input>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Graduation Year</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to change the graduation year to {duration}
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Cancel
              </Button>
              <Button variant='primary' onClick={handleAgree}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
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
