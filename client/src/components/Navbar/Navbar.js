import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core';
import {
  AccountCircle,
  Close,
  Email,
  HomeOutlined,
  MenuOutlined,
} from '@material-ui/icons';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FactoryIcon from '@mui/icons-material/Factory';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

import React, { useEffect, useState } from 'react';

import './styles.css';

import logo from '../../Images/Indian_Institute_of_Technology_(Indian_School_of_Mines),_Dhanbad_Logo.png';
import { Logout, Login } from '@mui/icons-material';

const Navbar = () => {
  let [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [sideBar, setSideBar] = useState(false);
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
    // eslint-disable-next-line
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    setUser(undefined);
    setSideBar(() => false);
    Navigate('/auth');
  };

  return (
    <>
      {user && user.isemailVerified && (
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
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {user && user.Name === 'Admin' ? (
                  <IconButton
                    size='medium'
                    edge='end'
                    color='inherit'
                    onClick={() => Navigate('/admin')}
                    style={{ alignItems: 'center' }}
                  >
                    <h5
                      style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}
                    >
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
                    <h5
                      style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}
                    >
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
                    <h5
                      style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}
                    >
                      Applications
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
                    <h5
                      style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}
                    >
                      Companies
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
                    onClick={() => Navigate('/admin/jnf')}
                    style={{ alignItems: 'center' }}
                  >
                    <h5
                      style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}
                    >
                      JNFs
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
                    onClick={() => Navigate('/admin/inf')}
                    style={{ alignItems: 'center' }}
                  >
                    <h5
                      style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}
                    >
                      INFs
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
                    <h5
                      style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}
                    >
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
                    <h5
                      style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}
                    >
                      Invites
                    </h5>
                  </IconButton>
                )}
              </Box>
              {/* <Typography variant="h6" noWrap component={"div"} sx={{ display: { xs: 'none', sm: 'block' } }}>Registration Portal</Typography> */}
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
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
                  display: { sm: 'flex', xs: 'flex', md: 'none' },
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  className='menuOutlined'
                  onClick={() =>
                    sideBar ? setSideBar(false) : setSideBar(true)
                  }
                >
                  <MenuOutlined />
                </div>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      )}
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
        <div className='menuContent mt-3'>
          <div className='sideNavbar-item '>
            <HomeOutlined style={{ marginBottom: '5px' }} />
            {user && user.Name === 'Admin' ? (
              <IconButton
                size='medium'
                edge='end'
                color='inherit'
                onClick={() => {
                  setSideBar(() => false);
                  Navigate('/admin');
                }}
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
                onClick={() => {
                  setSideBar(() => false);
                  Navigate('/');
                }}
                style={{ alignItems: 'center' }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                  Home
                </h5>
              </IconButton>
            )}
          </div>

          {user?.role !== 'Admin' && (
            <div className='sideNavbar-item '>
              <MenuOutlined style={{ marginBottom: '5px' }} />
              <IconButton
                size='medium'
                edge='end'
                color='inherit'
                onClick={() => {
                  setSideBar(() => false);
                  Navigate('/myjobs');
                }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                  Applications
                </h5>
              </IconButton>
            </div>
          )}
          <div className='sideNavbar-item '>
            <MenuBookIcon style={{ marginBottom: '5px' }} />
            <IconButton
              size='medium'
              edge='end'
              color='inherit'
              onClick={() => {
                setSideBar(() => false);
                Navigate('/courses');
              }}
              style={{ alignItems: 'center' }}
            >
              <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                Courses
              </h5>
            </IconButton>
          </div>
          {user && user.Name === 'Admin' ? (
            <div className='sideNavbar-item '>
              <FactoryIcon style={{ marginBottom: '5px' }} />
              <IconButton
                size='medium'
                edge='end'
                color='inherit'
                onClick={() => {
                  setSideBar(() => false);
                  Navigate('/admin/company');
                }}
                style={{ alignItems: 'center' }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                  Companies
                </h5>
              </IconButton>
            </div>
          ) : (
            <></>
          )}
          {user && user.role === 'Admin' ? (
            <div className='sideNavbar-item '>
              <FormatListBulletedIcon style={{ marginBottom: '5px' }} />
              <IconButton
                size='medium'
                edge='end'
                color='inherit'
                onClick={() => {
                  setSideBar(() => false);
                  Navigate('/admin/jnf');
                }}
                style={{ alignItems: 'center' }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                  JNFs
                </h5>
              </IconButton>
            </div>
          ) : (
            <></>
          )}
          {user && user.role === 'Admin' ? (
            <div className='sideNavbar-item '>
              <FormatListBulletedIcon style={{ marginBottom: '5px' }} />
              <IconButton
                size='medium'
                edge='end'
                color='inherit'
                onClick={() => {
                  setSideBar(() => false);
                  Navigate('/admin/inf');
                }}
                style={{ alignItems: 'center' }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                  INFs
                </h5>
              </IconButton>
            </div>
          ) : (
            <></>
          )}
          {(user === undefined || user?.role !== 'Admin') && (
            <div className='sideNavbar-item '>
              <Email style={{ marginBottom: '5px' }} />
              <IconButton
                size='medium'
                edge='end'
                color='inherit'
                onClick={() => {
                  setSideBar(() => false);
                  Navigate('/contactus');
                }}
                style={{ alignItems: 'center' }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                  Contact Us
                </h5>
              </IconButton>
            </div>
          )}
          {user?.role === 'Admin' && (
            <div className='sideNavbar-item '>
              <ContactMailIcon style={{ marginBottom: '5px' }} />
              <IconButton
                size='medium'
                edge='end'
                color='inherit'
                onClick={() => {
                  setSideBar(() => false);
                  Navigate('/company/invites');
                }}
                style={{ alignItems: 'center' }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                  Invites
                </h5>
              </IconButton>
            </div>
          )}
        </div>
        <div className='profileContent'>
          {user ? (
            <>
              <div className='sideNavbar-item '>
                <AccountCircle style={{ marginBottom: '5px' }} />

                <IconButton
                  size='medium'
                  edge='end'
                  color='inherit'
                  onClick={() => {
                    setSideBar(() => false);
                    Navigate('/profile');
                  }}
                >
                  <h5
                    style={{
                      margin: '0 1.5rem 0 0.5rem',
                      fontSize: '17px',
                    }}
                  >
                    {user.Name}
                  </h5>
                </IconButton>
              </div>
              <div className='sideNavbar-item '>
                <Logout style={{ marginBottom: '5px', color: 'white' }} />

                <IconButton
                  size='medium'
                  color='inherit'
                  onClick={handleLogout}
                  style={{ alignItems: 'center' }}
                >
                  <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '17px' }}>
                    Logout
                  </h5>
                </IconButton>
              </div>
            </>
          ) : (
            <div className='sideNavbar-item '>
              <Login style={{ color: 'white' }} />

              <IconButton
                size='medium'
                color='inherit'
                onClick={handleLogin}
                style={{ alignItems: 'center' }}
              >
                <h5 style={{ margin: '0 1.5rem 0 0.5rem', fontSize: '19px' }}>
                  Login
                </h5>
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
