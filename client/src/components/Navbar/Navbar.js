import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  AccountCircle,
  Book,
  Close,
  ContactMail,
  HomeOutlined,
  MenuOutlined,
  WorkOutline,
} from '@material-ui/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

import React, { useEffect, useState } from 'react';

import './styles.css';

import logo from '../../Images/Indian_Institute_of_Technology_(Indian_School_of_Mines),_Dhanbad_Logo.png';
import { Logout, Login } from '@mui/icons-material';

const Navbar = () => {
  let [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [sideBar, setSideBar] = useState(false);
  // console.log(user);
  const Navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    Navigate('/auth');
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
      const decodeToken = decode(token);

      if (decodeToken.exp * 1000 < new Date().getTime()) handleLogout();
    }

    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    setUser(undefined);
    Navigate('/');
  };

  return (
    <>
      <Box
        xs={{ flexGrow: 1 }}
        style={{ display: `${user ? 'block' : 'none'}` }}
      >
        <AppBar position='static'>
          <Toolbar>
            <img
              src={logo}
              alt=''
              style={{ width: '6vh', height: '6vh', margin: 'auto 0.5rem' }}
            />
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {user && user.Name === 'Admin' ? (
                <IconButton
                  size='medium'
                  edge='end'
                  color='inherit'
                  onClick={() => Navigate('/admin')}
                  style={{ alignItems: 'center' }}
                >
                  <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                    Home
                  </h5>
                </IconButton>
              ) : (
                <IconButton
                  size='medium'
                  edge='end'
                  color='inherit'
                  onClick={() => Navigate('/')}
                  style={{ alignItems: 'center' }}
                >
                  <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                    Home
                  </h5>
                </IconButton>
              )}
              {user?.role !== 'Admin' && (
                <IconButton
                  size='medium'
                  edge='end'
                  color='inherit'
                  onClick={() => Navigate('/myjobs')}
                  style={{ alignItems: 'center' }}
                >
                  <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                    My Jobs
                  </h5>
                </IconButton>
              )}
              <IconButton
                size='medium'
                edge='end'
                color='inherit'
                onClick={() => Navigate('/courses')}
                style={{ alignItems: 'center' }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                  Courses
                </h5>
              </IconButton>
              {user && user.Name === 'Admin' ? (
                <IconButton
                  size='medium'
                  edge='end'
                  color='inherit'
                  onClick={() => Navigate('/admin/company')}
                  style={{ alignItems: 'center' }}
                >
                  <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                    Registered Companies
                  </h5>
                </IconButton>
              ) : (
                <></>
              )}
              {user && user.role === 'Admin' ? (
                <IconButton
                  size='medium'
                  edge='end'
                  color='inherit'
                  onClick={() => Navigate('/admin/jobs')}
                  style={{ alignItems: 'center' }}
                >
                  <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                    All Jobs
                  </h5>
                </IconButton>
              ) : (
                <></>
              )}
              {(user === undefined || user?.role !== 'Admin') && (
                <IconButton
                  size='medium'
                  edge='end'
                  color='inherit'
                  onClick={() => Navigate('/contactus')}
                  style={{ alignItems: 'center' }}
                >
                  <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                    Contact Us
                  </h5>
                </IconButton>
              )}
              {user?.role === 'Admin' && (
                <IconButton
                  size='medium'
                  edge='end'
                  color='inherit'
                  onClick={() => Navigate('/company/invites')}
                  style={{ alignItems: 'center' }}
                >
                  <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                    Invites
                  </h5>
                </IconButton>
              )}
            </Box>
            {/* <Typography variant="h6" noWrap component={"div"} sx={{ display: { xs: 'none', sm: 'block' } }}>Registration Portal</Typography> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              {user ? (
                <>
                  {user && user.Name === 'Admin' ? (
                    <IconButton
                      size='medium'
                      edge='end'
                      color='inherit'
                      style={{ alignItems: 'center', cursor: 'context-menu' }}
                    >
                      <AccountCircle />
                      <h5
                        style={{
                          margin: '0 1.5rem 0 0.5rem',
                          fontSize: '17px',
                        }}
                      >
                        {user.Name}
                      </h5>
                    </IconButton>
                  ) : (
                    <IconButton
                      size='medium'
                      edge='end'
                      color='inherit'
                      onClick={() => Navigate('/profile')}
                      style={{ alignItems: 'center' }}
                    >
                      <AccountCircle />
                      <h5
                        style={{
                          margin: '0 1.5rem 0 0.5rem',
                          fontSize: '17px',
                        }}
                      >
                        {user.Name}
                      </h5>
                    </IconButton>
                  )}

                  <IconButton
                    size='medium'
                    color='inherit'
                    onClick={handleLogout}
                    style={{ fontSize: '16px' }}
                  >
                    <Logout style={{ color: 'white', margin: '0 0.5rem' }} />
                    Logout
                  </IconButton>
                </>
              ) : (
                <Button color='inherit' onClick={handleLogin}>
                  <Login style={{ color: 'white', margin: '0 0.5rem' }} />
                  Login
                </Button>
              )}
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', sm: 'none' },
                justifyContent: 'flex-end',
              }}
            >
              <div
                className='menuOutlined'
                onClick={() => (sideBar ? setSideBar(false) : setSideBar(true))}
              >
                <MenuOutlined />
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        className='sideMenuBar'
        style={sideBar ? { display: 'flex' } : { display: 'none' }}
      >
        <div className='close'>
          <Close
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={() => (sideBar ? setSideBar(false) : setSideBar(true))}
          />
        </div>
        <div className='menuContent'>
          <div
            className='item item1'
            onClick={() => {
              Navigate('/');
              setSideBar(false);
            }}
          >
            <HomeOutlined style={{ color: 'white' }} />
            <Typography
              variant='h6'
              style={{ color: 'white', margin: 'auto 0.5rem' }}
            >
              Home Page
            </Typography>
          </div>
          <div
            className='item item2'
            onClick={() => {
              Navigate('/myjobs');
              setSideBar(false);
            }}
          >
            <WorkOutline style={{ color: 'white' }} />
            <Typography
              variant='h6'
              style={{ color: 'white', margin: 'auto 0.5rem' }}
            >
              My Jobs
            </Typography>
          </div>
          <div
            className='item item3'
            onClick={() => {
              Navigate('/courses');
              setSideBar(false);
            }}
          >
            <Book style={{ color: 'white' }} />
            <Typography
              variant='h6'
              style={{ color: 'white', margin: 'auto 0.5rem' }}
            >
              Courses
            </Typography>
          </div>
          <div
            className='item item4'
            onClick={() => {
              Navigate('/contactus');
              setSideBar(false);
            }}
          >
            <ContactMail style={{ color: 'white' }} />
            <Typography
              variant='h6'
              style={{ color: 'white', margin: 'auto 0.5rem' }}
            >
              Contact Us
            </Typography>
          </div>
        </div>
        <div className='profileContent'>
          {user ? (
            <>
              <div
                className='item item1'
                onClick={() => {
                  Navigate('/profile');
                  setSideBar(false);
                }}
              >
                <AccountCircle style={{ color: 'white' }} />
                <Typography
                  variant='h6'
                  style={{ color: 'white', margin: 'auto 0.5rem' }}
                >
                  Profile
                </Typography>
              </div>
              <div
                className='item item1'
                onClick={() => {
                  handleLogout();
                  setSideBar(false);
                }}
              >
                <Logout style={{ color: 'white' }} />
                <Typography
                  variant='h6'
                  style={{ color: 'white', margin: 'auto 0.5rem' }}
                >
                  Logout
                </Typography>
              </div>
            </>
          ) : (
            <div
              className='item item1'
              onClick={() => {
                handleLogin();
                setSideBar(false);
              }}
            >
              <Login style={{ color: 'white' }} />
              <Typography
                variant='h6'
                style={{ color: 'white', margin: 'auto 0.5rem' }}
              >
                Login
              </Typography>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
