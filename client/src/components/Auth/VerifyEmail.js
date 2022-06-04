import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { sendConfirmationLink } from '../../api';
import { FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import 'animate.css';
import './styles.css';

const VerifyEmail = ({ email, setIsSignIn, setPage }) => {
  const Navigate = useNavigate();
  const notify = () =>
    toast.success('Verification link sent to Email', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSendLink = async (e) => {
    e.preventDefault();
    try {
      await sendConfirmationLink(email);
      notify();
      setIsSignIn(() => true);

      setPage('auth');
    } catch (error) {
      Navigate("/badgateway");
    }
  };

  return (
    <>
      <div className='w3layouts-main'>
        <div className='bg-layer'>
          <div className='verifyEmail '>
            <div className='verify_container'>
              <div className='verify-header '>
                <div className='d-flex justify-content-center'>
                  <div className='verifyline align-self-center mx-3'></div>
                  <FaEnvelope style={{ fontSize: '3em' }} />
                  <div className='verifyline align-self-center mx-3'></div>
                </div>
                <div className='verify-thanks text-center my-3'>
                  THANKS FOR SIGNING UP!
                </div>
                <div className='text-center verify-email'>
                  Verify your Email Address
                </div>
              </div>
              <div className='d-flex justify-content-center mt-4 verify-text-1'>
                Hi,{' '}
              </div>
              <div className='text-center verify-text-2'>
                You are almost ready to get started. Your E-mail id has not yet
                been verified. A verification link has been sent to your
                registered email id <b>{email && email}</b> linked with your
                account. If you haven't recieved the email, kindly{' '}
                <b>Click on the button Below to resend</b> the link.
              </div>
              <div className='d-flex justify-content-center'>
                <button
                  className='verify-link-button '
                  onClick={handleSendLink}
                >
                  Resend Verification Link
                </button>
                <ToastContainer
                  position='top-right'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
              <div className='d-flex justify-content-center mt-3 verify-text-3'>
                {' '}
                Thanks,
              </div>
              <div className='d-flex justify-content-center verify-text-3'>
                CDC, IIT(ISM) Dhanbad
              </div>
              {/* <h3>Your Email has not yet been verified.</h3>
              <h5>An Email verification would be sent to the email id linked with your account</h5>
              {email && (<h5>i.e., <span style={{ fontWeight: "700" }}>{email}</span></h5>)}
              <h5>Proceed once verified</h5>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end" }}>
                <button className='submit_btn' style={{ padding: "0.5rem 1rem", margin: "1rem", background: "rbg(60, 85, 165)" }} onClick={handleSendLink}>Send Link</button>
                <button className='submit_btn' style={{ padding: "0.5rem 1rem", margin: "1rem", background: "rbg(60, 85, 165) !imporatnt" }} onClick={() => Navigate('/auth')}>Proceed to Login</button>
              </div> */}
              <Button
                className='mt-2 animate__animated animate__pulse animate__infinite'
                variant='text'
                size='large'
                onClick={() => {
                  Navigate('/auth');
                  setIsSignIn(() => true);
                  setPage('auth');
                }}
              >
                <b style={{ fontSize: '1.2rem' }}>Go Back to Login Page</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
