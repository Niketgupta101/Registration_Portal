import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { sendConfirmationLink } from '../../api';
import { FaEnvelope } from 'react-icons/fa';


import './styles.css';

const VerifyEmail = ({ email, setIsSignIn, setPage }) => {
  // const Navigate = useNavigate();

  const handleSendLink = async (e) => {
    e.preventDefault();
    try {
      await sendConfirmationLink(email);
      setIsSignIn(true);
      setPage('auth');
    } catch (error) {
      console.log(error);
    }
  }
  const a = "krittika@gmail.com"

  return (
    <>
      <div className="w3layouts-main">
        <div className="bg-layer">
          <h1 className="h1-home">CDC Placement Portal</h1>
          <div className="verifyEmail mt-4">
            <div className="verify_container">
              <div className='verify-header '>
                <div className='d-flex justify-content-center'>
                  <div className='verifyline align-self-center mx-3'></div>
                  <FaEnvelope style={{ fontSize: '3em' }} />
                  <div className='verifyline align-self-center mx-3'></div>
                </div>
                <div className="verify-thanks text-center my-3">THANKS FOR SIGNING UP!</div>
                <div className='text-center verify-email' >Verify your Email Address</div>
              </div>
              <div className='d-flex justify-content-center mt-4 verify-text-1'>Hi, </div>
              <div className='text-center verify-text-2'>
                You are almost ready to get started.
                Your E-mail id has not yet been verified.
                Please, click on the button below to verify your email address.
                A link would be sent to the email id - {email && (email)}
                linked with your account
              </div>
              <div className='d-flex justify-content-center'>
                <button className='verify-link-button ' onClick={handleSendLink}>Send Verification Link</button>
              </div>
              <div className='d-flex justify-content-center mt-3 verify-text-3'> Thanks,</div>
              <div className='d-flex justify-content-center verify-text-3'>CDC, IIT(ISM) Dhanbad</div>
              {/* <h3>Your Email has not yet been verified.</h3>
              <h5>An Email verification would be sent to the email id linked with your account</h5>
              {email && (<h5>i.e., <span style={{ fontWeight: "700" }}>{email}</span></h5>)}
              <h5>Proceed once verified</h5>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end" }}>
                <button className='submit_btn' style={{ padding: "0.5rem 1rem", margin: "1rem", background: "rbg(60, 85, 165)" }} onClick={handleSendLink}>Send Link</button>
                <button className='submit_btn' style={{ padding: "0.5rem 1rem", margin: "1rem", background: "rbg(60, 85, 165) !imporatnt" }} onClick={() => Navigate('/auth')}>Proceed to Login</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyEmail