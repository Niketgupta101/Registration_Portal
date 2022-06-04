import React, { useEffect } from 'react';
import { Input, FormGroup, Label, Button, Form, Row, Col } from 'reactstrap';
import { sendCustomEmail } from '../../../api';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import { useNavigate } from 'react-router-dom';

const CustomInvite = () => {
  const initialData = {
    email: '',
    subject: '',
    message: '',
  };
  const [emailData, setFormData] = useState(initialData);

  const Navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.isemailVerified === false || user.role !== 'Admin') {
      Navigate('/auth');
    }
  }, [Navigate, user]);

  const handleChange = (e) => {
    setFormData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await sendCustomEmail(emailData);
      setFormData({ ...initialData });
    } catch (error) {
      Navigate("/badgateway");
    }
    
   
  };

  return (
    <>
      <div className='contactUs-mainbox'>
        <div className='contact3'>
          <div className='row no-gutters'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 card-shadow'>
                  <img
                    src='https://people.iitism.ac.in/~acic/assets/images/banner.jpeg'
                    className='contactUsimage'
                  />
                </div>
                <div className='col-lg-6'>
                  <div className='contact-box ml-3'>
                    <h1 className='font-weight-light mt-2'>Send An Email</h1>
                    <form onSubmit={handleFormSubmit} className='mt-4'>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <input
                              className='form-control'
                              type='text'
                              placeholder='Name'
                              name='name'
                              required
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <input
                              className='form-control'
                              type='email'
                              placeholder='Email address'
                              name='email'
                              required
                              value={emailData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <textarea
                              className='form-control'
                              rows='3'
                              placeholder='Subject'
                              name='subject'
                              id='subject'
                              required
                              value={emailData.subject}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>

                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <textarea
                              className='form-control'
                              rows='3'
                              placeholder='Message'
                              name='message'
                              id='message'
                              required
                              value={emailData.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <button
                            type='submit'
                            className='btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2'
                          >
                            <span> SEND</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='col-lg-12 mt-3'>
                  <div className='card-contact mt-4 border-0 mb-4'>
                    <div className='row ms-3'>
                      <div className='col-lg-4 col-md-4'>
                        <div className='card-body d-flex align-items-center c-detail pl-0'>
                          <div className='mr-3 align-self-center'>
                            <img src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png' />
                          </div>
                          <div className='mx-3'>
                            <h6 className='font-weight-medium'>Address</h6>
                            <p className=''>
                              {' '}
                              Dhanbad, Jharkhand
                              <br /> 826004
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4'>
                        <div className='card-body d-flex align-items-center c-detail'>
                          <div className='mr-3 align-self-center'>
                            <img src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png' />
                          </div>
                          <div className='ms-4'>
                            <h6 className='font-weight-medium'>Phone</h6>
                            <p className=''>
                              251 546 9442
                              <br /> 630 446 8851
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4'>
                        <div className='card-body d-flex align-items-center c-detail'>
                          <div className='mr-3 align-self-center'>
                            <img src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png' />
                          </div>
                          <div className='mx-3'>
                            <h6 className='font-weight-medium'>Email</h6>
                            <p className=''>
                              cdc@iitism.ac.in
                              {/* <br /> 123@wrappixel.com */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomInvite;
