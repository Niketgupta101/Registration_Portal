import React, { useState } from 'react';
import './newStyle.css';
import {
  FaArchway,
  FaUserAlt,
  FaLock,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

export const Home2 = ({
  isSignIn,
  AuthData,
  handleAuthChange,
  handleAuthSubmit,
  switchMode,
  successOpen,
  handleSuccessClose,
  errorOpen,
  handleErrorClose,
  handleForgotPassword,
  handleCompanySubmit,
}) => {
  return (
    <div className='w3layouts-main'>
      <div className='bg-layer'>
        <h1 className='h1-home'>CDC Placement Portal</h1>
        <div className='header-main'>
          <div className='main-icon'>
            <FaArchway style={{ color: 'white', fontSize: '3em' }} />
            <span className='fa fa-eercast'></span>
          </div>
          {isSignIn === false ? (
            <>
              <div className='header-left-bottom'>
                <form action='#' method='post'>
                  <div className='d-flex my-0'>
                    <div className='icon1 d-flex me-1 my-0'>
                      <div className='me-1'>
                        <FaUserAlt />
                      </div>
                      <input
                        type='text'
                        name='firstName'
                        placeholder='First Name*'
                        required=''
                        value={AuthData.firstName}
                        onChange={handleAuthChange}
                      />
                    </div>
                    <div className='icon1 d-flex ms-1 my-0'>
                      <div className='me-1'>
                        <FaUserAlt />
                      </div>
                      <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name*'
                        required=''
                        value={AuthData.lastName}
                        onChange={handleAuthChange}
                      />
                    </div>
                  </div>

                  <div className='icon1 d-flex my-2'>
                    <div className='me-2'>
                      <FaEnvelope />
                    </div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email Address *'
                      required=''
                      value={AuthData.email}
                      onChange={handleAuthChange}
                    />
                  </div>
                  <div className='icon1 d-flex my-2'>
                    <div className='me-2'>
                      <FaPhoneAlt />
                    </div>
                    <input
                      type='text'
                      name='contactNo'
                      placeholder='Contact Number *'
                      required=''
                      value={AuthData.contactNo}
                      onChange={handleAuthChange}
                    />
                  </div>
                  <div className='icon1 d-flex my-2'>
                    <div className='me-2'>
                      <FaLock />
                    </div>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password *'
                      required=''
                      value={AuthData.password}
                      onChange={handleAuthChange}
                    />
                  </div>
                  <div className='icon1 d-flex my-2'>
                    <div className='me-2'>
                      <FaLock />
                    </div>
                    <input
                      type='password'
                      name='confirmPassword'
                      placeholder='Re-enter Password *'
                      required=''
                      value={AuthData.confirmPassword}
                      onChange={handleAuthChange}
                    />
                  </div>

                  <div className='bottom mb-2 mt-4'>
                    <button className='btn' onClick={handleAuthSubmit}>
                      Register
                    </button>
                  </div>
                  <div className='links'>
                    <p className=''>
                      <a
                        className='a-home'
                        onClick={switchMode}
                        style={{ cursor: 'pointer' }}
                      >
                        Already have an Acount? Log in
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
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    required=''
                    value={AuthData.email}
                    onChange={handleAuthChange}
                  />
                </div>
                <div className='icon1 d-flex my-4'>
                  <div className='me-2'>
                    <FaLock />
                  </div>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    required=''
                    value={AuthData.password}
                    onChange={handleAuthChange}
                  />
                </div>

                <div className='bottom mb-2 mt-5'>
                  <button className='btn' onClick={handleCompanySubmit}>
                    Log In
                  </button>
                </div>
                <div className='links '>
                  <p className='para'>
                    <a
                      className='a-home'
                      onClick={handleForgotPassword}
                      style={{ cursor: 'pointer' }}
                    >
                      Forgot Password?
                    </a>
                  </p>
                  <p className='right para'>
                    <a
                      className='a-home'
                      onClick={switchMode}
                      style={{ cursor: 'pointer' }}
                    >
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
