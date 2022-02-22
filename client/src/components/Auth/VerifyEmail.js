import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sendConfirmationLink } from '../../api';


import './styles.css';

const VerifyEmail = ({ email, setIsSignIn, setPage }) => {
    const Navigate = useNavigate();

    const handleSendLink = async (e) => {
      e.preventDefault();
      try {
        const response = await sendConfirmationLink(email);
        setIsSignIn(true);
        setPage('auth');
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <>
        <div className="verifyEmail">
            <div className="verify_container">
                <h3>Your Email has not yet been verified.</h3>
                <h5>An Email verification would be sent to the email id linked with your account</h5>
                { email && (<h5>i.e., <span style={{ fontWeight: "700"}}>{email}</span></h5>)}
                <h5>Proceed once verified</h5>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end"}}>
                  <button className='submit_btn' style={{ padding: "0.5rem 1rem", margin: "1rem", background: "rbg(60, 85, 165)" }} onClick={handleSendLink}>Send Link</button>
                  {/* <button className='submit_btn' style={{ padding: "0.5rem 1rem", margin: "1rem", background: "rbg(60, 85, 165) !imporatnt" }} onClick={() => Navigate('/auth')}>Proceed to Login</button> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default VerifyEmail