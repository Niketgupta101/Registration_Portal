import React, { useState } from 'react';
import './newStyle.css';
import { FaArchway, FaUserAlt, FaLock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const Home2 = () => {
  const [newUser, setNewUser] = useState(false);

  return (
    <div className='w3layouts-main'>
      <div className='bg-layer'>
        <h1 className='h1-home'>CDC Placement Portal</h1>
        <div className='header-main'>
          <div className='main-icon'>
            <FaArchway style={{ color: 'white', fontSize: '3em' }} />
            <span className='fa fa-eercast'></span>
          </div>
          {newUser === true ? (
            <>
              <div className='header-left-bottom'>
                <form action='#' method='post'>
                  <div className='d-flex my-0'>
                    <div className='icon1 d-flex me-1 my-0'>
                      <div className='me-1'>
                        <FaUserAlt />
                      </div>
                      <input type='text' placeholder='First Name*' required='' />
                    </div>
                    <div className='icon1 d-flex ms-1 my-0'>
                      <div className='me-1'>
                        <FaUserAlt />
                      </div>
                      <input type='text' placeholder='Last Name*' required='' />
                    </div>
                  </div>

                  <div className='icon1 d-flex my-2'>
                    <div className='me-2'>
                      <FaEnvelope />
                    </div>
                    <input type='email' placeholder='Email Address *' required='' />
                  </div>
                  <div className='icon1 d-flex my-2'>
                    <div className='me-2'>
                      <FaPhoneAlt />
                    </div>
                    <input type='text' placeholder='Contact Number *' required='' />
                  </div>
                  <div className='icon1 d-flex my-2'>
                    <div className='me-2'>
                      <FaLock />
                    </div>
                    <input type='password' placeholder='Password *' required='' />
                  </div>
                  <div className='icon1 d-flex my-2'>
                    <div className='me-2'>
                      <FaLock />
                    </div>
                    <input type='password' placeholder='Re-enter Password *' required='' />
                  </div>

                  <div className='bottom mb-2 mt-4'>
                    <button className='btn'>Register</button>
                  </div>
                  <div className='links'>

                    <p className=''>
                      <a className='a-home' onClick={() => setNewUser(false)} style={{ cursor: 'pointer' }}>
                        Already have an Acoount? Log in
                      </a>
                    </p>
                    <div className='clear'></div>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className='header-left-bottom'>
              <form action='#' method='post'>
                <div className='icon1 d-flex my-3'>
                  <div className='me-2'>
                    <FaUserAlt />
                  </div>
                  <input type='email' placeholder='Email Address' required='' />
                </div>
                <div className='icon1 d-flex my-4'>
                  <div className='me-2'>
                    <FaLock />
                  </div>
                  <input type='password' placeholder='Password' required='' />
                </div>

                <div className='bottom mb-2 mt-5'>
                  <button className='btn'>Log In</button>
                </div>
                <div className='links '>
                  <p className='para'>
                    <a className='a-home' href='/forgotPassword' style={{ cursor: 'pointer' }}>
                      Forgot Password?
                    </a>
                  </p>
                  <p className='right para'>
                    <a className='a-home' onClick={() => setNewUser(true)} style={{ cursor: 'pointer' }}>
                      New User? Register
                    </a>
                  </p>
                  <div className='clear'></div>
                </div>
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
